import { Request, Response } from "express";
import testService from "../services/testService.js";

async function find(req: Request, res: Response) {
  const { groupBy } = req.query as { groupBy: string };

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.find({ groupBy });
  res.send({ tests });
}

async function insert (req: Request, res: Response) {
  const { name, pdfUrl, categoryId, teacherDisciplineId } = req.body;
  await testService.insert(name, pdfUrl, Number(categoryId), Number(teacherDisciplineId));
  res.sendStatus(201);
}

export default {
  find,
  insert,
};
