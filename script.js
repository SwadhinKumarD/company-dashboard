// script.js

// Load CSV file and parse it
fetch('dump.csv')
    .then(response => response.text())
    .then(text => {
        const rows = text.split('\n').slice(1); // Remove header
        const data = rows.map(row => {
            const [company, date, value] = row.split(',');
            return { company, date, value: parseFloat(value) };
        });

        // Get unique companies and populate the list
        const companies = [...new Set(data.map(item => item.company))];
        const companyList = document.getElementById('company-list');
        companies.forEach(company => {
            const li = document.createElement('li');
            li.textContent = company;
            li.classList.add('list-group-item');
            li.onclick = () => loadCompanyData(company, data);
            companyList.appendChild(li);
        });
    });

// Chart instance
let companyChart = null;

// Load and display data for a selected company
function loadCompanyData(company, data) {
    const filteredData = data.filter(item => item.company === company);
    const labels = filteredData.map(item => item.date);
    const values = filteredData.map(item => item.value);

    // Update or create chart
    if (companyChart) {
        companyChart.destroy();
    }

    const ctx = document.getElementById('companyChart').getContext('2d');
    companyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `Data for ${company}`,
                data: values,
                backgroundColor: 'rgba(255, 193, 7, 0.2)',
                borderColor: 'rgba(255, 193, 7, 1)',
                borderWidth: 2,
                pointBackgroundColor: '#ffc107',
                pointBorderColor: '#343a40'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#dee2e6'
                    }
                },
                x: {
                    grid: {
                        color: '#dee2e6'
                    }
                }
            }
        }
    });
}
