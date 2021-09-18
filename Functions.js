var income;
var monthlySpending;
var currency = "USD";
var totalBudget = 0;


var spendingType = {"H" :["Housing", 0], "F":["Food/Drink", 0], "T" : ["Transportation",0], "Ed" : ["Education", 0],
 "Sh" : ["Shopping", 0], "B" : ["Bills/Utilities",0], "En" : ["Entertainment",0], "O" :["Other",0], "Sa" : ["Savings", 0] };  //dictionary of all spending types


function makeWord(){
	var word = document.getElementById("word");
	word.style.display = "block";
}
function getIncome(){
	var incomeInput = document.getElementById("userIncome").value;
	income = incomeInput
	console.log(incomeInput);
}
function getCurrencyType(){
	//currency = $('#moneyDropdown').val($(this).html());
	//console.log($('#moneyDropdown').val($(this).text()));

	console.log(currency);
}
function PutCurrency(){
	var paragraph = document.getElementById("currencyTag");
	//var text = document.createTextNode(currency);
	paragraph.innerHTML = currency;
	console.log("here");

}
function AddSpending(){
	var money = document.getElementById("Spending").value;
	var type = document.getElementById("spendingType");
	var typeHold;
	for(const [key,value] of Object.entries(spendingType)){
		if(type.value.localeCompare(key)==0){
			value[1]+=parseFloat(money);
			typeHold=value[0];
		}
	}
	console.log(spendingType.F[1])
	var table = document.getElementById("entries")
	var row =table.insertRow(1);
	var amount = row.insertCell(0);
	var category = row.insertCell(0);

	// Add some text to the new cells:
	amount.innerHTML = "$"+money;

	category.innerHTML = typeHold;
}
//PutCurrency();

