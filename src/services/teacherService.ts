import teacherRepository from "../repositories/teacherRepository.js";

async function findMany(disciplineId: number) {
  return teacherRepository.findMany(disciplineId);
}

export default {
  findMany,
};