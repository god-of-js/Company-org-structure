<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { transactionModule } from "@/store/modules/Transactions.store";
import { Transaction } from "@/types/interfaces";

@Component({
  name: "TransactionList",
})
export default class TransactionList extends Vue {
  get transactions(): Transaction[] {
    return transactionModule.transactions;
  }
  mounted(): void {
    transactionModule.getTransactions();
  }
}
</script>

<template>
  <div>
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Account</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Currency</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(transaction, index) in transactions" :key="index" class="row">
        <td>{{ transaction.id }}</td>
        <td>{{ transaction.account }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.currency }}</td>
        <td>
          <base-link
            :to="{ name: 'Transaction', params: { id: transaction.id } }"
            >view</base-link
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.table {
  width: 80%;
  margin: auto;
  text-align: left;
}
.row:hover {
  color: black;
  background: white;
}
</style>
