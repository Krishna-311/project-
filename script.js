function drawChart() {
    // Get user input values and convert to numbers
    const bills = parseFloat(document.getElementById("bills").value) || 0;
    const transport = parseFloat(document.getElementById("transport").value) || 0;
    const food = parseFloat(document.getElementById("food").value) || 0;
    const care = parseFloat(document.getElementById("care").value) || 0;
    const fun = parseFloat(document.getElementById("fun").value) || 0;
    const savings = parseFloat(document.getElementById("savings").value) || 0;

    // Get Chart Canvas
    const canvas = document.getElementById("myChart");
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    const ctx = canvas.getContext("2d");

    // Destroy previous chart instance if it exists
    if (window.myPieChart) {
        window.myPieChart.destroy();
    }

    // Set fixed size for the chart
    canvas.width = 300;
    canvas.height = 300;

    // Draw Pie Chart
    window.myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Bills", "Transport", "Food", "Personal Care", "Fun", "Savings"],
            datasets: [{
                data: [bills, transport, food, care, fun, savings],
                backgroundColor: ["#FF5733", "#33FF57", "#5733FF", "#F4C724", "#24F4E2", "#F424E4"]
            }]
        },
        options: {
            responsive: false,  // Disable auto-resizing
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true, // Show labels
                    position: 'bottom'
                }
            }
        }
    });
}

