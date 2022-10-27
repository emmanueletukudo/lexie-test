import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 100 }, { price: 200 }];
    return items;
  }
}
