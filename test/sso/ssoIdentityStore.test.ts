import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import { SsoIdentityStore } from '../../src/sso/ssoIdentityStore';

test('SsoIdentityStore creates expected resources', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');
  new SsoIdentityStore(stack, 'TestIdentityStore', {});
  const template = Template.fromStack(stack);
  const createUpdateMatchValue = Match.objectEquals({
    'Fn::Join': Match.arrayEquals([
      '',
      Match.arrayEquals([
        '{\"service\":\"SSOAdmin\",\"action\":\"listInstances\",\"parameters\":{\"region\":\"',
        Match.objectEquals({
          Ref: 'AWS::Region',
        }),
        Match.anyValue(),
      ]),
    ]),
  });
  template.hasResourceProperties('Custom::SSO-IdentityStore', {
    Create: createUpdateMatchValue,
    Update: createUpdateMatchValue,
  });
});
