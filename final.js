var MAX_INITIAL_RESULTS = 5;
var allData = [];

function connect(){

    var search  = document.getElementById("searchTerm").value ;

    var oldContent = document.getElementById("displayArea");
    var showAllBtn = document.getElementById("showAllBtn");

    // clear previous results so new result appears from top of page
    oldContent.innerHTML = "";
    showAllBtn.classList.add("hidden");

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    fetch(url)
    .then(res => res.json())
    .then(data => show(data));

}

