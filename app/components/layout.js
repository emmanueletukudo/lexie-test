import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class LayoutComponent extends Component {
  @service cartService;

  get itemCount() {
    return this.cartService.itemList.reduce(
      (total, item) => total + item.count,
      0
    );
  }
}
