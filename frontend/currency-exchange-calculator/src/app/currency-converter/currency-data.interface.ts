export interface CurrencyRate {
  _id: string;
  base: string;
  date: string;
  rates: { [key: string]: number };
  createdAt: string;
  updatedAt: string;
  __v: number;
}
