const ctx = document.getElementById('budgetChart').getContext('2d');
const budgetChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Field Trips', 'Events', 'Spirit Week', 'Saving'],
    datasets:[{
      data:[30, 25, 15, 30 ],
      backgroundColor: ['rgb(255,99,132)', 'rgb(54, 162, 235)', 'rgb(166, 235, 54)', 'rgb(235, 136, 54)'],
      borderWidth: 5
    }]
  },
  options: {
    responsive: false
  }
});