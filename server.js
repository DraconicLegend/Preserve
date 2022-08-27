const express = require("express");
const Datastore = require("nedb")
const database = new Datastore('database.db');
database.loadDatabase();
const path = require("path"); 

const app = express();
app.listen(3000, () => console.log("Listening on Port 3000"));
app.use(express.json({ limit: '1mb' }))
app.use("/styles",  express.static(__dirname + '\\public\\styles'));
app.use("/scripts", express.static(__dirname + '\\public\\scripts'));
app.use("/images",  express.static(__dirname + '\\public\\styles\\images'));
app.use("/images",express.static(__dirname+'\\public\\images'))
//Home Directory
app.get('/', (req, res) => {
  var options = {
    root: path.join(__dirname)
  };

  var fileName = 'public/index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})



//Home Directory
app.get('/partners', (req, res) => {
  var options = {
    root: path.join(__dirname)
  };

  var fileName = 'public/Partners.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})



//Contact
app.get('/contact', (req, res) => {
  var options = {
    root: path.join(__dirname)
  };

  var fileName = 'public/Contact.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})

//Success upon Contact form submit

app.get('/success', (req, res) => {
  var options = {
    root: path.join(__dirname)
  };

  var fileName = 'public/Success.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})




//Donate Routing

app.get('/donate', (req, res) => {
  var options = {
    root: path.join(__dirname)
  };

  var fileName = 'public/Donate.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})






//---------------------------------------BACKEND STUFF------------------------------------\\



app.post('/database', (req, res) => {
  console.log(req.body);
  database.insert({ name: req.body.input1, mood: req.body.input2 })
  res.json({
    status: "success",
    name: req.body.input1,
    mood: req.body.input2
  });
});

app.get('/alldata', (req, res) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    console.log("Test");
    res.send(data);
  });
})




