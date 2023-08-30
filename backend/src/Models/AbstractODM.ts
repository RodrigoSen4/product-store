import { model, Model, models, Schema } from 'mongoose';

export default abstract class AbstractODM<T> {
    protected model: Model<T>;
    protected schema: Schema;
    private modelName: string;

    constructor(schema: Schema, modelName: string) {
        this.schema = schema;
        this.modelName = modelName;
        this.model = models[modelName] || model(this.modelName, this.schema);
    }

    public async create(item: T): Promise<T> {
        return this.model.create({ ...item });
    }

    public async findAll(): Promise<T[]> {
        return this.model.find();
    }

    public async finById(_id: string): Promise<T | null> {
        return this.model.findById(_id);
    }

    public async update(id: string, item: T) {

        const updateObject: Partial<T> = {};

        for (const key in item) {
            updateObject[key] = item[key];
        }

        return await this.model.updateOne(
            { _id: id },
            { $set: updateObject }
        );
    }

    public async deleteAll() {
        await this.model.deleteMany({});
    }

    public async delete(id: string) {
        await this.model.deleteOne({ _id: id });
    }

}