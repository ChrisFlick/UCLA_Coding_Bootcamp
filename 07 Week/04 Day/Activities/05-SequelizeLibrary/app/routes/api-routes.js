// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function (req, res) {
    Book.findAll({}).then(function (results) {
      res.json(results)
    })
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function (req, res) {
    let book = req.params.book.split("+").join(' ')

    Book.findAll({
      where: {
        title: book,
      }
    }).then(function (results) {
      res.json(results)
    })

  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function (req, res) {
    let genre = req.params.genre.split("+").join(' ')

    Book.findAll({
      where: {
        genre: genre,
      }
    }).then(function (results) {
      res.json(results)
    })
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function (req, res) {
    let author = req.params.author.split("+").join(' ')

    Book.findAll({
      where: {
        author: author,
      }
    }).then(function (results) {
      res.json(results)
    })
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function (req, res) {
    Book.findAll({}).then(function (results) {

      let longBooks = []
      for (let i = 0; i < results.length; i++) { // Go through all books and check to see if they are long before adding them to array.
        if (results[i].pages > 150) {
          longBooks.push(results[i])
        }
      }

      res.json(longBooks)
    })
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function (req, res) {
    Book.findAll({}).then(function (results) {

      let shortBooks = []
      for (let i = 0; i < results.length; i++) { // Go through all books and check to see if they are long before adding them to array.
        if (results[i].pages < 150) {
          shortBooks.push(results[i])
        }

      }

      res.json(shortBooks)
    });
  });

  // Add sequelize code to create a book
  app.post("/api/new", function (req, res) {
    let book = req.body
    console.log(`Book Data: ${book}`)

    Book.create({
      title: book.title,
      author: book.author,
      genre: book.genre,
      pages: book.pages
    }).then(function (results) {
      res.end();
    })

  });

  // Add sequelize code to delete a book
  app.delete("/api/book/:id", function (req, res) {
    Book.destroy({
      where: {
        id : req.params.id,
      }
    }).then( () => {
      res.end();
     
     } );
  });

};
