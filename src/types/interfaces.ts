export interface ITransaction {
  id: number;
  uid: string;
  account: string;
  description: string;
  category: string;
  reference: string;
  currency: string;
  amount: string;
  status: string;
  transactionDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface IDateFilter {
  startMonth: string;
  endMonth: string;
}
export type ISorter = "start" | "end" | null;
