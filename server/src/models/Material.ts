import { Schema, model, Document } from 'mongoose';

interface IMaterial extends Document {
    name: string;
}

const materialSchema = new Schema<IMaterial>({
    name: { type: String, required: true }
});

export default model<IMaterial>('Material', materialSchema);
