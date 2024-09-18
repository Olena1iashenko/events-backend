import Participant from "../db/models/Participant.js";

export const getParticipantsService = async () => {
  return await Participant.find();
};
