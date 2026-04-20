import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },

    adminId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const RoomModel = mongoose.model("Room", RoomSchema);
export default RoomModel;