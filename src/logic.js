let licenseToggle = document.querySelectorAll('input[name=licenseToggle]');
let checkedPlan = document.querySelector('input[name=licenseToggle][checked]');

console.log(licenseToggle);
console.log(checkedPlan);

for (let plan of licenseToggle) {
	plan.onclick = function() {
		let licensePlan = checkedPlan.value;
		let licensePrice = checkedPlan.dataset.licensePrice;
		console.log(licensePlan);
		console.log(licensePrice);
	};
}

