import defaultClient from "./apollo.instance";
import { DocumentNode } from "apollo-link";
import { GET_TRANSACTION_BY_ID, GET_TRANSACTIONS } from "./queries";
import { ITransaction } from "@/types/interfaces";

class API {
  async getTransactionById(id: number): Promise<{ transaction: ITransaction }> {
    return API.queryGQL<{ id: number }>(GET_TRANSACTION_BY_ID, {
      id,
    });
  }

  async getTransactions(): Promise<{ transactions: ITransaction[] }> {
    return API.queryGQL(GET_TRANSACTIONS);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static queryGQL<T = any>(query: DocumentNode, data?: T): Promise<any> {
    return defaultClient
      .query({ query, variables: data })
      .then(({ data }) => data)
      .catch((err) => console.log(err));
  }
}

export default API;
