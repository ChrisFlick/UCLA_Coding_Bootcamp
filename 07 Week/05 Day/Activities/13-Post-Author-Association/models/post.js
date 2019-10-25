module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function (model) {
    // Add a belongsTo association to Authors here
    model.Post.belongsTo(model.Author, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    // Example: https://github.com/sequelize/express-example/blob/master/models/task.js

  }
   return Post;
};
