let SHEET_ID = "1oJfTaQfBp3CVhq96af9nOGgh2J7OJHc_4aRwuS5MJQQ"
let SHEET_TITLE = "Master_Sheet"
let SHEET_RANGE = "A1:Z1"

// let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gbix/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;
// let FULL_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values:batchGet?key=AIzaSyDaa0Q82vP9KVgPQr7n3bweX7iS_8Ujq70`
let FULL_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A1:D5?key=AIzaSyDaa0Q82vP9KVgPQr7n3bweX7iS_8Ujq70`

fetch(FULL_URL)
.then((res)=>{
    console.log(res);
})

let request = new XMLHttpRequest()
request.open("GET", FULL_URL)
request.addEventListener("load", () => {
    let res = request.response
    console.log(res);
});
// `http://drive.google.com/uc?export=view&id=${id}`



