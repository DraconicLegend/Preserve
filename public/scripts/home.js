async function getUserData() {
    // let response = await fetch("/getuserdata", {
    //     method: "GET",

    //     headers: { "Content-Type": "application/json" }
    // })
    // let jsoned = await response.json()
    // return(response)
    let reqest = new XMLHttpRequest()
    reqest.open("GET", "/getuserdata")
    reqest.addEventListener("load",()=>{
        let res = (reqest.response)
        let daobj = JSON.parse(res)
        for (let i = 1; i <= daobj["num"]; i++) {
            daobj[i]=JSON.parse(daobj[i])
            
        }
        console.log(daobj);
    })
    reqest.send()
}