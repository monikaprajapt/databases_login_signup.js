var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Monika@123",
  database:"project"

})

// con.connect(function(err) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("Connected!");    }
     
//     con.query("CREATE DATABASE project", function (err, result) {
//       if (err){
//           console.log(err)
//       }
//       else{
//         console.log("Database created");
//       }
       
//     });
//   })

// con.connect(function(err) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("Connected!");

//     }

    // var sql = "CREATE TABLE project (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), password VARCHAR(255),email VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err){
    //       console.log(err)
    //   }
    //   else{
    //     console.log("Table created");
    //   }
       
    // });
// //   });
console.log("welcome to logine and signup")
const a=require("readline-sync")
user_name=a.question("want do you want to do login and signup")
if (user_name=="signup"){
    var name=a.question("enter your user name:")
    var password1=a.question("enter your password:")
    var email=a.question("enter your email")

    if (password1.match(/[A-Z]/m) && password1.match(/[a-z]/m) && password1.match(/[0-9]/m) &&  password1.match(/[$#&@]/m)){
        var password2=a.question("enter the passowrd2:")
        if (password2==password1){
            console.log("right") 
            con.connect(function(err) {
                if (err){
                    console.log(err)
                    }
            else{
                console.log("Connected!");    
                }
     
            var sql = "INSERT INTO project (name,password,email) VALUES ?";
            var values = [[name,password2,email]]
            con.query(sql, [values], function (err, result) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Number of records inserted:");
      }
       
    });
  });
}
}
}else{
    if (user_name=="login"){
        Name=a.question("enter the Name")
        Password=a.question("enter the password")
        con.connect(function(err) {
            var name=Name;
            var password=Password;
            var sql="SELECT * FROM project WHERE name=? OR password=?"
            con.query=(sql,[name,password],function (err, result){
                if(!password){
                    console.log("not")
                }else{
                    console.log("yes",result,"sucessfully")
                }

            });
          });


    }else{
        console.log("your information is rong")
    }
}
