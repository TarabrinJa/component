let licenseToggle = document.querySelectorAll('input[name=licenseToggle]');
let outputPlan = document.querySelector('.output-plan');
let outputCost = document.querySelector('.output-cost');
let licenseNumber = document.querySelector('.license-number');

for (let plan of licenseToggle) {
	plan.onclick = function() {
		let licensePlan = plan.value;
		let licensePrice = plan.dataset.licensePrice;
		let licenseNumberValue = licenseNumber.value;
		console.log('licensePlan: ' + licensePlan);
		console.log('licensePrice: ' + licensePrice);
		console.log('licenseNumber: ' + licenseNumber.value);
		outputPlan.textContent = licensePlan;
		outputCost.textContent = licensePrice * licenseNumberValue;
	};
}

