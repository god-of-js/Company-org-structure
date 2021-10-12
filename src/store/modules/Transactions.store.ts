import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import API from "@/api";
import { Transaction } from "@/types/interfaces";

@Module
class TransactionsModule extends VuexModule {
  transactions: Transaction[] = [];
  transaction: Transaction | null = null;

  @Mutation
  setTransactions(param: Transaction[]) {
    this.transactions = param;
  }

  @Mutation
  setTransaction(param: Transaction) {
    this.transaction = param;
  }

  @Action
  async getTransactionByID(param: number): Promise<void> {
    const { transaction } = await API.getTransactionById(param);
    this.setTransaction(transaction);
  }

  @Action
  async getTransactions(): Promise<void> {
    const { transactions } = await API.getTransactions();
    this.setTransactions(transactions);
  }
}

import store from "../index";
export const transactionModule = new TransactionsModule({
  store,
  name: "Transactions",
});
