import RESTAdapter from '@ember-data/adapter/rest';

export default class ProductAdapter extends RESTAdapter {
  host = 'https://picsum.photos';
  namespace = 'v2';
  pathForType() {
    return 'list';
  }
}
