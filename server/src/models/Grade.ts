import { Schema, model, Document } from 'mongoose';

interface IGrade extends Document {
    name: string;
}

const gradeSchema = new Schema<IGrade>({
    name: { type: String, required: true }
});

export default model<IGrade>('Grade', gradeSchema);
