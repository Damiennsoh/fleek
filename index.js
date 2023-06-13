const app = require("./app");
const bodyParser = require("body-parser");
const database = require('./config/database');
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute');
const categoryRouter = require('./routes/prodCategoryRoute');
const blogcategoryRouter = require('./routes/blogCatRoute');
const brandRouter = require('./routes/brandRoute');
const couponRouter = require('./routes/couponRoute');
const {notFound, errorHandler} = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

// Handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for handling uncaught exception`);
  });


// Configure the port to listen on
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "./config/.env",
    });
  }

database();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser ());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/Category", categoryRouter);
app.use("/api/blogCategory", blogcategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);

app.use(notFound);
app.use(errorHandler);

  const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });


  process.on("unhandledRejection", (err) => {
    console.log(`Shutting down the server for ${err.message}`);
    console.log(`Shutting down the server for unhandled promise rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });