const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("dotenv").config();
// landet alles in process.env.<varname>
const PORT = process.env.PORT || 3000;

// const db = require("./db/db");
console.log(process.env.NODE_ENV);

const apiV1 = require("./routes/apiV1");
const apiV2 = require("./routes/apiV2");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/v1", apiV1);
app.use("/v2", apiV2);

app.listen(PORT, () => {
	console.log(`[d] http://localhost:${PORT}`);
});