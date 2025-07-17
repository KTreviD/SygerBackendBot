import { allowedOrigins } from "./allowedOrigins";

export const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (allowedOrigins.some((origin) => origin.endsWith(origin)) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  credentials: true,
};
