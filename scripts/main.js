async function apiCall(url) {

    try{

        let res = await fetch(url)
        let data = await res.json()
        return data;

    }
    catch(err)
    {
        console.log("err:",err)
    }

    //add api call logic here


}


function appendArticles(articles, main) {
console.log(articles)
console.log(main)
    //add append logic here
    articles.forEach((e) => {

        console.log(title, image, description)
        let div = document.createElement("div")
        // div.id = "img";

        let p= document.createElement("p")
        p.textContent = e.title
        // console.log()

        let img = document.createElement("img");
        img.src =e.image

        let des = document.createElement("p")
        des.textContent = e.description;

        div.append(p, des, img);
        main.append(div)
    });

}

export { apiCall, appendArticles }