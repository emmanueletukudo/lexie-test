import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'https://picsum.photos';
  namespace = 'v2';
  pathForType() {
    return 'list';
  }
}
