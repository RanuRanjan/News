function navbar(){
    return `<div id="main">
    <ul>
        <li><a href="home.html">Home</a></li>
        <li id="div_se">
            <input type="text" placeholder="topic you want to Search" id="search">
            <span><button onclick="resultSearch()">Search</button></span>
        </li>
        <li><a href="Search.html">Search News</a></li>
    

    </ul>
</div>
<div id="main_div">
<div id="randomArticle">

</div>
</div>
<div id="result"></div>
`


}

export default navbar;