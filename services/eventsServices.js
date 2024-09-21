import Event from "../db/models/Event.js";
import Participant from "../db/models/Participant.js";

export const getEventsService = async (page, limit, sortBy) => {
  try {
    const skip = (page - 1) * limit;
    const sortOptions = {};

    if (sortBy === "title") {
      sortOptions.title = 1;
    } else if (sortBy === "eventDate") {
      sortOptions.eventDate = 1;
    } else if (sortBy === "organizer") {
      sortOptions.organizer = 1;
    }

    const events = await Event.find()
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .exec();
    const totalEvents = await Event.countDocuments();
    const totalPages = Math.ceil(totalEvents / limit);

    return { events, totalPages, totalEvents };
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error("Could not fetch events. Please try again later.");
  }
};

export const getEventByIdService = async (eventId) => {
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      throw new Error(`Event with ID ${eventId} not found`);
    }
    return event;
  } catch (error) {
    console.error(`Error fetching event with ID ${eventId}:`, error);
    throw new Error("Could not fetch the event. Please try again later.");
  }
};

export const addParticipantToEventService = async (
  eventId,
  participantData
) => {
  try {
    const newParticipant = await Participant.create(participantData);

    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { $push: { participants: newParticipant._id } },
      { new: true }
    ).populate("participants");

    return updatedEvent;
  } catch (error) {
    throw new Error(`Error adding participant to event: ${error.message}`);
  }
};

export const getEventParticipantsService = async (eventId, query) => {
  try {
    const event = await Event.findById(eventId).populate("participants");
    if (!event) {
      throw new Error("Event not found");
    }
    const participants = event.participants || [];
    const result = participants.filter(
      (participant) =>
        participant.fullName
          .toLowerCase()
          .trim()
          .includes(query.toLowerCase().trim()) ||
        participant.email
          .toLowerCase()
          .trim()
          .includes(query.toLowerCase().trim())
    );

    if (result.length === 0) {
      throw new Error("No participants found. Try another search");
    }

    return result;
  } catch (error) {
    throw new Error(`Error fetching participants: ${error.message}`);
  }
};
