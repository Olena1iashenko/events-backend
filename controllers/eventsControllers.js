import * as eventsService from "../services/eventsServices.js";
import controllerWrapper from "../helpers/controllerWrapper.js";

const getAllEvents = async (req, res, next) => {
  const events = await eventsService.getAllEvents();
  res.status(200).json({ message: "Events get succesfully", events });
};

export default {
  getAllEvents: controllerWrapper(getAllEvents),
};
