import { prisma } from "../database.js";

async function findMany(disciplineId: number) {
  
  return prisma.teacherDiscipline.findMany({
    where: {
      disciplineId: disciplineId,
    },
    include: {
      teacher: {
        select: {
          name: true,
        }
      },
    }
  });
}

async function findById(id: number) {
  return (
    prisma.teacherDiscipline.findUnique({
      where: {
        id: id,
      }
    })
  );
}

export default {
  findMany,
  findById,
};