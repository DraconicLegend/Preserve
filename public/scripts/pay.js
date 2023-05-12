const json = localStorage.getItem('form')
const obj = JSON.parse(json)
console.log(obj);
for (key in obj) {
    const markup = `
        <div>
            <span>${key}:${obj[key]}</span>
        </div>
        `
    document.getElementById("data").innerHTML += markup
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
            window.location.replace("/donateSuccess"); 
            // Successful capture! For dev/demo purposes:

            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            const transaction = orderData.purchase_units[0].payments.captures[0];

            alert(`Transaction ${transaction.status}: ${transaction.id}`);

           


        });



    }

}).render('#paypal');