const express = require("express");
const Datastore = require("nedb")
const database = new Datastore('database.db');
database.loadDatabase();
const path = require("path"); 
const ejs = require("ejs");


const app = express();
app.listen(3000, () => console.log("Listening on Port 3000"));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('Donate')
})


app.use(express.json({ limit: '1mb' }))


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













const { CLIENT_ID, APP_SECRET } = process.env;


// create a new order

app.post("/api/orders", async (req, res) => {

  const order = await createOrder();

  res.json(order);

});


// capture payment & store order information or fullfill order

app.post("/api/orders/:orderID/capture", async (req, res) => {

  const { orderID } = req.params;

  const captureData = await capturePayment(orderID);

  // TODO: store payment information such as the transaction ID

  res.json(captureData);

});


//////////////////////

// PayPal API helpers

//////////////////////


// use the orders api to create an order

async function createOrder() {

  const accessToken = await generateAccessToken();

  const url = `${base}/v2/checkout/orders`;

  const response = await fetch(url, {

    method: "post",

    headers: {

      "Content-Type": "application/json",

      Authorization: `Bearer ${accessToken}`,

    },

    body: JSON.stringify({

      intent: "CAPTURE",

      purchase_units: [

        {

          amount: {

            currency_code: "USD",

            value: "100.00",

          },

        },

      ],

    }),

  });

  const data = await response.json();

  return data;

}


// use the orders api to capture payment for an order

async function capturePayment(orderId) {

  const accessToken = await generateAccessToken();

  const url = `${base}/v2/checkout/orders/${orderId}/capture`;

  const response = await fetch(url, {

    method: "post",

    headers: {

      "Content-Type": "application/json",

      Authorization: `Bearer ${accessToken}`,

    },

  });

  const data = await response.json();

  return data;

}


// generate an access token using client id and app secret

async function generateAccessToken() {

  const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64")

  const response = await fetch(`${base}/v1/oauth2/token`, {

    method: "post",

    body: "grant_type=client_credentials",

    headers: {

      Authorization: `Basic ${auth}`,

    },

  });

  const data = await response.json();

  return data.access_token;

}