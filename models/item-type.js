module.exports = function(sequelize, DataTypes) {
    var Item_Type = sequelize.define("Item_Type", {
      item_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      item_type_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Item_Type;
  };