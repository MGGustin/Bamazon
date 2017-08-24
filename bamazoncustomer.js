var inquirer= require('inquirer');
var mysql= require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Elliot!0",
    database: "bamazon_db"
});

connection.connect(function(err){
    if(err) throw err;
    makePurchase();
});


function makePurchase() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
    inquirer.prompt({
        name:"choose",
        type:"input",
        message:"Enter the ID number for the item you wish to purchase."
    },{
        name:"amount",
        type:"input",
        message:"How many of these items do you want to purchase?"
    }
    )
})
}