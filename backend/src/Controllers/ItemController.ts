import { Request, Response } from 'express';
import IItems from '../Interfaces/IItems';
import ItemService from '../Services/ItemService';

class ItemController {
    private req: Request;
    private res: Response;
    private service: ItemService;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
        this.service = new ItemService();
    }

    public async findItems() {
        const items = await this.service.findAll();
        return this.res.status(200).json(items);
    }

    public async createItem() {
        const item = this.req.body;
        const newItem = await this.service.create(item as IItems);
        return this.res.status(201).json(newItem);
    }

    public async findItem() {
        const id = this.req.params.id;
    
        const item = await this.service.findById(id);
        return this.res.status(200).json(item);
    }

    public async deleteItem() {
        const id = this.req.params.id;
    
        await this.service.delete(id);
        return this.res.status(200).send('Item deleted');
    }

    public async deleteAllItems() {
        await this.service.deleteAll();
        return this.res.status(200).send('All items deleted');
    }

    public async updateItem() {
        const id = this.req.params.id;
        const item = this.req.body;
    
        await this.service.update(id, item);
        return this.res.status(200).send('Item updated');
    }
    
}

export default ItemController;