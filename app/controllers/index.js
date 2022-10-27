import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class IndexController extends Controller {
  @service store;
  @service('pagination-service') paginate;

  @action
  handlePageChange(n) {
    const newRec = this.paginate.handlePageChange(n);
    this.model = newRec;
  }
}
