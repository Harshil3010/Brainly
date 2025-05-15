import mongoose, { model, Schema } from "mongoose";
import dotenv from "dotenv"

dotenv.config(); 


const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in your .env file");
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  type:String,
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const ContentModel=model("Content",ContentSchema)

const LinkSchema = new Schema({
  hash: String,
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true,unique:true},
});

export const LinkModel=model("Links",LinkSchema);

