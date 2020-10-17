const express = require("express");
const spawn = require("child_process").spawn;
const app = express();
const fs = require("fs");

app.use(express.json());

app.post("/process_update", 
(req, res) => {
  try {
    if(fs.existsSync("output_coor.txt")){
      fs.unlinkSync("output_coor.txt")
    }
    if (req && req.body && req.body.feed_script) {
      fs.writeFile("./input_coor.txt", req.body.feed_script, (err) => {
        var pyscript = spawn("python3", ["optscript.py"]);
        pyscript.stdout.on("error",(err)=>{
          console.log("PYTHON SCRIPT ERROR")
          console.log(err)
          //res.statusCode = 500;
          res.send("Error processing update\n"+JSON.stringify(req.body))
        })
        pyscript.on("exit", (code, signal) => {
          fs.readFile("./output_coor.txt", (err, data) => {
            if (err) {
              console.log(err);
              //res.statusCode = 500;
              res.send("Error reading output file from script");
            }
            res.send(data);
          });
        });
      });
    } else {
      console.log("invalid request");
      console.log(JSON.stringify(req.body));
      //res.statusCode = 500;
      res.send("wrong request structure\n"+JSON.stringify(req.body));
    }
  } catch (err) {
    console.log("Fatal error");
    console.log(err)
  }
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log("server running on port " + port);
});
