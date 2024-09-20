import express from "express";
import eventsControllers from "../controllers/eventsControllers.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventsControllers.getAllEvents);

eventsRouter.get("/:eventId", eventsControllers.getEventById);

eventsRouter.post(
  "/:eventId/participants",
  eventsControllers.addParticipantToEvent
);

eventsRouter.get(
  "/:eventId/participants",
  eventsControllers.getEventParticipants
);

export default eventsRouter;
