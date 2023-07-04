/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A Ceramic Commit ID */
  CeramicCommitID: { input: any; output: any };
  /** A Ceramic Stream ID */
  CeramicStreamID: { input: any; output: any };
  /** A field whose value conforms to the standard Uniform Resource Identifier (URI) format as specified in RFC3986. */
  URI: { input: any; output: any };
};

export type CeramicAccount = Node & {
  __typename?: "CeramicAccount";
  dappList?: Maybe<DappConnection>;
  /** Globally unique identifier of the account (DID string) */
  id: Scalars["ID"]["output"];
  /** Whether the Ceramic instance is currently authenticated with this account or not */
  isViewer: Scalars["Boolean"]["output"];
};

export type CeramicAccountDappListArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CreateDappInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  content: DappInput;
};

export type CreateDappPayload = {
  __typename?: "CreateDappPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  document: Dapp;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};

export type CreateDappPayloadNodeArgs = {
  id: Scalars["ID"]["input"];
};

export type Dapp = Node & {
  __typename?: "Dapp";
  description?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<Scalars["URI"]["output"]>;
  id: Scalars["ID"]["output"];
  models?: Maybe<Array<Maybe<Scalars["CeramicStreamID"]["output"]>>>;
  name: Scalars["String"]["output"];
  socialLink?: Maybe<Array<Maybe<DappSocialLink>>>;
  tags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  url?: Maybe<Scalars["URI"]["output"]>;
  /** Current version of the document */
  version: Scalars["CeramicCommitID"]["output"];
};

/** A connection to a list of items. */
export type DappConnection = {
  __typename?: "DappConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DappEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DappEdge = {
  __typename?: "DappEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<Dapp>;
};

export type DappInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["URI"]["input"]>;
  models?: InputMaybe<Array<InputMaybe<Scalars["CeramicStreamID"]["input"]>>>;
  name: Scalars["String"]["input"];
  socialLink?: InputMaybe<Array<InputMaybe<DappSocialLinkInput>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url?: InputMaybe<Scalars["URI"]["input"]>;
};

export type DappSocialLink = {
  __typename?: "DappSocialLink";
  platform: Scalars["String"]["output"];
  url: Scalars["URI"]["output"];
};

export type DappSocialLinkInput = {
  platform: Scalars["String"]["input"];
  url: Scalars["URI"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createDapp?: Maybe<CreateDappPayload>;
  updateDapp?: Maybe<UpdateDappPayload>;
};

export type MutationCreateDappArgs = {
  input: CreateDappInput;
};

export type MutationUpdateDappArgs = {
  input: UpdateDappInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"]["output"];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type PartialDappInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  icon?: InputMaybe<Scalars["URI"]["input"]>;
  models?: InputMaybe<Array<InputMaybe<Scalars["CeramicStreamID"]["input"]>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  socialLink?: InputMaybe<Array<InputMaybe<DappSocialLinkInput>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  url?: InputMaybe<Scalars["URI"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  dappIndex?: Maybe<DappConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};

export type QueryDappIndexArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"]["input"];
};

export type UpdateDappInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  content: PartialDappInput;
  id: Scalars["ID"]["input"];
  options?: InputMaybe<UpdateOptionsInput>;
};

export type UpdateDappPayload = {
  __typename?: "UpdateDappPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  document: Dapp;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Account currently authenticated on the Ceramic instance, if set */
  viewer?: Maybe<CeramicAccount>;
};

export type UpdateDappPayloadNodeArgs = {
  id: Scalars["ID"]["input"];
};

export type UpdateOptionsInput = {
  /** Fully replace the document contents instead of performing a shallow merge */
  replace?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Only perform mutation if the document matches the provided version */
  version?: InputMaybe<Scalars["CeramicCommitID"]["input"]>;
};

export type GetDappQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetDappQuery = {
  __typename?: "Query";
  node?:
    | { __typename?: "CeramicAccount"; id: string }
    | { __typename?: "Dapp"; id: string }
    | null;
};

export type CreateDappMutationVariables = Exact<{
  input: CreateDappInput;
}>;

export type CreateDappMutation = {
  __typename?: "Mutation";
  createDapp?: {
    __typename?: "CreateDappPayload";
    document: { __typename?: "Dapp"; id: string };
  } | null;
};

export type UpdateDappMutationVariables = Exact<{
  input: UpdateDappInput;
}>;

export type UpdateDappMutation = {
  __typename?: "Mutation";
  updateDapp?: {
    __typename?: "UpdateDappPayload";
    document: { __typename?: "Dapp"; id: string };
  } | null;
};

export const GetDappDocument = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "OperationDefinition",
      "operation": "query",
      "name": { "kind": "Name", "value": "GetDapp" },
      "variableDefinitions": [
        {
          "kind": "VariableDefinition",
          "variable": {
            "kind": "Variable",
            "name": { "kind": "Name", "value": "id" },
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": { "kind": "Name", "value": "ID" },
            },
          },
        },
      ],
      "selectionSet": {
        "kind": "SelectionSet",
        "selections": [
          {
            "kind": "Field",
            "name": { "kind": "Name", "value": "node" },
            "arguments": [
              {
                "kind": "Argument",
                "name": { "kind": "Name", "value": "id" },
                "value": {
                  "kind": "Variable",
                  "name": { "kind": "Name", "value": "id" },
                },
              },
            ],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [
                { "kind": "Field", "name": { "kind": "Name", "value": "id" } },
                {
                  "kind": "InlineFragment",
                  "typeCondition": {
                    "kind": "NamedType",
                    "name": { "kind": "Name", "value": "Dapp" },
                  },
                  "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [
                      {
                        "kind": "Field",
                        "name": { "kind": "Name", "value": "id" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetDappQuery, GetDappQueryVariables>;
export const CreateDappDocument = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "OperationDefinition",
      "operation": "mutation",
      "name": { "kind": "Name", "value": "CreateDapp" },
      "variableDefinitions": [
        {
          "kind": "VariableDefinition",
          "variable": {
            "kind": "Variable",
            "name": { "kind": "Name", "value": "input" },
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": { "kind": "Name", "value": "CreateDappInput" },
            },
          },
        },
      ],
      "selectionSet": {
        "kind": "SelectionSet",
        "selections": [
          {
            "kind": "Field",
            "name": { "kind": "Name", "value": "createDapp" },
            "arguments": [
              {
                "kind": "Argument",
                "name": { "kind": "Name", "value": "input" },
                "value": {
                  "kind": "Variable",
                  "name": { "kind": "Name", "value": "input" },
                },
              },
            ],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [
                {
                  "kind": "Field",
                  "name": { "kind": "Name", "value": "document" },
                  "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [
                      {
                        "kind": "Field",
                        "name": { "kind": "Name", "value": "id" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateDappMutation, CreateDappMutationVariables>;
export const UpdateDappDocument = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "OperationDefinition",
      "operation": "mutation",
      "name": { "kind": "Name", "value": "UpdateDapp" },
      "variableDefinitions": [
        {
          "kind": "VariableDefinition",
          "variable": {
            "kind": "Variable",
            "name": { "kind": "Name", "value": "input" },
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": { "kind": "Name", "value": "UpdateDappInput" },
            },
          },
        },
      ],
      "selectionSet": {
        "kind": "SelectionSet",
        "selections": [
          {
            "kind": "Field",
            "name": { "kind": "Name", "value": "updateDapp" },
            "arguments": [
              {
                "kind": "Argument",
                "name": { "kind": "Name", "value": "input" },
                "value": {
                  "kind": "Variable",
                  "name": { "kind": "Name", "value": "input" },
                },
              },
            ],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [
                {
                  "kind": "Field",
                  "name": { "kind": "Name", "value": "document" },
                  "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [
                      {
                        "kind": "Field",
                        "name": { "kind": "Name", "value": "id" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateDappMutation, UpdateDappMutationVariables>;
