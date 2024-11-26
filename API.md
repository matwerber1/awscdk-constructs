# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoIdentityStore <a name="SsoIdentityStore" id="@matwerber/awscdk-constructs.SsoIdentityStore"></a>

#### Initializers <a name="Initializers" id="@matwerber/awscdk-constructs.SsoIdentityStore.Initializer"></a>

```typescript
import { SsoIdentityStore } from '@matwerber/awscdk-constructs'

new SsoIdentityStore(scope: Construct, id: string, props?: SsoIdentityStoreProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - The scope in which to define this construct. |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStore.Initializer.parameter.id">id</a></code> | <code>string</code> | - The scoped construct ID. |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStore.Initializer.parameter.props">props</a></code> | <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStoreProps">SsoIdentityStoreProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@matwerber/awscdk-constructs.SsoIdentityStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@matwerber/awscdk-constructs.SsoIdentityStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

---

##### `props`<sup>Optional</sup> <a name="props" id="@matwerber/awscdk-constructs.SsoIdentityStore.Initializer.parameter.props"></a>

- *Type:* <a href="#@matwerber/awscdk-constructs.SsoIdentityStoreProps">SsoIdentityStoreProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStore.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@matwerber/awscdk-constructs.SsoIdentityStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@matwerber/awscdk-constructs.SsoIdentityStore.isConstruct"></a>

```typescript
import { SsoIdentityStore } from '@matwerber/awscdk-constructs'

SsoIdentityStore.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@matwerber/awscdk-constructs.SsoIdentityStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStore.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | The unique identifier for the identity store that is connected to your IAM Identity Center instance. |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStore.property.instanceArn">instanceArn</a></code> | <code>string</code> | The ARN of the IAM Identity Center instance. |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStore.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | The AWS account ID that owns the IAM Identity Center instance. |

---

##### `node`<sup>Required</sup> <a name="node" id="@matwerber/awscdk-constructs.SsoIdentityStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@matwerber/awscdk-constructs.SsoIdentityStore.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

The unique identifier for the identity store that is connected to your IAM Identity Center instance.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@matwerber/awscdk-constructs.SsoIdentityStore.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The ARN of the IAM Identity Center instance.

This is a globally unique identifier for your IAM Identity Center instance.

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@matwerber/awscdk-constructs.SsoIdentityStore.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

The AWS account ID that owns the IAM Identity Center instance.

This will always be your AWS Organization's
management account ID.

---


## Structs <a name="Structs" id="Structs"></a>

### SsoIdentityStoreProps <a name="SsoIdentityStoreProps" id="@matwerber/awscdk-constructs.SsoIdentityStoreProps"></a>

An AWS IAM Identity Center identity store used for AWS Single Sign-on (SSO).

This construct retrieves information about an existing SSO identity store using the AWS SSO Admin API.

*Example*

```typescript
const identityStore = new SsoIdentityStore(this, 'MySsoIdentityStore');
console.log(identityStore.identityStoreId);
```


#### Initializer <a name="Initializer" id="@matwerber/awscdk-constructs.SsoIdentityStoreProps.Initializer"></a>

```typescript
import { SsoIdentityStoreProps } from '@matwerber/awscdk-constructs'

const ssoIdentityStoreProps: SsoIdentityStoreProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStoreProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | Optional CloudWatch Log Group to store the invocation logs of the Lambda function backing the custom resource used to retrieve the identity store ID. |
| <code><a href="#@matwerber/awscdk-constructs.SsoIdentityStoreProps.property.ssoHomeRegion">ssoHomeRegion</a></code> | <code>string</code> | The AWS region in which AWS Identity Center (aka AWS SSO) is currently configured for your Organization and which will be used in the AWS API call used to retrieve information about your identity store ID. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@matwerber/awscdk-constructs.SsoIdentityStoreProps.property.logGroup"></a>

```typescript
public readonly logGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

Optional CloudWatch Log Group to store the invocation logs of the Lambda function backing the custom resource used to retrieve the identity store ID.

If not provided, a new log group will be created and
configured with a 7-day retention period.

---

##### `ssoHomeRegion`<sup>Optional</sup> <a name="ssoHomeRegion" id="@matwerber/awscdk-constructs.SsoIdentityStoreProps.property.ssoHomeRegion"></a>

```typescript
public readonly ssoHomeRegion: string;
```

- *Type:* string

The AWS region in which AWS Identity Center (aka AWS SSO) is currently configured for your Organization and which will be used in the AWS API call used to retrieve information about your identity store ID.

If AWS SSO is not configured in the same region as the current CDK stack, this parameter is required.
If AWS SSO is configured in the same region as the stack, you can omit this parameter.

---



