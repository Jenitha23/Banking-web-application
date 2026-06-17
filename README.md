# Banking Web Application

A full-stack online banking web application developed as a student software engineering project. The system provides secure user authentication, customer account management, deposit request handling with slip upload, staff verification, transaction tracking, and admin dashboard features.

The application is designed using a role-based structure with three main user roles:

- Customer
- Staff
- Admin

## Project Overview

The Banking Web Application allows customers to register, log in, view account details, submit deposit requests with payment slip evidence, track deposit request status, and view transaction history.

Staff users can review submitted deposit requests, approve or reject them, and add remarks. Account balances are updated only after staff approval, and every approved deposit automatically creates a transaction record.

Admins can monitor the overall system through dashboard statistics and manage users.

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- JavaScript

### Backend

- ASP.NET Core Web API
- C#
- Entity Framework Core
- REST APIs
- Controller-Service-Repository architecture

### Database

- Microsoft SQL Server

### Authentication and Security

- JWT Authentication
- BCrypt password hashing
- Role-Based Access Control
- Protected API endpoints

### Development Tools

- Git and GitHub
- Visual Studio / Visual Studio Code
- SQL Server Management Studio
- Swagger
- Postman

## Folder Structure

```text
BANKING-WEB-APPLICATION/
├── backend/
│   └── BankingAPI/
│       ├── Controllers/
│       ├── Data/
│       ├── DTOs/
│       ├── Models/
│       ├── Services/
│       ├── Repositories/
│       ├── Utilities/
│       ├── Middleware/
│       ├── wwwroot/
│       │   └── uploads/
│       │       └── deposits/
│       ├── Program.cs
│       ├── appsettings.json
│       └── BankingAPI.csproj
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── customer/
│   │   │   ├── staff/
│   │   │   └── admin/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── README.md
├── .gitignore
└── backend_architecture_design.md
```

## Functional Features

### Public Features

- Landing page
- Customer registration
- User login
- Role-based redirection after login

### Customer Features

- Register and log in securely
- View customer dashboard
- View account number and account balance
- View account details
- Submit deposit request
- Upload deposit slip or receipt
- View deposit request history
- Track deposit status:
  - Pending
  - Approved
  - Rejected
- View transaction history
- View user profile
- Logout

### Staff Features

- Staff login
- Staff dashboard
- View pending deposit requests
- Review uploaded deposit slips
- Approve deposit requests
- Reject deposit requests
- Add review remarks
- Prevent duplicate approval or rejection
- Trigger account balance update after approval
- Trigger transaction creation after approval

### Admin Features

- Admin login
- Admin dashboard
- View total users
- View total customers
- View total staff
- View total accounts
- View pending deposits
- View approved deposits
- View rejected deposits
- View total transactions
- Manage users
- Activate or deactivate users

## Main Business Workflow

The main workflow of the system is the deposit verification process.

1. Customer logs in to the system.
2. Customer submits a deposit request with amount and slip upload.
3. Deposit request is saved with `Pending` status.
4. Staff reviews the uploaded deposit slip.
5. Staff approves or rejects the request.
6. If approved:
   - Deposit request status becomes `Approved`.
   - Customer account balance is increased.
   - A transaction record is created.
7. If rejected:
   - Deposit request status becomes `Rejected`.
   - Account balance is not changed.
   - Remarks are saved for the customer to view.

## Backend Modules

### Authentication Module

Handles user registration, login, password hashing, JWT token generation, and role-based access.

### Account Module

Handles customer account details, account number, balance, and account status.

### Deposit Module

Handles deposit request submission, slip upload, pending status, and customer deposit history.

### Staff Review Module

Handles staff approval and rejection of deposit requests.

### Transaction Module

Handles transaction creation and transaction history display.

### Admin Module

Handles dashboard statistics and user management.

## Database Entities

The main database entities are:

- Role
- User
- Account
- DepositRequest
- Transaction

## API Overview

### Authentication APIs

```text
POST /api/auth/register
POST /api/auth/login
GET /api/users/me
```

### Account APIs

```text
GET /api/accounts/my-account
GET /api/accounts/{id}
GET /api/accounts
```

### Deposit APIs

```text
POST /api/deposits
GET /api/deposits/mine
GET /api/deposits/{id}
GET /api/deposits/pending
PUT /api/deposits/{id}/review
```

### Transaction APIs

```text
GET /api/transactions/my
GET /api/transactions/all
```

### Admin APIs

```text
GET /api/admin/dashboard
GET /api/users
PUT /api/users/{id}/status
```

## How to Run the Project

### Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Run Backend

```bash
cd backend/BankingAPI
dotnet restore
dotnet run
```

Backend Swagger will be available at the URL shown in the terminal, usually:

```text
https://localhost:7xxx/swagger
```

## Database Setup

This project uses Microsoft SQL Server with Entity Framework Core migrations.

The backend is planned to automatically apply migrations when the project runs using:

```csharp
dbContext.Database.Migrate();
```

This means the database schema can be created or updated automatically based on available EF Core migrations.

## Development Plan

1. Set up backend environment and SQL Server connection.
2. Create database models and EF Core migrations.
3. Implement authentication and JWT authorization.
4. Implement account management.
5. Implement deposit request workflow.
6. Implement staff approval and rejection workflow.
7. Implement transaction history.
8. Implement admin dashboard.
9. Connect React frontend with backend APIs.
10. Test and polish the full application.

## Future Improvements

- Fund transfer feature
- Withdrawal request workflow
- Email or SMS notifications
- Audit logs
- PDF statement generation
- Dashboard charts
- Search, filtering, and pagination
- Deployment using Docker
- Cloud database hosting

## Project Status

The project currently contains the separated frontend and backend folders. The frontend structure is prepared, and the backend will be implemented using ASP.NET Core Web API with SQL Server and EF Core.
