
const jsond = localStorage.getItem('form')
const obj = JSON.parse(jsond)
console.log(obj);
for (key in obj) {
    const markup = `
        <div>
            <span>${key}:${obj[key]}</span>
        </div>
        `
    document.getElementById("data").innerHTML += markup
}

function combineJSON(js1, js2) {
    const obj1 = JSON.parse(js1);
    const obj2 = JSON.parse(js2);
    // console.log(obj1)
    // console.log(obj2)
    const mergedObject = {
      ...obj1,
      ...obj2
    };
    return(JSON.stringify(mergedObject))
  }
  
paypal.Buttons({

    // Sets up the transaction when a payment button is clicked

    createOrder: (data, actions) => {

        return actions.order.create({

            purchase_units: [{

                amount: {

                    value: obj["Amount to Donate"]// Can also reference a variable or function

                }

            }]

        });

    },

    // Finalize the transaction after payer approval

    onApprove: async function (data, actions) {
        
        return actions.order.capture().then(async function (orderData) {
            // window.location.replace("/donateSuccess"); 
            // Successful capture! For dev/demo purposes:
    
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            fetch("/adduserdata", {
                method: "POST",
                body: JSON.stringify({ json: combineJSON(jsond,JSON.stringify(orderData, null, 2))}),//Gotta send data in this format - JSON.stringify({data: dataVar})
        
                headers: { "Content-Type": "application/json" }
            }).then(console.log("Request went throguh"))
        

            const transaction = orderData.purchase_units[0].payments.captures[0];

            alert(`Transaction ${transaction.status}: ${transaction.id}`);




        });



    }

}).render('#paypal');
var jsn = 5
button = document.getElementById("But")
button.addEventListener("click", () => {
    console.log("clicked");
    

})



// fetch("/getuserdata", {
//     method : "GET",
//     // -- or --
//     // body : JSON.stringify({
//         // user : document.getElementById('user').value,
//         // ...
//     // })
// }).then((data)=>{
//     console.log(data)
// });


