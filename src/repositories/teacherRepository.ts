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

export default {
  findMany,
};