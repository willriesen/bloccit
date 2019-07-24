module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      const postRoutes = require("../routes/posts");
      const topicRoutes = require("../routes/topics");
      const advertisementRoutes = require('../routes/advertisements');
      const flairRoutes = require('../routes/flairs');
      const userRoutes = require("../routes/users");
      const commentRoutes = require("../routes/comments");

      if(process.env.NODE_ENV === "test") {
        const mockAuth = require("../../spec/support/mock-auth.js");
        mockAuth.fakeIt(app);
      }
   
      app.use(staticRoutes);
      app.use(topicRoutes);
      app.use(postRoutes);
      app.use(advertisementRoutes);
      app.use(flairRoutes);
      app.use(userRoutes);
      app.use(commentRoutes);


    }
  }