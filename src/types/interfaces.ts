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

export type IFilter = "start" | "end" | null;
