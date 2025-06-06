import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { OpenAI } from 'openai';
import 'dotenv/config';
import { appActions } from './dictionary.js';

function objectToText(obj, prefix = '', level = 0) {
  let result = '';
  const indent = '  '.repeat(level); // Indentación para cada nivel

  for (const key in obj) {
    if (key === 'accion') {
      result += `${indent}- ${obj[key]}\n`;
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      result += `${indent}${key}:\n`;
      result += objectToText(obj[key], prefix, level + 1);
    } else {
      result += `${indent}- ${key}: ${obj[key]}\n`;
    }
  }

  return result;
}

const app = express();
const port = process.env.PORT || 3000; 

app.use(cors({
  origin: 'https://syger-frontend-flutter.vercel.app',
  methods: ['POST'],
}));

app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;
    console.log({prompt})
  if (!prompt) {
    return res.status(400).json({ error: 'El mensaje es requerido.' });
  }
  const content = objectToText(appActions);
  try { 
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content:content},
        { role: 'user', content: prompt },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const botReply = response.choices[0].message.content;
    console.log({botReply})
    res.json({ response: botReply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Hubo un problema al procesar tu solicitud.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
