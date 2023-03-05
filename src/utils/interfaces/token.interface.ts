import { Schema, Document } from "mongoose";

interface Token extends Document {
    id: Schema.Types.ObjectId;
    expiresIn: number;
}

export default Token;