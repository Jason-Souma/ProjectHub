// Wait for the DOM to load before running scripts
document.addEventListener("DOMContentLoaded", function() {
  // Set up Intersection Observer for fade-in and slide-in animations
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Optionally, unobserve if you want the animation to trigger only once:
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-in, .slide-in');
  animatedElements.forEach(el => observer.observe(el));
});

// Cost Calculator Function
function calculateCost() {
  // Define hourly rates for each service (feel free to adjust these values)
  const ratePropertyTransfers = 150;
  const rateDiseasedEstate = 200;
  const ratePropertySales = 100;
  const rateShortfall = 80;

  // Retrieve hour inputs (defaulting to 0 if empty)
  const hoursPropertyTransfers = parseFloat(document.getElementById('hoursPropertyTransfers').value) || 0;
  const hoursDiseasedEstate = parseFloat(document.getElementById('hoursDiseasedEstate').value) || 0;
  const hoursPropertySales = parseFloat(document.getElementById('hoursPropertySales').value) || 0;
  const hoursShortfall = parseFloat(document.getElementById('hoursShortfall').value) || 0;

  // Calculate individual costs
  const costPropertyTransfers = hoursPropertyTransfers * ratePropertyTransfers;
  const costDiseasedEstate = hoursDiseasedEstate * rateDiseasedEstate;
  const costPropertySales = hoursPropertySales * ratePropertySales;
  const costShortfall = hoursShortfall * rateShortfall;

  // Total cost
  const totalCost = costPropertyTransfers + costDiseasedEstate + costPropertySales + costShortfall;

  // Display the result with a breakdown
  const resultDiv = document.getElementById('calculatorResult');
  resultDiv.innerHTML = `
    <h3>Total Cost: $${totalCost.toFixed(2)}</h3>
    <p>Breakdown:</p>
    <ul>
      <li>Property Transfers: $${costPropertyTransfers.toFixed(2)}</li>
      <li>Diseased Estate Transfers: $${costDiseasedEstate.toFixed(2)}</li>
      <li>Property Sales Assistance: $${costPropertySales.toFixed(2)}</li>
      <li>Shortfall Assistance: $${costShortfall.toFixed(2)}</li>
    </ul>
  `;
}
