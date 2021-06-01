const db = require("../models");
const Book = db.book;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User
  const book = {
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    quantity: req.body.quantity,
    userId: req.params.userId
  };

  // Save user in the database
  Book.create(book)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating data."
      });
    });

};


exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Book.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetcing data."
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.bookId;

  Book.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "data was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete data with id=${id}. Maybe data was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete data with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Book.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update dara with id=${id}. Maybe data was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating data with id=" + id
      });
    });
};