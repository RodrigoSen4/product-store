import IItems from '../Interfaces/IItems';

class Product {
  protected id: string | undefined;
  protected name: string;
  protected price: string;
  protected description: string;

  constructor(item: IItems) {
    this.id = item.id;
    this.name = item.name;
    this.price = item.price;
    this.description = item.description;
  }
}

export default Product;