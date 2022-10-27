import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;
  @tracked size;
  @tracked price;

  author;
  download_url;
  url;
  height;
  width;

  constructor(item) {
    this.size = item.size;
    this.count = item.count;
    this.author = item.author;
    this.download_url = item.download_url;
    this.price = item.price;
    this.url = item.url;
    this.height = item.height;
    this.width = item.width;
  }
}
export default class CartServiceService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const exist = this.itemList.find(({ url }) => url === item.url);
    if (exist) {
      exist.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1,
        }),
      ];
    }
  }

  changeSize(item) {
    let result = [];
    const exists = this.itemList.find((p) => p.url === item.url);
    if (exists) {
      result = [...this.itemList.filter(p => p.url === item.url ? { ...p, size: item.size, price: item.size } : p)];
    }
    return (this.itemList = [...result]);
  }

  removeItem(item) {
    let result = [];
    const exists = this.itemList.find((p) => p.url === item.url);
    if (exists.count === 0) {
      result = [...this.itemList.filter(p => p.url !== item.url)];
    }
    this.itemList = [...result];
  }

}
