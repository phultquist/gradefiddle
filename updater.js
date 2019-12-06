//updates all fields on input

// function updateCategoryTotals() {
// 	var assignments,
// 			totalOutOf,
// 			totalScore;
// 	for (category of categories) {
// 		totalOutOf = 0;
// 		totalScore = 0;
// 		assignments = category.assignments;
// 		for (assignment of assignments) {
// 			totalOutOf += assignment.outOf;
// 			totalScore += assignment.score;
// 		}
// 		console.log('start category: '+category.name);
// 		console.log('totalOutOf: '+totalOutOf);
// 		console.log('totalScore: '+totalScore);
// 		console.log('end category');
// 		category.totalOutOf = totalOutOf;
// 		category.totalScore = totalScore;
// 	}
// }

function askForCategoryInfo(n){ //n is the number of categories that info is requested for
	$('#modal').css("display", "block");
	let categorytable = document.createElement("table");
	let row = document.createElement("tr");
	let nameTd = document.createElement("td");
	let nameInput = document.createElement("input");
	let weightTd = document.createElement("td");
	let weightInput = document.createElement("input");
	weightInput.setAttribute("value", "0.2");
	nameInput.setAttribute("value", "New Category");

	weightTd.appendChild(weightInput);
	nameTd.appendChild(nameInput);

	row.appendChild(weightTd);
	row.appendChild(nameTd);

	categorytable.appendChild(row);

	
}

function createCategory() {
	let newCategory = new Category("New Category", 0.05);
	newCategory.isNew = true;
	categories.push(newCategory);
	// let newCategory = {
	// 	weight: 0.05,
	// 	name: 'New Category',
	// 	totalScore: null,
	// 	totalOutOf: null,
	// 	isNew: true
	// };

	b.insertBefore(createTable(newCategory), document.getElementById('newCategoryButton'));
	b.insertBefore(document.createElement('br'), document.getElementById('newCategoryButton'));
	b.insertBefore(document.createElement('br'), document.getElementById('newCategoryButton'));

}

function showFinalGrade(g) {
	let formatted;
	if (g===undefined || g==null){
		formatted = "";
	} else {
		formatted = (g*100).toFixed(3).toString()+'%';
	}
	let field = document.getElementById('grade');
	field.innerHTML = formatted;
}

function updateGrade() {
	showFinalGrade(calculateFinalGrade())
}

function calculateFinalGrade(){
	var finalGrade = 0;
	var countedPercentage = 0; //if not all categories are full, this is very important
	for (cat of categories){
		finalGrade += cat.categoryMakeup();
		countedPercentage += cat.weight;
	}
	if (countedPercentage == 0 || finalGrade == 0) return null;
	return finalGrade/countedPercentage;
}

// updateGrade()
