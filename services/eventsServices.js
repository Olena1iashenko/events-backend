import Event from "../db/models/Event.js";

export const getEventsService = async () => {
  return await Event.find();
};
