const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require("./config/database/mongo.connect.js");
const router = require("./routes/index.router.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

dbConnection;

app.use(express.json());

app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
