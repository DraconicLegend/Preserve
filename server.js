const { log } = require("console");
const express = require("express");
const Datastore = require("nedb")
const database = new Datastore('database.db');
database.loadDatabase();
const fs = require("fs");

const path = require("path");
// require('dotenv').config();

// let clientid = process.env.CLIENT_ID;
// let email = process.env.EMAIL_ADDRESS;

const app = express();
app.listen(3000, () => console.log("Listening on Port 3000"));
app.use(express.json({ limit: '1mb' }))
app.use("/styles", express.static(__dirname + '\\public\\styles'));
app.use("/scripts", express.static(__dirname + '\\public\\scripts'));
app.use("/images", express.static(__dirname + '\\public\\styles\\images'));
app.use("/images", express.static(__dirname + '\\public\\images'))
//---------------------------Home Directory------------------------
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
app.get('/about', (req, res) => {
  var options = {
    root: path.join(__dirname)
  };

  var fileName = 'public/About.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})

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

  var fileName = 'public/donate.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})
// Special Routing
// app.get('/bigdon', (req, res) => {
//   var options = {
//     root: path.join(__dirname)
//   };

//   var fileName = 'public/Contact copy.html';
//   res.sendFile(fileName, options, function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Sent:', fileName);
//     }
//   });
// })
//ENDS HERE

app.get('/pay', (req, res) => {
  var options = {
    root: path.join(__dirname)
  };

  var fileName = 'public/pay.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})




app.get('/donateSuccess', (req, res) => {
  var options = {
    root: path.join(__dirname)
  };

  var fileName = 'public/SuccessDon.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})

// Still testing
// app.get('/gallery', (req, res) => {
//   var options = {
//     root: path.join(__dirname)
//   };

//   var fileName = 'public/gallery.html';
//   res.sendFile(fileName, options, function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Sent:', fileName);
//     }
//   });
// })
//---------------------------------------BACKEND STUFF------------------------------------\\



app.post('/database', (req, res) => {
  console.log(req.body);
  database.insert({ Name: req.body.name, Telephone: req.body.tel, Email: req.body.email, DedicatedTo: req.body.dedic, AmountPaid: req.body.amount, Plant: req.body.plant })
  res.json({
    status: "success",
    Name: req.body.name,
    Telephone: req.body.tel,
    Email: req.body.email,
    DedicatedTo: req.body.dedic,
    AmountPaid: req.body.amount,
    Plant: req.body.plant
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

app.post('/post', (req, res) => {
  console.log(req.body);
});

app.post('/adduserdata', (req, res) => {
  // Storing the JSON format data in myObject
  var data = fs.readFileSync("data.json");
  var myObject = JSON.parse(data);
  console.log(myObject)
  // Defining new data to be added
  let newData = req.body.json

  // Adding the new data to our object
  myObject[myObject["num"] + 1] = newData
  myObject["num"] = myObject["num"] + 1
  // Writing to our JSON file
  var newData2 = JSON.stringify(myObject);
  fs.writeFile("data.json", newData2, (err) => {
    // Error checking
    if (err) {
      console.log(err)
    }
    console.log("New data added");
  });
});

app.get('/getuserdata', (req, res) => {
  var data = fs.readFileSync("data.json");
  var myObj = JSON.parse(data);
  str = JSON.stringify(myObj)
  res.send(data)
});

// app.get('/email',(req,res)=>{
//   res.send(email)
// })

// app.get('/email',(req,res)=>{
//   console.log(email);
// })

app.get('/getfiles', (req, res) => {
  url = "https://www.googleapis.com/drive/v2/files?q='1qs_TU-GoI-mBOAZkYhFEWDWP6N2ZGXHN'+in+parents&key=AIzaSyDaa0Q82vP9KVgPQr7n3bweX7iS_8Ujq70"
  resd = "Not a test"
  // You haveto use .then() to do somethign with the value of the Promise of an async fucntion
  getFile(url).then((respon) => {
    resd = respon;
    console.log(resd);
    res.send(resd);
  })
});

async function getFile(urls) {
  
  // let theResponse = await fetch(urls)
  return theResponse
}

