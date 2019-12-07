module.exports = function(sequelize, DataTypes) {
    var Menu_Item = sequelize.define("Menu_Item", {
      item_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      item_type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Menu_Item;
  };