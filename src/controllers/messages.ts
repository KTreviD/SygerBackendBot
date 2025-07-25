import { Request, Response } from "express";
import { Message, MessageAttributes } from "../models/message";
import { botInstructions, encuestasData, hablarConSoporteData, miCuentaData, noticiasData, panicoData, reservacionesData, visitasData } from "../botModulesData";
import { OpenAI } from "openai";
import { UselessMessage } from "../models/useless_message";

export const getMessagesByUser = async (req: Request, res: Response) => {
  const { userId } = req.query;

  try {
    const messages = await Message.findAll({
      where: { user_id: Number(userId) },
      order: [["created_at", "ASC"]],
    });

    res.json({ messages });
  } catch (error) {
    console.error("Error al obtener los mensajes:", error);
    res.status(500).json({ error: "Error al recuperar los mensajes del usuario." });
  }
};

const MESSAGE_TYPES_DICTIONARY = {
  "Usuario: Escoge seccion Noticias": {
    id: 2,
    botResponse: "¡Claro que si!, que te gustaria saber sobre la sección de Noticias?",
    botMessageTypeId: 38,
  },
  "Usuario: Escoge seccion Visitas": {
    id: 3,
    botResponse: "¡Claro que si!, que te gustaria saber sobre la sección de Visitas?",
    botMessageTypeId: 39,
  },
  "Usuario: Escoge seccion Encuestas": {
    id: 4,
    botResponse: "¡Claro que si!, que te gustaria saber sobre la sección de Encuestas?",
    botMessageTypeId: 40,
  },
  "Usuario: Escoge seccion Reservaciones": {
    id: 5,
    botResponse: "¡Claro que si!, que te gustaria saber sobre la sección de Reservaciones?",
    botMessageTypeId: 41,
  },
  "Usuario: Escoge seccion Botón panico": {
    id: 6,
    botResponse: "¡Claro que si!, que te gustaria saber sobre la sección de Botón panico?",
    botMessageTypeId: 42,
  },
  "Usuario: Escoge seccion Mi cuenta": {
    id: 7,
    botResponse: "¡Claro que si!, que te gustaria saber sobre la sección de Mi cuenta?",
    botMessageTypeId: 43,
  },
  "Usuario: Escoge hablar con Soporte técnico": {
    id: 8,
    botResponse: "Comunicate con soporte técnico en el siguiente WhatsApp: https://wa.me/5218134022503 o acude directamente la administración de tu fraccionamiento.\n¿En qué otra sección de la aplicación puedo ayudarte?",
    botMessageTypeId: 1,
  },
  "Usuario: Escoge 'Si, me fue útil'": {
    id: 9,
    botResponse: "¡Me alegra saber que te fue útil! ¿En qué otra sección de la aplicación puedo ayudarte?",
    botMessageTypeId: 1,
  },
  "Usuario: Escoge 'No, no me fue útil'": {
    id: 10,
    botResponse: `Lamento que la respuesta no te haya sido útil.\n¿Podrías decirme más sobre lo que necesitas o en qué parte no fue clara?`,
    botMessageTypeId: 16,
  },
  "Usuario: Escoge 'Preguntar sobre otra sección'": {
    id: 11,
    botResponse: "¡Excelente!, ¿En qué otra sección de la aplicación puedo ayudarte?",
    botMessageTypeId: 1,
  },
  "Usuario: Responde porque no le fue útil la respuesta": {
    id: 14,
    botResponse: "Muchas gracias por tu retroalimentación!, ¿En qué otra sección de la aplicación puedo ayudarte?",
    botMessageTypeId: 1,
  },
};

const getBotResponse = async (userMessage: string, messageTypeId: number, messages: Message[]) => {
  let chatInstructions = botInstructions;
  let botResponse = "";
  let botMessageTypeId = 0;

  if ((messageTypeId >= 2 && messageTypeId <= 8) || (messageTypeId >= 9 && messageTypeId <= 12) || messageTypeId === 14) {
    let finalMessageTypeId = messageTypeId;

    if (messageTypeId === 12) finalMessageTypeId = messages[messages.length - 4].message_type_id;

    const match = Object.values(MESSAGE_TYPES_DICTIONARY).find((entry) => entry.id === finalMessageTypeId);

    botResponse = match?.botResponse!;
    botMessageTypeId = match?.botMessageTypeId!;
  } else if (messageTypeId >= 46 && messageTypeId <= 51) {
    switch (messageTypeId) {
      case 46:
        chatInstructions += noticiasData;
        break;
      case 47:
        chatInstructions += visitasData;
        break;
      case 48:
        chatInstructions += encuestasData;
        break;
      case 49:
        chatInstructions += reservacionesData;
        break;
      case 50:
        chatInstructions += panicoData;
        break;
      case 51:
        chatInstructions += miCuentaData;
        break;
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: chatInstructions },
        { role: "user", content: userMessage },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    botResponse = response.choices[0]?.message?.content! + `\nTe fue útil esta respuesta?`;
    botMessageTypeId = 15;
  }

  return { botResponse, botMessageTypeId };
};

export const handleMessage = async (req: Request, res: Response) => {
  const messages: Message[] = req.body.messages;
  const userMessage: MessageAttributes = req.body.userMessage;

  try {
    const { botResponse, botMessageTypeId } = await getBotResponse(userMessage.message, userMessage.message_type_id, messages);

    const messagesToCreate: MessageAttributes[] = [];
    const actualDate = new Date();
    const laterDate = new Date(actualDate.getTime() + 100);
    const laterLaterDate = new Date(laterDate.getTime() + 100);

    if (messages.length === 1)
      messagesToCreate.push({
        user_id: userMessage.user_id,
        is_user: false,
        message: "¡Hola! Soy tu asistente SYGER, por favor escoge en que sección de la app necesitas ayuda.",
        message_type_id: 1,
        created_at: new Date(),
      });

    messagesToCreate.push(
      {
        user_id: userMessage.user_id,
        is_user: true,
        message: userMessage.message,
        message_type_id: userMessage.message_type_id,
        created_at: laterDate,
      },
      {
        user_id: userMessage.user_id,
        is_user: false,
        message: botResponse,
        message_type_id: botMessageTypeId,
        created_at: laterLaterDate,
      }
    );

    const actualMessages = await Message.bulkCreate(messagesToCreate, { individualHooks: true });
    const lastMessageId = actualMessages.find((message) => message.is_user == true)?.id;

    if (userMessage.message_type_id === 14) {
      UselessMessage.create({
        user_message_id: messages[messages.length - 4].id!,
        bot_message_id: messages[messages.length - 5].id!,
        second_user_message_id: lastMessageId!,
        second_bot_message_id: messages[messages.length - 3].id!,
      });
    }

    res.json({
      userMessage: actualMessages.find((m) => m.is_user),
      botMessage: actualMessages.find((m) => !m.is_user && (messages.length === 1 ? m.message_type_id !== 1 : true)),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un problema al procesar tu solicitud." });
  }
};
