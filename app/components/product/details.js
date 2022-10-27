import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductDetailsComponent extends Component {
  @service('cart-service') cart;
  originalPrice = 150;
  @action
  addToCart() {
    const { author, url, download_url, width, height, price, size } = this.args;
    this.cart.addItem({
      author,
      url,
      download_url,
      width,
      height,
      price,
      size,
    });
  }
}
