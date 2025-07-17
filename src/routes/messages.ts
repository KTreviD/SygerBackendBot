import { Router } from "express";
import { getMessagesByUser, handleMessage } from "../controllers/messages";

export const MessageRouter = Router();

MessageRouter.get("/loadConversation", getMessagesByUser);
MessageRouter.post("/generateAnswer", handleMessage);
