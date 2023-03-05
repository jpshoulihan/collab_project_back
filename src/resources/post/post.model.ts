import { Schema, model } from "mongoose";
import Post from "@/resources/post/post.interface";

// defines the shape/structure of the documents in that collection.
const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

//model = constructor compiled from Schema definitions, provides CRUD methods
//allows custom methods and middleware operations
export default model<Post>("Post", PostSchema);
