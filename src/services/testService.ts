import { Test } from ".prisma/client";
import categoryRepository from "../repositories/categoryRepository.js";
import teacherRepository from "../repositories/teacherRepository.js";
import testRepository from "../repositories/testRepository.js";
import { badRequestError } from "../utils/errorUtils.js";

interface Filter {
  groupBy: "disciplines" | "teachers";
}

async function find(filter: Filter) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDiscipline();
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachers();
  }
}

export type CreateTestData = Omit<Test, "id">;

async function insert(name: string, pdfUrl: string, categoryId: number, teacherDisciplineId: number) {
  const verifyCategory = await categoryRepository.findById(categoryId);
  if (!verifyCategory) throw badRequestError('CategoryId is not registered');
  const verifyTeacherDisciplineId = await teacherRepository.findById(teacherDisciplineId);
  if (!verifyTeacherDisciplineId) throw badRequestError('TeacherDisciplineId is not registered')

  const data: CreateTestData = { name, pdfUrl, categoryId, teacherDisciplineId };
  console.log('aqui')
  await testRepository.insertTest(data);
}
export default {
  find,
  insert,
};
