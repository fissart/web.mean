import { Schema, model, Document } from 'mongoose'
const schema = new Schema({
    title: String,
    autor: String,
    description: String,
    file: String,
    user: {
      type: Schema.Types.ObjectId,
    },
},{
    timestamps: true
});
export interface IBook extends Document {
    title: string,
    autor: string,
    description: string,
    file: string,
    user: {
      type: Schema.Types.ObjectId,
    },
}
export default model<IBook>('Book', schema)
