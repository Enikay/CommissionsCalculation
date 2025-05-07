function formatNumber(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function updateFigures() {
	const orders = Math.round(document.getElementById('orders').value / 5) * 5;
	const commission = parseInt(document.getElementById('commission').value);

	document.getElementById('orders').value = orders;
	document.getElementById('ordersLabel').innerText = `${orders}/mois`;
	document.getElementById('commissionLabel').innerText = `${commission}%`;

	const annualOrders = orders * 12;
	const cost = Math.round(annualOrders * 30 * (commission / 100));
	const savings = Math.round(cost - (annualOrders * 1.5));

	document.getElementById('costOutput').innerText = `${formatNumber(cost)} € de commissions par an${cost?'...':''}`;
	document.getElementById('costOutput').style.color = cost ? 'red' : 'white';
	document.getElementById('savingsOutput').innerText = `${formatNumber(savings)} € d'économies potentielles par an${savings?' !':''}`;
	document.getElementById('savingsOutput').style.color = savings ? 'green' : 'white';
}

updateFigures();