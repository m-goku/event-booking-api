import express from "express";

import { event } from "../controllers/eventController";
import { RoleAuthorization } from "../middlewares/authMiddleware";
export const eventRouter = express.Router();

eventRouter.get("/", event);
eventRouter.get("/:id", event);
/*
- post, update, delate routes need role authorization of "Organizer" after authentication 
*/
eventRouter.post("/add", RoleAuthorization, event);
eventRouter.put("/update/:id", RoleAuthorization, event);
eventRouter.delete("/remove/:id", RoleAuthorization, event);
