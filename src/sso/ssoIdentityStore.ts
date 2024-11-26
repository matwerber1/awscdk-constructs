import {
  custom_resources as cr,
  aws_logs as logs,
  RemovalPolicy, Duration, Stack,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * An AWS IAM Identity Center identity store used for AWS Single Sign-on (SSO).
 * This construct retrieves information about an existing SSO identity store using the AWS SSO Admin API.
 *
 * @example
 * const identityStore = new SsoIdentityStore(this, 'MySsoIdentityStore');
 * console.log(identityStore.identityStoreId);
 */

export interface SsoIdentityStoreProps {
  /** The AWS region in which AWS Identity Center (aka AWS SSO) is currently configured for your Organization
   *  and which will be used in the AWS API call used to retrieve information about your identity store ID.
   *
   * If AWS SSO is not configured in the same region as the current CDK stack, this parameter is required.
   * If AWS SSO is configured in the same region as the stack, you can omit this parameter.
   */
  readonly ssoHomeRegion?: string;

  /** Optional CloudWatch Log Group to store the invocation logs of the Lambda function backing the custom
   * resource used to retrieve the identity store ID. If not provided, a new log group will be created and
   * configured with a 7-day retention period.
   */
  readonly logGroup?: logs.LogGroup;
}
export class SsoIdentityStore extends Construct {
  /**
   * The unique identifier for the identity store that is connected to your IAM Identity Center instance.
   */
  public readonly identityStoreId: string;

  /**
   * The ARN of the IAM Identity Center instance.
   * This is a globally unique identifier for your IAM Identity Center instance.
   */
  public readonly instanceArn: string;

  /**
   * The AWS account ID that owns the IAM Identity Center instance. This will always be your AWS Organization's
   * management account ID.
   */
  public readonly ownerAccountId: string;

  /**
   * Creates a custom CloudFormation resource that retrieves information about an existing
   * AWS Identity Center (SSO) identity store ID.
   *
   * A singleton AWS Lambda function is created and acts as the custom resource provider by
   * using the AWS SsoAdmin ListInstances API to find and make available your identity store ID
   * and instance ARN to other stack resources.
   *
   * **Requirements for using this resource**:
   *  - AWS IAM Identity Center must have been already configured in your AWS Organization.
   *
   *  - This resource must be deployed in either your AWS Organization's management account or an AWS IAM
   *    Identity Center delegated administrator account.
   *
   * @param scope - The scope in which to define this construct
   * @param id - The scoped construct ID
   */
  constructor(scope: Construct, id: string, props?: SsoIdentityStoreProps) {
    super(scope, id);

    // Region in which AWS SSO was configured for current AWS Organization
    const ssoHomeRegion: string =
      props?.ssoHomeRegion ?? Stack.of(this).region;

    // Use AWS SDK to make an sso-admin API call to retrieve info about the existing SSO identity store
    const identityStoreResource = new cr.AwsCustomResource(
      this,
      'IdentityStoreResource',
      {
        resourceType: 'Custom::SSO-IdentityStore',
        onUpdate: {
          service: 'SSOAdmin',
          action: 'listInstances',
          parameters: ssoHomeRegion ? { region: ssoHomeRegion } : undefined,
          physicalResourceId: cr.PhysicalResourceId.of(Date.now().toString()),
        },
        memorySize: 256,
        logGroup:
          props?.logGroup ??
          new logs.LogGroup(this, 'LogGroup', {
            retention: logs.RetentionDays.ONE_WEEK,
            removalPolicy: RemovalPolicy.DESTROY,
          }),
        timeout: Duration.seconds(10),
        policy: cr.AwsCustomResourcePolicy.fromSdkCalls({
          resources: cr.AwsCustomResourcePolicy.ANY_RESOURCE,
        }),
      },
    );

    // Currently, an AWS Organization can only have one identity store so we use the first (and presumably, only)
    // item sso-admin list-instances API call. If in the future AWS adds support for multiple identity stores,
    // we will need to rethink this approach.
    this.identityStoreId = identityStoreResource.getResponseField(
      'Instances.0.IdentityStoreId',
    );
    this.instanceArn = identityStoreResource.getResponseField(
      'Instances.0.InstanceArn',
    );
    this.ownerAccountId = identityStoreResource.getResponseField(
      'Instances.0.OwnerAccountId',
    );
  }
}
