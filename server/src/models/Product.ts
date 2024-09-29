import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
    name: string;
}

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true }
});

export default model<IProduct>('Product', productSchema);
