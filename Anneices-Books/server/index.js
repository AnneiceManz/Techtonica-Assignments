const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5050;

app.listen(PORT, () => console.log(`Hi Anneice! Server is running on port ${PORT}`));