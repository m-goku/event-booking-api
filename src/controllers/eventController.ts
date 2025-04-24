import { Response, Request } from "express";

export const event = (req: Request, res: Response) => {
  res.send("Welcome to Events");
};
