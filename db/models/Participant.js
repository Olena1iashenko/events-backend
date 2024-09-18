import { Schema, model } from "mongoose";
import { mongoSaveError, setMongoUpdateSettings } from "./hooks.js";

const participantSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
    heardAboutEvent: {
      type: String,
      enum: ["Social media", "Frinds", "Found myself"],
      default: "Social media",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

participantSchema.post("save", mongoSaveError);
participantSchema.pre("findOneAndUpdate", setMongoUpdateSettings);
participantSchema.post("findOneAndUpdate", mongoSaveError);

const Participant = model("Participant", participantSchema);

export default Participant;
