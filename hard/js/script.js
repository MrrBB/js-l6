let	monthlyIncome,
	price,
	open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	choosedGoods = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount = document.getElementsByClassName('discount-value')[0],
	isopen = document.getElementsByClassName('isopen-value')[0],
	goods_item = document.querySelectorAll(".goods-item"),
	btnS = document.getElementsByTagName('button');
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],	
	goods = document.querySelector('.choose-goods'),
	itemsInput = document.querySelector('.choose-item'),
	timeInput = document.querySelector('.time-value'),
	budgetInput = document.querySelector('.count-budget-value'),
	discountCheck = document.getElementsByClassName('check')[0],
	dailyBudget = document.getElementById('budget'),
	employers = document.querySelectorAll('.hire-employers-item');

	goods_btn.disabled = true;
	budget_btn.disabled = true;
	employers_btn.disabled = true;

//для определения скидки
function discountF(){
		if(discountCheck.checked){
			mainList.discount = true;
		} else {
			mainList.discount = false
		}
};

discountCheck.addEventListener('click', () =>{
	let priceSale = prompt("цена без скидки", '');
	while(isNaN(priceSale) || priceSale == '' || priceSale == null) {
		// let priceSale = prompt("цена без скидки", '');
	}
		if (mainList.discount = true) {	
			priceSale = priceSale * 0.8;
			discount.style.backgroundColor = 'green';
			alert(priceSale);
		}
})


open.addEventListener('click', function f1() {
while(isNaN(monthlyIncome) || monthlyIncome == '' || monthlyIncome == null) {
		monthlyIncome = prompt("Ваш бюджет на месяц?", '');
	}
	budget_value.textContent = monthlyIncome;
	
	name_value.textContent = prompt("Название вашего магазина?", '').toUpperCase();

});



goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++){
		let a = goods_item[i].value;		
		if((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
			console.log('все верно!');
			mainList.shopGoods[i] = a;
			choosedGoods.textContent = mainList.shopGoods
		} 	
	}

});


itemsInput.addEventListener('change', () =>{
	let items = itemsInput.value;				
			if(!isNaN(items) || items != '') {
				mainList.shopItems = items.split(',');
				mainList.shopItems.sort();
				items_value.textContent =	mainList.shopItems;	
				} 
		
				// mainList.shopItems.sort();
			console.log('всё правильно')
		});





timeInput.style.textAlign = 'center';
timeInput.addEventListener('mouseenter', () => {
	//время определяется автоматически) т - технологии 
		let d = new Date(),
			time = d.getHours();
		// let time = timeInput.value;
		if (time < 0) {
			console.log('токаого не может быть ');
			mainList.open = false;
		} else if(time > 8 && time < 21) {
			console.log('время работать!');
			mainList.open = true;
			}  else if (time < 24) {
				console.log('уже слишком поздно!');
				mainList.open = false;
				} else {
					console.log('в сутках только 24 часа)');
					mainList.open = false;
					}
	if(mainList.open == true) {
		isopen.style.backgroundColor = 'green';
		goods_btn.disabled = false;
		budget_btn.disabled = false;
		employers_btn.disabled =  false;
	} else {
		isopen.style.backgroundColor = 'red';
	}
});




budget_btn.addEventListener('click', () =>{
	budgetInput.value = monthlyIncome / 30;
});



		employers_btn.onclick = function(e){
		employers_value.innerHTML = "";
		}


employers_btn.addEventListener('click', () =>{
		

		for (let i = 0; i < employers.length; i++){
		let employer_name = employers[i].value;
        mainList.employers[i] = employer_name;
		employers_value.textContent += mainList.employers[i] + ',';
		// delete mainList.employers[i];
		};
		console.log(mainList.employers)
		// replObj()
})

var mainList = {
	budget: monthlyIncome,
	name: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],	
};






	// for( let key in mainList) {
	// 	alert('Наш магазин включает в себя: '+ key);
	// };
