import { Response, Request } from "express";
import { bookingType } from "../types/types";

export const getAllBookings = (req: Request, res: Response) => {
  res.send("Welcome to Bookings");
};

export const getBooking = (req: Request, res: Response) => {
  res.send("Welcome to Bookings");
};

export const createBooking = (req: Request, res: Response) => {
  res.send("Welcome to Bookings");
};
