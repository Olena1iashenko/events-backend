import {
  addParticipantToEventService,
  getEventByIdService,
  getEventParticipantsService,
  getEventsService,
} from "../services/eventsServices.js";
import controllerWrapper from "../helpers/controllerWrapper.js";

const getAllEvents = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;
  const sortBy = req.query.sortBy;
  const { events, totalPages, totalEvents } = await getEventsService(
    page,
    limit,
    sortBy
  );
  res.status(200).json({
    message: "Events get succesfully",
    events,
    currentPage: page,
    totalPages,
    totalEvents,
  });
};

export const getEventById = async (req, res) => {
  const { eventId } = req.params;
  const event = await getEventByIdService(eventId);

  if (!event) {
    return res
      .status(404)
      .json({ message: `Event with ID ${eventId} not found` });
  }
  res.status(200).json(event);
};

const addParticipantToEvent = async (req, res) => {
  const { eventId } = req.params;
  const participantData = req.body;

  const updatedEvent = await addParticipantToEventService(
    eventId,
    participantData
  );
  res.status(200).json(updatedEvent);
};

const getEventParticipants = async (req, res) => {
  const { eventId } = req.params;
  const { query } = req.query;

  const participants = await getEventParticipantsService(eventId, query);
  res.status(200).json(participants);
};

export default {
  getAllEvents: controllerWrapper(getAllEvents),
  getEventById: controllerWrapper(getEventById),
  addParticipantToEvent: controllerWrapper(addParticipantToEvent),
  getEventParticipants: controllerWrapper(getEventParticipants),
};
