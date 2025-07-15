# subscription_tracker_api
# 📦 Subscription Tracker API

The **Subscription Tracker API** is a RESTful backend service for managing and tracking user subscriptions, sending timely renewal reminders, and notifying users before their subscriptions expire.

Built with **Node.js**, **Express.js**, and **MongoDB**, it is designed to be simple, extensible, and production-ready.

---

## 🌟 Features

- ✅ CRUD operations for subscriptions
- ✅ Automatic calculation of renewal dates
- ✅ Sends reminder notifications (1, 2, 5, and 7 days before renewal)
- ✅ RESTful API design
- ✅ JWT-based authentication ready (optional)
- ✅ Upstash Workflow integration for scheduling reminders

---

## 🔗 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [Day.js](https://day.js.org/) for date calculations
- [Upstash Workflow](https://upstash.com/workflows) for scheduled jobs

---

## 📜 API Endpoints

| Method   | Endpoint                       | Description                    |
|----------|-------------------------------|--------------------------------|
| `POST`   | `/api/v1/subscriptions`       | Create a new subscription     |
| `GET`    | `/api/v1/subscriptions`       | Get all subscriptions         |
| `GET`    | `/api/v1/subscriptions/:id`   | Get a specific subscription   |
| `PUT`    | `/api/v1/subscriptions/:id`   | Update a subscription         |
| `DELETE` | `/api/v1/subscriptions/:id`   | Delete a subscription         |
| `POST`   | `/api/v1/reminders`           | Trigger reminders manually    |

---

## 🧪 Sample Subscription Object

```json
{
  "name": "News Daily",
  "price": 1.00,
  "currency": "BDT",
  "frequency": "Daily",
  "category": "News",
  "paymentMethod": "Mobile Wallet",
  "status": "active",
  "startDate": "2025-07-15T00:00:00.000Z",
  "renewalDate": "2025-07-16T00:00:00.000Z"
}


🚀 Getting Started
📥 Clone & Install

git clone https://github.com/yourusername/subscription_tracker_api.git
cd subscription_tracker_api
npm install

⚙️ Environment Variables
Create a .env file in the root folder and set the following variables

PORT=5000
MONGO_URI=your_mongodb_connection_string
UPSTASH_QSTASH_URL=your_upstash_workflow_url
UPSTASH_QSTASH_TOKEN=your_upstash_workflow_token
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

🏃 Run the Server
npm start









