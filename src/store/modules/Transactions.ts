import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import { Transaction } from "@/types/interfaces";
@Module
class TransactionsModule extends VuexModule {
  transactions: Transaction[] = [];
  @Mutation
  InitialMutation(param: Transaction[]) {
    this.transactions = param;
  }

  @Action
  async getTransactions(): Promise<void> {
    return;
  }
}

import store from "../index";
export const actorModule = new TransactionsModule({
  store,
  name: "Transactions",
});
