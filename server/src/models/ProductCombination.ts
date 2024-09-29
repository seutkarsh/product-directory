import { Schema, model, Document } from 'mongoose';

interface IProductCombination extends Document {
    product: Schema.Types.ObjectId;
    material: Schema.Types.ObjectId;
    grades: Schema.Types.ObjectId[];
    price: number;
    currency: string;
    shape: string;
    length: number;
    thickness: number;
}

const productCombinationSchema = new Schema<IProductCombination>({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    material: { type: Schema.Types.ObjectId, ref: 'Material', required: true },
    grades: [{ type: Schema.Types.ObjectId, ref: 'Grade', required: true }],
    price: { type: Number, default: 0 },
    currency: { type: String, default: 'USD' },
    shape: { type: String, default: '' },
    length: { type: Number, default: 0 },
    thickness: { type: Number, default: 0 }
});

export default model<IProductCombination>('ProductCombination', productCombinationSchema);
