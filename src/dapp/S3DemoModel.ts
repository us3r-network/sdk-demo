import { ComposeClient } from "@composedb/client";
import { RuntimeCompositeDefinition } from "@composedb/types";
import { DIDSession } from "did-session";
import type { CeramicApi } from "@ceramicnetwork/common";
import { DID } from "dids";
import { Page } from "@ceramicnetwork/common";

import { definition } from "./runtime-composite";

import {
  Dapp,
  CreateDappInput,
  CreateDappPayload,
  UpdateDappInput,
  UpdateDappPayload,
  Scalars,
} from "./graphql";

export class S3DappModel {
  composeClient: ComposeClient;

  constructor(ceramic: CeramicApi | string) {
    this.composeClient = new ComposeClient({
      ceramic: ceramic,
      definition: definition as RuntimeCompositeDefinition,
    });
  }

  public authComposeClient(session: DIDSession) {
    if (!session || (session.hasSession && session.isExpired)) {
      throw new Error("Please login with wallet first!");
    }
    this.composeClient.setDID(session.did);
  }

  public resetComposeClient() {
    const did = new DID();
    this.composeClient.setDID(did);
  }

  async createDapp(input: CreateDappInput) {
    const mutation = `
      mutation createDapp($input: CreateDappInput!) {
        createDapp(input: $input) {
          document {
            id
          }
        }
      }
    `;
    const resp = await this.composeClient.executeQuery<{
      createDapp: CreateDappPayload;
    }>(mutation, {
      input: {
        content: {
          ...input.content,
        },
      },
    });
    return resp;
  }

  async updateDapp(input: UpdateDappInput) {
    const mutation = `
      mutation($input: UpdateDappInput!) {
        updateDapp(input: $input) {
          document {
            id
          }
        }
      }
    `;
    const resp = await this.composeClient.executeQuery<{
      updateDapp: UpdateDappPayload;
    }>(mutation, {
      input: {
        id: input.id,
        content: {
          ...input.content,
        },
      },
    });

    return resp;
  }

  async queryDappIndex({
    first = 100,
    after = "",
  }: {
    first: number;
    after?: string;
  }) {
    const query = `
      query {
        dappIndex(first: ${first}, after: "${after}") {
          edges {
            node {
              id
              # other fields
              name
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
        }
      }
    `;

    const resp = await this.composeClient.executeQuery<{
      dappIndex: Page<Dapp>;
    }>(query);

    return resp;
  }

  async queryDappWithId(id: Scalars["ID"]["input"]) {
    const query = `
      query($id: ID!) {
        node(id: $id) {
          ... on Dapp {
            id
            # other fields
          }
        }
      }
    `;

    const resp = await this.composeClient.executeQuery<{
      node: Dapp;
    }>(query, {
      id,
    });

    return resp;
  }
}
