let input = document.getElementById("amt");


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

    onApprove: async function (data, actions) {
        document.getElementById("payment-form").submit();

        return actions.order.capture().then(async function (orderData) {
            // Successful capture! For dev/demo purposes:

            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            const transaction = orderData.purchase_units[0].payments.captures[0];

            alert(`Transaction ${transaction.status}: ${transaction.id}`);



        });




    }

}).render('#paypal-button-container');


let submit = document.getElementById("payment-form");




let minisub = document.getElementById("nutton");

minisub.addEventListener("click", async function (evt) {
    evt.preventDefault();

    let name = document.getElementById("name").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    let dedic = document.getElementById("dedic").value;
    let amount = document.getElementById("amt").value;
    let plant = document.getElementById("typePlant").value;
    data = { name, tel, email, dedic, amount, plant };
    console.log(data);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    const response = await fetch("/database", options);
    const json = await response.json();
    console.log(json);
});



// let req = new XMLHttpRequest();
// req.addEventListener("load", () => {
//     console.log("got res");
//     let resd = this.response
//     console.log(JSON.parse);
// });
// req.open("GET", "/email");//send username as a query
// req.send();

document.getElementById("nutton").onclick = function() {
    //disable
    this.disabled = true;
    this.textContent = "Submitted";
}