const loadMeals = (searchText) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then (data => displayMeals(data.meals));


}


const displayMeals = meals =>{
    // console.log(meals);

    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        // console.log(meal)`
        // step-2: create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // step-3: set content of the child
        mealDiv.innerHTML = `
        <div class="col">
        <div class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate excepturi praesentium repudiandae hic doloremque dolore nostrum, suscipit nobis accusantium ullam voluptate similique provident fugiat sunt!</p>
            <!-- Button trigger modal -->
            <button onclick='loadMealDetails(${meal.idMeal})' type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
              Details
            </button>
          </div>
        </div>
      </div>
        `
        

        // step-4: appendChild
        mealsContainer.appendChild(mealDiv);
    });
}

const searchMeals = () =>{
  const searchText = document.getElementById('search-field').value;
  console.log(searchText);
  loadMeals(searchText);
  
}

const loadMealDetails= idMeal => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.meals[0]));
}


const displayMealDetails = meal =>{
  document.getElementById('mealDetailsLabel').innerText = meal.strMeal
}


loadMeals('fish')