import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class PaginationComponent extends Component {
  @service('pagination-service') paginate;

  get pageNumbers() {
    return this.paginate.getpageNumbers();
  }
}
