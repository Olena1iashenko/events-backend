// import Participant from "../db/models/Participant.js";

// export const getParticipantsService = async () => {
//   return await Participant.find();
// };

// export const addParticipantService = (data) => {
//   return Participant.create(data);
// };

// export const getParticipantByIdService = async (event) => {
//   try {
//     console.log(event);
//     const participant = await Participant.find({ event });
//     if (!participant) {
//       throw new Error("Participant not found");
//     }
//     console.log(participant);
//     return participant;
//   } catch (error) {
//     throw new Error(`Error fetching participant by id: ${error.message}`);
//   }
// };
