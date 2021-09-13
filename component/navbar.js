function navbar(){
    return `<div id="main">
    <ul>
        <li><a href="">Home</a></li>
        <li id="div_se">
            <input type="text" placeholder="topic you want to Search" id="search">
            <span><button onclick="resultSearch()">Search</button></span>
        </li>
        
        <li><a href="">news</a></li>

    </ul>
</div>
<div id="randomArticle">

</div>
`


}

export default navbar;