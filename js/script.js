const searcbtn = document.getElementById("submit-btn");
const searchQuery = document.getElementById("search-query");
const itemList = document.getElementById("item-list");

searcbtn.addEventListener("click",()=>{
	fetchData(searchQuery.value);
})


const fetchData = (keyWord)=>{
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyWord}`)
	.then(res => res.json())
	.then(jsonData=> RecipieList(jsonData))
}

const RecipieList = (jsonData)=>{
	itemList.innerHTML="";
	if(jsonData.meals === null){
		itemList.innerHTML = createMsg("Searched Item not found");
	}else{
		jsonData.meals.map(
			(meal) =>
			  (itemList.innerHTML += CreateSingleItem(
				meal.idMeal,
				meal.strMeal,
				meal.strMealThumb,
				[
				  meal.strIngredient1,
				  meal.strIngredient2,
				  meal.strIngredient3,
				  meal.strIngredient4,
				  meal.strIngredient5,
				  meal.strIngredient6,
				  meal.strIngredient7,
				  meal.strIngredient8,
				  meal.strIngredient9,
				  meal.strIngredient10,
				  meal.strIngredient11,
				  meal.strIngredient12,
				  meal.strIngredient13,
				  meal.strIngredient14,
				  meal.strIngredient15,
				  meal.strIngredient16,
				  meal.strIngredient17,
				  meal.strIngredient18,
				  meal.strIngredient19,
				  meal.strIngredient20,
				],
				[
				  meal.strMeasure1,
				  meal.strMeasure2,
				  meal.strMeasure3,
				  meal.strMeasure4,
				  meal.strMeasure5,
				  meal.strMeasure6,
				  meal.strMeasure7,
				  meal.strMeasure8,
				  meal.strMeasure9,
				  meal.strMeasure10,
				  meal.strMeasure11,
				  meal.strMeasure12,
				  meal.strMeasure13,
				  meal.strMeasure14,
				  meal.strMeasure15,
				  meal.strMeasure16,
				  meal.strMeasure17,
				  meal.strMeasure18,
				  meal.strMeasure19,
				  meal.strMeasure20,
				]
			  ))
		  );
		}
}

const createMsg = (value)=>{
	return ` <h3 class="col-12">${value}</h3>`;
}

const createItem = (itemID,itemName,imageSource,ingredientsList,ingredientsMeasures)=>{
	// boostrap here
	return `<div class="col-lg-3 col-md-6">
    <div class="card food-item" id="${itemID}">
        <img class="card-img-top" src="${imageSource}" />
        <div class="card-body">
        <h5 class="card-text">
            ${itemName}
      </h5>
    </div>
    ${createModal(
      itemID,
      itemName,
      imageSource,
      ingredientsList,
      ingredientsMeasures
    )}
  </div>
</div>`;
}

const createModal = (
	itemID,
	itemName,
	imageSource,
	ingredientsList,
	ingredientsMeasures)=>{
	// boostrap here
	return `<div class="modal fade" id="${itemID}-ingredients-modal" tabindex="-1" role="dialog">
       <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">
           <div class="card">
             <img
               class="card-img-top"
               src="${imageSource}"
             />
             <div class="card-body">
               <p class="card-text">
                 <h2>${itemName}</h2>
                 <h3>Ingredients</h3>
                 <ul class="ingredients-ul">
                   ${generateIngredientList(
                     ingredientsList,
                     ingredientsMeasures
                   )}
                 </ul>
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>`;
}

const generateIngredientList = (ingredientsList, ingredientsMeasures) => {
	let _list = "";
  
	//filtering the ingredientsList, ingredientsMeasures and for null, "", " " and 
	//checking valid index of that array

	const filteredIngredientsList = ingredientsList.filter((element) => element != "" && element != null);
	const filteredMeasurementList = ingredientsMeasures.filter((element) => element != " ");
	
	
	filteredIngredientsList.map((ingredientName, index) => {_list += `<li>${ingredientName} (${filteredMeasurementList[index]})</li>`;});
	return _list;
  };

const addToCard = ()=>{
	const fooditems = document.getElementsByClassName("food-item");
}