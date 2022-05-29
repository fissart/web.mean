import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
    },
    imageid: {
        type: Schema.Types.ObjectId,
    },
    value: String,
}, {
    timestamps: true
});

export interface IOpinion extends Document {
    user: {
        type: Schema.Types.ObjectId,
    },
    imageid: {
        type: Schema.Types.ObjectId,
    },
    value: string,
}

export default model<IOpinion>('Opinion', schema);