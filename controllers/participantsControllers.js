// import {
//   getParticipantsService,
//   addParticipantService,
//   getParticipantByIdService,
// } from "../services/participantsServices.js";
// import controllerWrapper from "../helpers/controllerWrapper.js";

// const getAllParticipants = async (req, res, next) => {
//   const participants = await getParticipantsService();
//   res
//     .status(200)
//     .json({ message: "Participants get succesfully", participants });
// };

// const addParticipant = async (req, res, next) => {
//   const { _id } = req.params;
//   const participant = await addParticipantService({
//     ...req.body,
//     _id,
//   });
//   res.status(201).json({
//     message: "Participant add sucesfully",
//     participant,
//   });
// };

// const getParticipantById = async (req, res, next) => {
//   const { event } = req.params;
//   console.log(event);
//   const participant = await getParticipantByIdService(event);
//   console.log(participant);
//   res.json({
//     message: "Participant find sucesfully",
//     participant,
//   });
// };

// export default {
//   getAllParticipants: controllerWrapper(getAllParticipants),
//   addParticipant: controllerWrapper(addParticipant),
//   getParticipantById: controllerWrapper(getParticipantById),
// };
