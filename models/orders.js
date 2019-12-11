module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      order_total: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    });
    return Order;
  };