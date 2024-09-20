import {
  addParticipantToEventService,
  getEventParticipantsService,
  getEventsService,
} from "../services/eventsServices.js";
import controllerWrapper from "../helpers/controllerWrapper.js";

const getAllEvents = async (req, res) => {
  const events = await getEventsService();
  res.status(200).json({ message: "Events get succesfully", events });
};

// Контролер для додавання нового учасника до події
export const addParticipantToEvent = async (req, res) => {
  const { eventId } = req.params;
  const participantData = req.body;

  const updatedEvent = await addParticipantToEventService(
    eventId,
    participantData
  );
  res.status(200).json(updatedEvent);
};

// Контролер для отримання учасників події
export const getEventParticipants = async (req, res) => {
  const { eventId } = req.params;

  const participants = await getEventParticipantsService(eventId);
  res.status(200).json(participants);
};

export default {
  getAllEvents: controllerWrapper(getAllEvents),
  addParticipantToEvent: controllerWrapper(addParticipantToEvent),
  getEventParticipants: controllerWrapper(getEventParticipants),
};
