import express from "express";
import eventsControllers from "../controllers/eventsControllers.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventsControllers.getAllEvents);

// Додаємо нового учасника до події
eventsRouter.post(
  "/:eventId/participants",
  eventsControllers.addParticipantToEvent
);

// Отримуємо учасників конкретної події
eventsRouter.get(
  "/:eventId/participants",
  eventsControllers.getEventParticipants
);

export default eventsRouter;
