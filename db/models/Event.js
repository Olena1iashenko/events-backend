import { Schema, model } from "mongoose";
import { mongoSaveError, setMongoUpdateSettings } from "./hooks.js";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "Participant",
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

eventSchema.post("save", mongoSaveError);
eventSchema.pre("findOneAndUpdate", setMongoUpdateSettings);
eventSchema.post("findOneAndUpdate", mongoSaveError);

const Event = model("Event", eventSchema);

export default Event;
