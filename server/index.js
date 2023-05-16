import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";
import postRoutes from "./routes/posts.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
// mongoose.set('useFindAndModify', false);
//

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// C:/cb/cb-js
console.log(__dirname);

// C:\cb\cb-js\index.html
console.log(path.join(__dirname, "index.html"));
// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
