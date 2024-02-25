<script>

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('snpChart').getContext('2d');

    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(0, 255, 0, 0.7)');
    gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

    const dates = snp_data.map(item => item.Date);
    const closePrices = snp_data.map(item => item.Close);

    const snpChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'S&P 500 Close Prices',
                data: closePrices,
                borderColor: 'green',
                borderWidth: 2,
                fill: 'start',
                backgroundColor: gradient,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    min: 4900
                }
            }
        }
    });
});

</script>
