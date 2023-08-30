import IItems from "../Interfaces/IItems";
import Product from "./Product";

export default class Items extends Product {

  constructor (item: IItems) {
    const { id, name, price, description } = item;

    super({ id, name, price, description });
  }
}