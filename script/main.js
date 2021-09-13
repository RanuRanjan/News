async  function showRandom(){
      let res =await fetch (`
      https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2cd1f0a106ac484f94247b952655f786`)
      let data =await res.json();
      console.log(data);

}
showRandom()