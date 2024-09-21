import express from "express";
import eventsRouter from "./routes/eventsRouter.js";
import cors from "cors";

const startServer = () => {
  const corsOptions = {
    origin: (origin, callback) => {
      const allowedOrigins = [
        "https://events-jade-rho.vercel.app/",
        "http://localhost:5173",
      ];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed for this origin"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };

  const app = express();
  const port = process.env.PORT || 3000;
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors(corsOptions));

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/events", eventsRouter);

  app.use((_, res) => {
    res.status(404).json({ message: "Route not found" });
  });

  app.use((error, req, res, next) => {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({ message });
  });

  app.listen(port, () => {
    console.log(`Events app listening on port ${port}`);
  });
};

export default startServer;
