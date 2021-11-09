require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet")
const app = express();
const port = process.env.PORT;
const { getCategories, getProducts, getProductsByCategoryController, getSearchBox } = require("./routes");

app.use(cors())
   .options("*", cors())
   .use(express.json())
   .use(express.urlencoded({ extended: true }))
   .use(helmet())
   .use(getCategories)
   .use(getProducts)
   .use(getProductsByCategoryController)
   .use(getSearchBox);

app.listen(port, () => console.log(`Server running on port ${port}`));
