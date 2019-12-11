// module.exports = function(sequelize, DataTypes) {
//     var Items_Ordered = sequelize.define("Items_Ordered", {
//       st_item_ordered: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true
//       },
//       item_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       order_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       },
//       item_price: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//       },
//       item_calories: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//       }
//     });
//     return Menu_Item;
//   };