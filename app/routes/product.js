import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProductRoute extends Route {
  @service store;
  async model(params) {
    const { product_id } = params;
    const data = await this.store.findAll('product');
    const product = data.find(({ id }) => id === product_id);
    return product;
  }

  setupController(controller, model) {
    return super.setupController(controller, model);
  }
}
