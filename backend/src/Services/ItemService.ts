import Items from '../Domains/Items';
import IItems from '../Interfaces/IItems';
import ItemODM from '../Models/ItemODM';

class ItemService {

    private itemODM = new ItemODM();

    public async findAll() {
        const allItems = await this.itemODM.findAll();
        const arrayItems = allItems.map((item) => new Items(item));
        return arrayItems;
    }

    public async create(item: IItems) {
        const newItem = await this.itemODM.create(item);
        return newItem;
    }

    public async findById(id: string) {
        const item = await this.itemODM.finById(id);
        return item;
    }

    public async delete(id: string) {
        await this.itemODM.delete(id);
    }

    public async deleteAll() {
        await this.itemODM.deleteAll();
    }

    public async update(id: string, item: IItems) {
        return await this.itemODM.update(id, item);
    }
}

export default ItemService;