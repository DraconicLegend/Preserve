const express = require("express");
const Datastore = require("nedb")
const database = new Datastore('database.db');
database.loadDatabase();
const path = require("path"); 

const app = express();
app.listen(3000, () => console.log("Listening on Port 3000"));
app.use(express.json({ limit: '1mb' }))



app.get('/', (req, res) => {
  var options = {
    root: path.join(__dirname)
  };

  var fileName = 'Donate.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})



// app.post('/database', (req, res) => {
//   console.log(req.body);
//   database.insert({ name: req.body.input1, mood: req.body.input2 })
//   res.json({
//     status: "success",
//     name: req.body.input1,
//     mood: req.body.input2
//   });
// });

// app.get('/alldata', (req, res) => {
//   database.find({}, (err, data) => {
//     if (err) {
//       response.end();
//       return;
//     }
//     console.log("Test");
//     res.send(data);
//   });
// })




