import { Router } from 'express';
import ItemController from '../Controllers/ItemController';

const itemRouter = Router();

itemRouter.get('/', (req, res) => new ItemController(req, res).findItems());

itemRouter.get('/:id', (req, res) => new ItemController(req, res).findItem());

itemRouter.post('/', (req, res) => new ItemController(req, res).createItem());

itemRouter.put('/update/:id', (req, res) => new ItemController(req, res).updateItem());

itemRouter.delete('/delte/:id', (req, res) => new ItemController(req, res).deleteItem());

itemRouter.delete('/delete', (req, res) => new ItemController(req, res).deleteAllItems());

export default itemRouter;