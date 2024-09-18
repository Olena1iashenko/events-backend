import Event from "../db/models/Event.js";

export const getEventsService = async () => {
  try {
    const events = await Event.find();
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw new Error("Could not fetch events. Please try again later.");
  }
};
