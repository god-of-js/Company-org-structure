<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { transactionModule } from "@/store/modules/Transactions.store";
import { IFilter, ITransaction } from "@/types/interfaces";

@Component({
  name: "Transactions",
})
export default class TransactionList extends Vue {
  get transactions(): ITransaction[] {
    return transactionModule.transactionList;
  }
  getDate(date: string): string {
    return ` ${new Date(date).getDate()} - ${new Date(
      date
    ).getMonth()} - ${new Date(date).getFullYear()}`;
  }

  private setFilter(value: IFilter) {
    transactionModule.setFilter(value);
  }

  mounted(): void {
    transactionModule.getTransactions();
  }
}
</script>

<template>
  <div>
    <div class="actions">
      <base-button @click="setFilter('start')"
        ><base-icon icon="filter" class="icon-margin" /> Filter by start
        month</base-button
      >
      <base-button @click="setFilter('end')"
        ><base-icon icon="filter" class="icon-margin" /> Filter by end
        month</base-button
      >
    </div>
    <table class="table">
      <tr>
        <th>ID</th>
        <th>Account</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Currency</th>
        <th>CreatedAt</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(transaction, index) in transactions" :key="index" class="row">
        <td>{{ transaction.id }}</td>
        <td>{{ transaction.account }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.currency }}</td>
        <td>{{ getDate(transaction.createdAt) }}</td>
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
.actions {
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}

.icon-margin {
  margin-right: 10px;
}
</style>
