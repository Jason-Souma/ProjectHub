/* script.js */

document.addEventListener("DOMContentLoaded", function() { // Smooth scrolling for navigation links document.querySelectorAll("nav ul li a").forEach(anchor => { anchor.addEventListener("click", function(event) { event.preventDefault(); const targetId = this.getAttribute("href").substring(1); document.getElementById(targetId).scrollIntoView({ behavior: "smooth" }); }); });

// Cost calculator functionality
document.querySelector("button[onclick='calculateCost()']").addEventListener("click", function() {
    const serviceRates = {
        transfer: 500,
        estate: 600,
        sales: 550,
        shortfall: 450
    };
    
    let selectedService = document.getElementById("service").value;
    let hours = parseInt(document.getElementById("hours").value) || 0;
    let totalCost = serviceRates[selectedService] * hours;
    
    document.getElementById("total-cost").textContent = `R${totalCost}`;
});

});

function calculateTransferCosts() {
    const purchasePrice = parseFloat(document.getElementById('purchase-price').value);
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const propertyType = document.getElementById('property-type').value;
    const sellerVAT = document.getElementById('seller-vat').value;
    const purchaserStatus = document.getElementById('purchaser-status').value;

    // Placeholder calculations
    const bondCost = loanAmount * 0.01; // Example: 1% of loan amount
    const transferCost = purchasePrice * 0.02; // Example: 2% of purchase price

    const totalCost = bondCost + transferCost;

    document.getElementById('bond-cost').textContent = bondCost.toFixed(2);
    document.getElementById('transfer-cost').textContent = transferCost.toFixed(2);
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);

    document.getElementById('results').style.display = 'block';
}

