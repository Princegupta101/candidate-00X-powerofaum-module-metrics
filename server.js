import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>PowerOfAum Metrics</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
            }
            .container {
                max-width: 800px;
                margin: 40px auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            h1 {
                text-align: center;
                margin-bottom: 20px;
            }
            .metrics {
                display: grid;
                grid-template-columns: 1fr;
                gap: 15px;
            }
            .metric {
                border: 1px solid #ddd;
                padding: 15px;
                border-radius: 6px;
                background-color: #fafafa;
            }
            .metric-title {
                font-size: 14px;
                color: #666;
                margin-bottom: 5px;
            }
            .metric-value {
                font-size: 20px;
                font-weight: bold;
                color: #2c3e50;
            }
            .section-title {
                margin-top: 30px;
                font-size: 18px;
                border-bottom: 1px solid #ddd;
                padding-bottom: 5px;
            }
            .btn-refresh {
                margin-top: 20px;
                display: block;
                padding: 10px 20px;
                background-color: #007BFF;
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
                text-align: center;
            }
            .btn-refresh:hover {
                background-color: #0056b3;
            }
            footer {
                text-align: center;
                margin-top: 40px;
                font-size: 14px;
                color: #aaa;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>PowerOfAum Metrics</h1>

            <div class="section-title">Platform Commission Metrics</div>
            <div class="metrics">
                <div class="metric">
                    <div class="metric-title">Total Gross Revenue</div>
                    <div class="metric-value" id="grossRevenue">Loading...</div>
                </div>
                <div class="metric">
                    <div class="metric-title">Total Commission</div>
                    <div class="metric-value" id="totalCommission">Loading...</div>
                </div>
            </div>

            <div class="section-title">Overall Metrics</div>
            <div class="metrics">
                <div class="metric">
                    <div class="metric-title">Total Users</div>
                    <div class="metric-value" id="totalUsers">Loading...</div>
                </div>
                <div class="metric">
                    <div class="metric-title">Total Subscriptions</div>
                    <div class="metric-value" id="totalSubscriptions">Loading...</div>
                </div>
                <div class="metric">
                    <div class="metric-title">Total Add-On Sales</div>
                    <div class="metric-value" id="totalAddOnSales">Loading...</div>
                </div>
                <div class="metric">
                    <div class="metric-title">Total Pro Trials</div>
                    <div class="metric-value" id="totalProTrials">Loading...</div>
                </div>
            </div>

            <button class="btn-refresh" onclick="loadMetrics()">Refresh</button>

            <footer>Built for Alatree Ventures Tech Assessment</footer>
        </div>

        <script>
            function formatCurrency(cents) {
                return '$' + (cents / 100).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
            }

            function formatNumber(num) {
                return num.toLocaleString('en-US');
            }

            async function loadMetrics() {
                try {
                    const commissionRes = await fetch('/api/platform-commission-metrics');
                    const commission = await commissionRes.json();
                    document.getElementById('grossRevenue').textContent = formatCurrency(commission.totalGrossRevenueCents);
                    document.getElementById('totalCommission').textContent = formatCurrency(commission.totalCommissionCents);

                    const overallRes = await fetch('/api/overall-metrics');
                    const overall = await overallRes.json();
                    document.getElementById('totalUsers').textContent = formatNumber(overall.totalUsers);
                    document.getElementById('totalSubscriptions').textContent = formatNumber(overall.totalSubscriptions);
                    document.getElementById('totalAddOnSales').textContent = formatNumber(overall.totalAddOnSales);
                    document.getElementById('totalProTrials').textContent = formatNumber(overall.totalProTrials);
                } catch (err) {
                    console.error(err);
                    alert('Failed to load metrics.');
                }
            }

            loadMetrics();
        </script>
    </body>
    </html>
  `);
});

app.get('/api/platform-commission-metrics', (req, res) => {
  res.json({
    totalGrossRevenueCents: 15000000,
    totalCommissionCents: 3000000,
  });
});

app.get('/api/overall-metrics', (req, res) => {
  res.json({
    totalUsers: 1200,
    totalSubscriptions: 800,
    totalAddOnSales: 150,
    totalProTrials: 200,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});