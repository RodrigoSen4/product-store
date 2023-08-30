import { Schema } from 'mongoose';
import IItems from '../Interfaces/IItems';
import AbstractODM from './AbstractODM';

class ItemODM extends AbstractODM<IItems> {
  constructor() {
    const schema = new Schema<IItems>({
      name: { type: String, required: true },
      price: { type: String, required: true },
      description: { type: String, required: true },
    });

    super(schema, 'items');
  }
}

export default ItemODM;