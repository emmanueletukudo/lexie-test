import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class CartController extends Controller {
  @service cartService;
  get subtotal() {
    return this.cartService.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }
  get tax() {
    return 0.09 * this.subtotal;
  }
  get total() {
    return this.tax + this.subtotal;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count >= 0) {
      item.count = parseInt(count);
    } else if (item.count === 0) {
      this.cartService.removeItem(item);
    }
  }

  @action
  updatePriceBySize(item, event) {
    const size = event.target.value;
    const prices = { small: 99.99, medium: 200, large: 350, 'x-large': 450 };
    switch (size) {
      case 'medium':
        item.price = prices[size];
        item.size = size;
        break;
      case 'large':
        item.price = prices[size];
        item.size = size;
        break
      case 'x-large':
        item.price = prices[size];
        item.size = size;
      default:
        item.price = prices[size];
        item.size = size;
        break;
    }
    this.cartService.changeSize(item);
  }
}
