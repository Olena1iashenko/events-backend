import express from "express";
import participantsControllers from "../controllers/participantsControllers.js";
import { createParticipantSchema } from "../schemas/participantsSchemas.js";
import isEmptyBody from "../helpers/isEmptyBody.js";
import validateBody from "../helpers/validateBody.js";

const participantsRouter = express.Router();

participantsRouter.get("/", participantsControllers.getAllParticipants);

participantsRouter.post(
  "/",
  isEmptyBody,
  validateBody(createParticipantSchema),
  participantsControllers.addParticipant
);

export default participantsRouter;
