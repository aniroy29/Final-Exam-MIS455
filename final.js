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



function show (data){

  allData = data.meals;

  render(allData.slice(0, MAX_INITIAL_RESULTS));

  var showAllBtn = document.getElementById("showAllBtn");
  if (allData.length > MAX_INITIAL_RESULTS){
      showAllBtn.classList.remove("hidden");
  }

}



function showAll(){

    var oldContent = document.getElementById("displayArea");
    oldContent.innerHTML = "";

    render(allData);

    document.getElementById("showAllBtn").classList.add("hidden");

}



function render(mealsToShow){

  var oldContent = document.getElementById("displayArea");

  for (var i = 1; i <= mealsToShow.length; i++){
    var newDiv = document.createElement("div");
    newDiv.innerHTML =`Meal ID: ${mealsToShow[i-1].idMeal} <br>
                       Meal Name: ${mealsToShow[i-1].strMeal} <br>
                       Meal Title: ${mealsToShow[i-1].strMeal} <br>
                       <img src="${mealsToShow[i-1].strMealThumb}" <br>
                       Cooking Instructions: ${mealsToShow[i-1].strInstructions} <br>`;
        newDiv.classList.add("innerStyle")

        oldContent.appendChild(newDiv);
  }
}