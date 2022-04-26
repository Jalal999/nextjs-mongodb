import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
   {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 200
    }
   },
   { timestamps: true }
);

export default mongoose.models.Article || mongoose.model("Article", ArticleSchema)