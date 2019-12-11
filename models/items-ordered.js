module.exports = function(sequelize, DataTypes) {
    var Items_Ordered = sequelize.define("Items_Ordered", {
      st_item_ordered: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      item_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      item_price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      total_price_item: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {freezeTableName: true}
    );
    return Items_Ordered;
  };