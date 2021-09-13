async  function resultSearch(){

    let inputuser= document.getElementById("search").value
    document.getElementById("search").value=""
    let res =await fetch (`https://newsapi.org/v2/everything?q=${inputuser}&from=2021-08-13&sortBy=publishedAt&apiKey=2cd1f0a106ac484f94247b952655f786`)
    let data =await res.json();
    console.log(data);

    var article= document.getElementById("result")
    article.innerHTML=""
   
     data.articles.forEach(({title,urlToImage,description}) => {
    
      let news_div=document.createElement("div")
      // news_div.setAttribute('class',"new")
  
      let titles=document.createElement("h3")
      titles.innerHTML=title;

      let des=document.createElement("p")
      des.innerHTML=description;



      let image=document.createElement("img")
      image.src=urlToImage;

      news_div.append(image,titles,description)
      article.append(news_div)


     
  })
}
