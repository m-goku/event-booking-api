import mongoose, { Schema } from "mongoose";

import { eventType } from "../types/types";

// - Create Event Schema
const eventSchema = new Schema<eventType>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  organizer: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  attendees: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
});

export const Event = mongoose.model("Event", eventSchema);
