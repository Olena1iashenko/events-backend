import {
  getParticipantsService,
  addParticipantService,
} from "../services/participantsServices.js";
import controllerWrapper from "../helpers/controllerWrapper.js";

const getAllParticipants = async (req, res, next) => {
  const participants = await getParticipantsService();
  res
    .status(200)
    .json({ message: "Participants get succesfully", participants });
};

const addParticipant = async (req, res, next) => {
  const { _id } = req.params;
  const participant = await addParticipantService({
    ...req.body,
    _id,
  });
  res.status(201).json({
    message: "Participant add sucesfully",
    participant,
  });
};

export default {
  getAllParticipants: controllerWrapper(getAllParticipants),
  addParticipant: controllerWrapper(addParticipant),
};
