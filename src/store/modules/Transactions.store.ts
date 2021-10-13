import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import API from "@/api";
import { IFilter, ITransaction } from "@/types/interfaces";

@Module
class TransactionsModule extends VuexModule {
  transactions: ITransaction[] = [];
  transaction: ITransaction | null = null;
  sortValue: IFilter = null;

  @Mutation
  setTransactions(param: ITransaction[]) {
    this.transactions = param;
  }

  @Mutation
  setTransaction(param: ITransaction) {
    this.transaction = param;
  }

  @Mutation
  setFilter(value: IFilter) {
    this.sortValue = value;
  }

  get transactionList(): ITransaction[] {
    if (this.sortValue === "start") {
      const transactions = this.transactions?.slice().sort((first, second) => {
        const a = new Date(first.createdAt);
        const b = new Date(second.createdAt);

        return a.getTime() - b.getTime();
      });
      return transactions;
    } else if (this.sortValue === "end") {
      const transactions = this.transactions?.slice().sort((first, second) => {
        const a = new Date(first.createdAt);
        const b = new Date(second.createdAt);

        return b.getTime() - a.getTime();
      });
      return transactions;
    }
    return this.transactions;
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
