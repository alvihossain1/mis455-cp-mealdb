function search(){
    var search = document.getElementById("searchInput").value;
    var url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`;
    fetch(url).then(res => res.json()).then(data => process(data));
}

function process(data){
    var dataArr = data.meals;
    var content = document.getElementById("content");
    content.textContent = ""
    for(var i = 0; i < 5; i++){
        var newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.innerHTML = `
                            <div class="inner-box">
                                <img src = '${dataArr[i].strMealThumb}'>
                                <div class="padding">
                                    <h4>Meal: ${dataArr[i].strMeal}</h4>
                                    <h5 class="light-text">Meal ID: ${dataArr[i].idMeal}</h5>
                                </div>
                            </div>
        `;
        content.appendChild(newDiv);
    }
}