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

