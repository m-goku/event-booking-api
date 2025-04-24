import express from "express";

import { booking } from "../controllers/bookingController";

export const bookingRouter = express.Router();

bookingRouter.get("/", booking);
bookingRouter.get("/:id", booking);
bookingRouter.post("create/", booking);
