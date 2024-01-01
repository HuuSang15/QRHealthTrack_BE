const userRouter = require("./user.router");
const healthRouter = require("./health.router");
const formRouter = require("./form.router");
const exerciseRouter = require("./exercise.router");
const dietRouter = require("./diet.router");
const eventRouter = require("./event.router");
const categoryRouter = require("./category.router");
const topicRouter = require("./topic.router");
const satisfyRouter = require("./satisfy.router");
const contactRouter = require("./contact.router");

const errorHandle = require("../middlewares/errorHandle");

module.exports = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/health", healthRouter);
  app.use("/api/form", formRouter);
  app.use("/api/exercise", exerciseRouter);
  app.use("/api/diet", dietRouter);
  app.use("/api/event", eventRouter);
  app.use("/api/category", categoryRouter);
  app.use("/api/topic", topicRouter);
  app.use("/api/satisfy", satisfyRouter);
  app.use("/api/contact", contactRouter);

  app.use(errorHandle);
};
