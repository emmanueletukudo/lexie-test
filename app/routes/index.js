import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  @service('pagination-service') paginate;

  async model() {
    const data = await this.store.findAll('product');
    const paginated = this.paginate.displayProducts(data);
    return paginated;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
  }
}
