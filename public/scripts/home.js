// let response = await fetch("/getuserdata", {
//     method: "GET",

//     headers: { "Content-Type": "application/json" }
// })
// let jsoned = await response.json()
// return(response)
let reqest = new XMLHttpRequest()
reqest.open("GET", "/getuserdata")
reqest.addEventListener("load", () => {
    let res = (reqest.response)
    let daobj = JSON.parse(res)
    for (let i = 1; i <= daobj["num"]; i++) {
        daobj[i] = JSON.parse(daobj[i])

    }
    let obj = daobj
    for (let i = 1; i <= obj["num"]; i++) {
        const row = document.createElement("tr")
        let person = `${obj[i]["First Name"]} ${obj[i]["Last Name"]}`
        let honored = `${obj[i]["First Name of Dedicatee"]} ${obj[i]["Last Name of Dedicatee"]}`
        let spec = obj[i]["Species"]
        // console.log("Hello");
        // console.log(person);
        // console.log(honored);
        // console.log(spec);
        personCell = document.createElement("td")
        personCell.textContent = person
        row.appendChild(personCell)
        honorCell = document.createElement("td")
        honorCell.textContent = honored
        row.appendChild(honorCell)
        specCell = document.createElement("td")
        specCell.textContent = spec
        row.appendChild(specCell)
        document.getElementById("table").appendChild(row)
    }
})
reqest.send()