module.exports = function(sequelize, DataTypes) {
    var Menu_Item = sequelize.define("Menu_Item", {
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      item_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      item_type_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      item_price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      item_calories: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return Menu_Item;
  };