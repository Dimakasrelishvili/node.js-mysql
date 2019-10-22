var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "dimadima",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
console.log("connected")
//openDb();
productSearch();

});


function openDb() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }


  
function productSearch() {
    inquirer
      .prompt({
        name: "product_name",
        type: "input",
        message: "What is the id?"
      })
      .then(function(answer) {
        var query = "SELECT*FROM products WHERE item_id = ?";
        connection.query(query, { product_name: answer.product_name }, function(err, res) {
            console.log(res);
         // for (var i = 0; i < res.length; i++) {
         // }
   
        });
      });
  }
  