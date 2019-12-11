var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '192.168.99.100',
    port: '3306',
    user: 'root',
    password: 'docker',
    database: 'krusty_krab',
});
connection.connect((err, res) => {
    if (err) { throw err };
    console.log(`Connection Made. Connection ID: ${connection.threadId}`);
});

// connection.query('SELECT * FROM Menu_Items', (err, result) => {
//     if (err) {
//         throw err
//     }; 
//     console.log(result); 
// }); 