module.exports = app => {
  const tutorials = require("../controllers/controller.js");
  const user = require("../controllers/user.controller.js");
  const book = require("../controllers/book.controller.js");
  const upload = require("../middlewares/upload");
  const excelController = require("../controllers/upload.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/tutorials", tutorials.create);

  // Create a new User
  router.post("/user", user.create);

  // Create a new book data
  router.post("/:userId/book", book.create);

  // Retrieve all Tutorials
  router.get("/books", book.findAll);


  router.post("/excel/upload", upload.single("file"), excelController.upload);

  // router.delete('/api/books/:bookId', Books.delete); // API route for user to delete a book


  // Retrieve all Tutorials
  router.get("/tutorials", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  app.use("/api/", router);
};
