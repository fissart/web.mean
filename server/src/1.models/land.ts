import { Schema, model, Document } from 'mongoose'


const schema = new Schema({
    mision: String,
    vision: String,
    carreras: String,
    name: String,
    email: String,    

},{
    timestamps: true
});

export interface ILand extends Document {
    mision: string,
    vision: string,
    carreras: string,
    name: string,
    email: string,    
}
    
export default model<ILand>('Land', schema);