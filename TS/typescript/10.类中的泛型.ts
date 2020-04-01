interface Item {
  name: string;
}

class DataManage<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}

// const data = new DataManage<number>([1, 2]);
// data.getItem(0);
const data = new DataManage([{ name: "dell" }]);
