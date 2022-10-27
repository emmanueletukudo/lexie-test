import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr author;
  @attr download_url;
  @attr height;
  @attr url;
  @attr width;
  @attr({
    defaultValue() {
      return 99.99;
    },
  })
  price;
  @attr({
    defaultValue() {
      return 'small';
    },
  })
  size;
}
