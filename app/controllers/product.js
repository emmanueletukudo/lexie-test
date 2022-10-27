import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductController extends Controller {
  @tracked isZoomed = false;

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
