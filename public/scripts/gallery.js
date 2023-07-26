function init() {
    // id= "1oJfTaQfBp3CVhq96af9nOGgh2J7OJHc_4aRwuS5MJQQ"
    // You must publish to web via csb
    Papa.parse(`https://docs.google.com/spreadsheets/d/e/2PACX-1vTIjPUIs4G2p6U2CbgqtVZ2BP082Vhetut7jlykl5loJOsXZ4fj1neLr4erVi9KsR99NCUxTeLWbQvN/pub?output=csv`, {
        download: true,
        header: true,
        complete: function (results) {
            let idList = []
            var data = results.data
            for (let i = 0; i < data.length; i++) {
                idList.push(data[i]["Keys"])
            }
            console.log(idList);
            idList.forEach(currentID => {
                const newImg = document.createElement("img");
                newImg.src= `https://lh3.google.com/u/2/d/1zMTvvjyJow3wc8Pk_FRvLQ7CdR4u_O76=w1920-h593-iv1`
                console.log(newImg.src);
                document.getElementById("imageList").appendChild(newImg);
            });
        }
    })
};
init()