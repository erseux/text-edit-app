import * as Types from '../../schema/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type MeMyselfAndIQueryVariables = Types.Exact<{
  userIdpId: Types.Scalars['String'];
}>;


export type MeMyselfAndIQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, idpId: string, email: string }> };

export const namedOperations = {
  Query: {
    MeMyselfAndI: 'MeMyselfAndI'
  }
}

export const MeMyselfAndIDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeMyselfAndI"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userIdpId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"idpId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userIdpId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"idpId"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<MeMyselfAndIQuery, MeMyselfAndIQueryVariables>;