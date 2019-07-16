const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

describe("Topic", () => {

  beforeEach((done) => {
    //#1
    this.topic;
    this.post;
    sequelize.sync({
      force: true
    }).then((res) => {

      //#2
      Topic.create({
          title: "Expeditions to Alpha Centauri",
          description: "A compilation of reports from recent visits to the star system."
        })
        .then((topic) => {
          this.topic = topic;
          //#3
          Post.create({
              title: "My first visit to Proxima Centauri b",
              body: "I saw some rocks.",
              //#4
              topicId: this.topic.id
            })
            .then((post) => {
              this.post = post;
              done();
            });
        })
        .catch((err) => {
          console.log(err);
          done();
        });
    });

  });

  describe("#create()", () => {

    it("should create a topic object with a title and descriptionc", (done) => {
      //#1
      Topic.create({
          title: "Expeditions to Alpha Centauri",
          description: "A compilation of reports from recent visits to the star system.",
          topicId: this.topic.id
        })
        .then((topic) => {

          //#2
          expect(topic.title).toBe("Expeditions to Alpha Centauri");
          expect(topic.description).toBe("A compilation of reports from recent visits to the star system.");
          done();

        })
        .catch((err) => {
          console.log(err);
          done();
        });
    });
  });

  describe("#getPosts()", () => {

    it("should return an array of posts associated with the topic", (done) => {

      this.topic.getPosts()
        .then((associatedPost) => {
          expect(associatedPost[0].title).toBe("My first visit to Proxima Centauri b");
          done();
        });

    });

  });
});