import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class PaginationComponent extends Component {
  @service('pagination-service') paginate;

  get pageNumbers() {
    return this.paginate.getpageNumbers();
  }
}
