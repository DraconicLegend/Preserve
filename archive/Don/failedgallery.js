// fetch("/getfiles", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" }
// }).then((res)=>{
//     console.log(res);
// });

// Before doing anythign else, you need to enable Google Drive API Funcationlaity in Google Cloud Credineals
fetch("https://www.googleapis.com/drive/v2/files?q='1qs_TU-GoI-mBOAZkYhFEWDWP6N2ZGXHN'+in+parents&key=AIzaSyDaa0Q82vP9KVgPQr7n3bweX7iS_8Ujq70", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
}).then((res) => {
    // console.log(res);
});

console.log("Hello");


fetch("https://docs.google.com/spreadsheets/d/1oJfTaQfBp3CVhq96af9nOGgh2J7OJHc_4aRwuS5MJQQ/edit#gid=0&range=A1:A10", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
}).then((res) => {
    console.log(res);
})