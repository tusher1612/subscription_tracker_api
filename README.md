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
bash
Copy
Edit
git clone https://github.com/yourusername/subscription_tracker_api.git
cd subscription_tracker_api
npm install
⚙️ Environment Variables
Create a .env file in the root folder and set the following variables:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
UPSTASH_QSTASH_URL=your_upstash_workflow_url
UPSTASH_QSTASH_TOKEN=your_upstash_workflow_token
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
🏃 Run the Server
bash
Copy
Edit
npm start
The API will be available at:
📍 http://localhost:5000/

🔐 Authentication
If you choose to secure your endpoints, attach an Authorization header with each request:

makefile
Copy
Edit
Authorization: Bearer <your-jwt-token>
You can implement your own authentication middleware or use existing libraries such as passport or jsonwebtoken.

📨 Reminder Workflow
This project integrates with Upstash Workflow to handle scheduled jobs for sending reminders at 7, 5, 2, and 1 days before the renewal date.
You’ll need a valid Upstash Workflow account and token.
The workflow is defined in workflows/sendReminders.js.

🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request.

📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

👨‍💻 Author
Made with ❤️ by Your Name

📁 .env.example
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
UPSTASH_QSTASH_URL=https://qstash.upstash.io/v1/publish
UPSTASH_QSTASH_TOKEN=your_upstash_token_here
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=username
SMTP_PASS=password
vbnet
Copy
Edit

You can now copy the entire block above ☝️ and save it directly as a `README.md` file in your repo.  

If you tell me:
✅ Your GitHub username  
✅ The license you want (MIT / GPL / Apache-2.0)  
✅ Your actual name or alias  

…I can replace the placeholders automatically for you too. Let me know if you’d like that! 🚀