function navbar(){
    return `<div id="main">
    <ul>
        <li>Home</li>
        <li>
            <input type="text" placeholder="topic you want to Search" id="search">
            <span><button onclick="Search()">Search</button></span>
        </li>
        <li>Search</li>
        <li>news</li>

    </ul>
</div>
<div id="randomArticle">

</div>
`


}

export default navbar;