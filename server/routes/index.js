import { Router } from "express";
import csvController from "../controllers/csvController.js";
import getEmployees from "../controllers/employeeController.js";
import uploadFile from "../middleware/upload.js";

const router = Router();

let routes = (app) => {
  //csv routes
  router.post("/csv/upload", uploadFile.single("file"), csvController.upload);
  router.get("/csv/download", csvController.download);

  //employee routes
  router.get("/employees", getEmployees);

  app.use("/api", router);
};

export default routes;
