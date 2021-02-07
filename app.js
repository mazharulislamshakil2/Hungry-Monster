const API = "https://www.themealdb.com/api/json/v1/1/search.php";
const search = document.getElementById("search");
search.addEventListener("click", function () {
    const meal = document.getElementById("meal").value;
    const url = `${API}?s=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => mealMenu(data.meals));
    const mealMenu = (food) => {
        console.log(food);
        if (food == null) {
            document.getElementById("wrong").innerText = "No Results Found!";
        } else {
            const menuList = document.getElementById("menuList");
            food.forEach(foods => {
                const foodDiv = document.createElement("div");
                foodDiv.className = "foods mt-5";
                const foodInfo = `
                    <div class="card" style="width: 18rem;" onclick="foodDetail('${foods.strMeal}')">
                    <img src="${foods.strMealThumb}" class="card-img-top img-thumbnail" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${foods.strMeal}</h5>
                    </div>
                    </div>
                `
                foodDiv.innerHTML = foodInfo;
                menuList.appendChild(foodDiv);
            });
        }
    }
    document.getElementById("menuList").innerHTML = "";
    document.getElementById("foodDetailInfo").innerHTML = "";
});
// detail foots
const foodDetail = (foodname) => {
    const url = `${API}?s=${foodname}`
    fetch(url)
        .then(res => res.json())
        .then(data => foodInformation(data.meals[0]));
}
const foodInformation = food => {
    console.log(food.strMeal);
    const foodFullDetail = document.getElementById("foodDetailInfo");
    foodFullDetail.innerHTML = `
        <img width="300" height="300" class="img-fluid" src="${food.strMealThumb}">
        <h1>${food.strMeal}</h1>
        <h3>Ingredients</h3>
        <ul class="list-group">
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient1}
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient2}
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient3}
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient4}
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient5}
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." Checked>
                ${food.strIngredient6}
            </li>
        </ul>
    `
}