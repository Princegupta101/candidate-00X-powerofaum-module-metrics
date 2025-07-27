# PowerOfAum - Module H: Admin Metrics Dashboard

## 🎯 Tech Assessment Submission
**Candidate:** Module H Implementation  
**Company:** Alatree Ventures  
**Deadline:** July 29, 2025, 5 PM UAE Time  
**Repository Pattern:** `candidate-00X-powerofaum-module-metrics`

## 🌐 Live Demo
- **Live Staging URL:** https://candidate-00-x-powerofaum-module-me-pi.vercel.app/
- **GitHub Repository:** https://github.com/Princegupta101/candidate-00X-powerofaum-module-metrics

## 📋 Project Overview
PowerOfAum is a private SaaS engine for spiritual platforms. This module provides admin metrics dashboard functionality with two main API endpoints and an optional HTML visualization interface.

## 🚀 Features Implemented

### ✅ Required API Endpoints

#### 1. Platform Commission Metrics
- **Endpoint:** `GET /api/platform-commission-metrics`
- **Response:**
```json
{
  "totalGrossRevenueCents": 15000000,
  "totalCommissionCents": 3000000
}
```

#### 2. Overall Metrics
- **Endpoint:** `GET /api/overall-metrics`
- **Response:**
```json
{
  "totalUsers": 1200,
  "totalSubscriptions": 800,
  "totalAddOnSales": 150,
  "totalProTrials": 200
}
```

### ✅ Optional Features Added

#### 3. HTML Dashboard
- **Endpoint:** `GET /`
- **Features:**
  - Beautiful, responsive dashboard interface
  - Real-time metrics display with proper formatting
  - Currency formatting for revenue metrics
  - Number formatting for count metrics
  - Professional design with modern CSS
  - Live data refresh functionality

#### 4. Postman Collection
- Complete API testing collection included
- Pre-configured with example requests and responses
- Environment variables for easy endpoint switching
- Ready for import into Postman

## 🛠 Technology Stack

### Backend
- **Runtime:** Node.js with ES Modules
- **Framework:** Express.js
- **CORS:** Enabled for cross-origin requests
- **Architecture:** RESTful API design

### Frontend (Dashboard)
- **Technology:**  HTML/CSS/JavaScript
- **Design:** Responsive grid layout
- **Features:** Live data fetching and formatting

### Deployment
- **Platform:** Vercel
- **Configuration:** Optimized for serverless deployment
- **HTTPS:** Enabled by default

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development
1. **Clone the repository**
```bash
git clone git@github.com:Princegupta101/candidate-00X-powerofaum-module-metrics.git
cd candidate-00X-powerofaum-module-metrics
```

2. **Install dependencies**
```bash
cd Backend
npm install
```

3. **Start the server**
```bash
npm start
```

4. **Access the application**
- Dashboard: http://localhost:3000
- API Endpoints: 
  - http://localhost:3000/api/platform-commission-metrics
  - http://localhost:3000/api/overall-metrics

### Testing with Postman
1. Import the `PowerOfAum-Metrics-API.postman_collection.json` file
2. Update the `base_url` variable to your deployment URL
3. Run the collection to test all endpoints

## 🚀 Deployment

### Vercel Deployment
1. **Connect to GitHub**
   - Push your code to GitHub
   - Connect Vercel to your repository

2. **Configure Deployment**
   - Vercel will automatically detect the `vercel.json` configuration
   - The app will be deployed with serverless functions

3. **Environment Variables**
   - No additional environment variables required for this implementation
   - PORT is automatically handled by Vercel
