let input = document.getElementById("amt")



paypal.Buttons({

    // Sets up the transaction when a payment button is clicked

    createOrder: (data, actions) => {

        return actions.order.create({

            purchase_units: [{

                amount: {

                    value: input.value// Can also reference a variable or function

                }

            }]

        });

    },

    // Finalize the transaction after payer approval

    onApprove: (data, actions) => {
        document.getElementById("payment-form").submit(); 
        return actions.order.capture().then(function (orderData) {

            // Successful capture! For dev/demo purposes:

            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
 
            const transaction = orderData.purchase_units[0].payments.captures[0];

            alert(`Transaction ${transaction.status}: ${transaction.id}`);

            // When ready to go live, remove the alert and show a success message within this page. For example:

            // const element = document.getElementById('paypal-button-container');

            // element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // Or go to another URL:  actions.redirect('thank_you.html');

        });

        

    }

}).render('#paypal-button-container');



// let submit = document.getElementById("payment-form");
// console.log("Hello World");


// submit.addEventListener("submit", function (evt) {
//     evt.preventDefault();
//     console.log("Submitted");
//     let name = document.getElementById("name").value;
//     let tel = document.getElementById("tel").value;
//     let email = document.getElementById("email").value;
//     let dedic = document.getElementById("dedic").value;
//     let amount = document.getElementById("amt").value;
//     let plant = document.getElementById("typePlant").value;
//     data = {name,tel,email,dedic,amount,plant };
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     };
//     fetch("/database", options)
//     .then(response => console.log(response.json()))
//     // let x =document.createElement("img")
//     // x.src="PRI213893584.avif";
//     // document.getElementById("middle").appendChild(x)
// });
