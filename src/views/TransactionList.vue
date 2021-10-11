<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "TransactionList",
})
export default class TransactionList extends Vue {}
</script>

<template>
  <div>
    <router-view />
  </div>
</template>
