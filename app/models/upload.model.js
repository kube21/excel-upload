module.exports = (sequelize, Sequelize) => {
    const Upload = sequelize.define("upload", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Upload;
  };