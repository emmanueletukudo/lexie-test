import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class PaginationServiceService extends Service {
  @service store;
  @tracked products = [];
  @tracked loading = false;
  @tracked currentPage = 1;
  @tracked postPerpage = 12;

  @tracked indexOfLastProduct = this.currentPage * this.postPerpage;
  @tracked indexOfFirstProduct = this.indexOfLastProduct - this.postPerpage;

  @tracked currentProducts = this.products.slice(
    this.indexOfFirstProduct,
    this.indexOfLastProduct
  );

  displayProducts(products) {
    this.loading = true;
    this.products = [...products];
    this.loading = false;
    return this.currentProducts;
  }

  getpageNumbers() {
    const pageNumbers = [];
    for (
      let i = 1;
      i < Math.ceil(this.products.length / this.postPerpage);
      i++
    ) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  handlePageChange(n) {
    this.currentPage = n;
    this.loading = true;
    this.indexOfLastProduct = n * this.postPerpage;
    this.indexOfFirstProduct = this.indexOfLastProduct - this.postPerpage;
    this.currentProducts = this.products.slice(
      this.indexOfFirstProduct,
      this.indexOfLastProduct
    );
    this.loading = false;
    return this.currentProducts;
  }
}
