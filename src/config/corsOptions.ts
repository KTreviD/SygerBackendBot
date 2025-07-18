import { allowedOrigins } from "./allowedOrigins";

export const corsOptions = {
  origin: (requestOrigin: any, callback: any) => {
    if (allowedOrigins.includes(requestOrigin) || !requestOrigin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
};
