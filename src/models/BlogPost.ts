import mongoose, { Schema, type InferSchemaType } from "mongoose";

const BlogPostSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    body: { type: String, default: "", trim: true },
    category: { type: String, required: true, trim: true },
    topic: { type: String, trim: true, default: "" },
    tone: { type: String, enum: ["green", "blue", "gold"], default: "green" },
    image: { type: String, required: true, trim: true },
    readTime: { type: String, trim: true, default: "5 min read" },
    published: { type: Boolean, default: false },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export type BlogPostDoc = InferSchemaType<typeof BlogPostSchema> & {
  _id: mongoose.Types.ObjectId;
};

export default (mongoose.models.BlogPost as mongoose.Model<BlogPostDoc>) ||
  mongoose.model<BlogPostDoc>("BlogPost", BlogPostSchema);
