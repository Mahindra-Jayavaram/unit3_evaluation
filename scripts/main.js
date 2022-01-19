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
// console.log(articles)
console.log(main)
main.innerHTML=null;
    //add append logic here
    articles.forEach((e) => {

        //console.log(title, image, description)
        let div = document.createElement("div")
        // div.id = "img";

        let div1 = document.createElement("div")
        let p= document.createElement("p")
        p.textContent = e.content
        // console.log()
        div1.append(p)

        let img_div = document.createElement("div")
        let img = document.createElement("img");
        img.src =e.image
        img_div.append(img)

        let div2 = document.createElement("div")
        let des = document.createElement("p")
        des.textContent = e.description;
        div2.append(des)

        div.append(div1,div2,img_div);

        div.addEventListener ("click", function()
        {
            localStorage.setItem("clicked_item",JSON.stringify(e));
            window.location.href = "news.html"
        })
        main.append(div)
    });

}

export { apiCall, appendArticles }