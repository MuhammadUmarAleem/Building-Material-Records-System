const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'bw0tahnl56vojo59rf0j-mysql.services.clever-cloud.com',
  user: 'ufplfylf3mrki9rm',
  password: 'rOTyMSwXuEFUbMPIdl5W',
  database: 'bw0tahnl56vojo59rf0j',
  port:"3306",
});

// connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

module.exports={connection}