export interface ActiveCell {
  key: string;
  name: string;
  amount: number;
  time: string;
}

export interface ActiveRow {
  activeFirst: ActiveCell;
  activeSecond: ActiveCell;
}
