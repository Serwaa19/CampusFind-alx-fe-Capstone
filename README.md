CampusFind – Campus Lost & Found Web Application
Project Overview

CampusFind is a frontend web application designed to help students and staff within a university campus report and recover lost items efficiently. The platform provides a centralized space where users can browse lost and found items, report new items, and view detailed information about each listing.

The project focuses on frontend development using JavaScript, HTML, and CSS, with an emphasis on usability, clean interface design, and realistic user flows.

Problem Statement

Lost items on campus are often reported through informal channels such as WhatsApp groups, notice boards, or word of mouth. These methods are unstructured, unreliable, and make it difficult for item owners to recover their belongings.

CampusFind solves this problem by providing a single, organized web platform where lost and found items can be reported, searched, and tracked easily.

Project Objectives

The main objectives of CampusFind are to:

Provide a centralized platform for lost and found items on campus

Make it easy to report lost or found items

Allow users to browse and search item listings

Improve communication and recovery of lost belongings

Demonstrate practical frontend development skills

Technologies Used

Programming Language: JavaScript

Markup: HTML (via JSX structure)

Styling: CSS

Framework: React (Vite setup)

Development Tools: VS Code, Git

Application Pages and Functionality
HomeScreen

The HomeScreen serves as the landing page of the application. It introduces users to CampusFind and provides navigation to the main features of the platform.

Main functions:

Display application overview

Provide navigation links to browse items or report items

BrowseScreen

The BrowseScreen is the core page of the application where users can view all reported lost and found items.

Main functions:

Display item listings using card layout

Allow users to browse lost and found items

Support basic search and filtering (if implemented)

ItemDetailScreen

The ItemDetailScreen displays detailed information about a selected item.

Main functions:

Show item image

Display description, location, and status

Allow users to view full item details clearly

ReportScreen

The ReportScreen allows users to submit new lost or found item reports.

Main functions:

Input item name, category, description, and location

Upload or attach item image (mocked or static)

Submit item report for listing

DashboardScreen

The DashboardScreen represents a personal view for users to track items they have reported.

Main functions:

Display user-reported items

Show item status (Lost, Found, Claimed)

Manage reported items (view or update status)

User Flow

User opens the CampusFind application

User lands on the HomeScreen

User navigates to BrowseScreen to view items

User selects an item to view details

User reports a lost or found item through ReportScreen

User tracks reported items through DashboardScreen

Project Structure
src/
│
├── pages/
│   ├── HomeScreen.jsx
│   ├── HomeScreen.css
│   ├── BrowseScreen.jsx
│   ├── BrowseScreen.css
│   ├── ItemDetailScreen.jsx
│   ├── ItemDetailScreen.css
│   ├── ReportScreen.jsx
│   ├── ReportScreen.css
│   ├── DashboardScreen.jsx
│   └── DashboardScreen.css
│
├── App.jsx
├── main.jsx
└── index.css
Installation and Setup
Prerequisites

Node.js

npm or yarn

Running the Project Locally
git clone https://github.com/your-username/campusfind.git
cd campusfind
npm install
npm run dev

The application runs locally using the Vite development server.

Project Scope and Limitations

This project focuses strictly on frontend implementation.
The following features are outside the current scope:

User authentication

Backend database

Real-time notifications

These features are considered future enhancements.

Future Enhancements

Backend integration (Firebase or REST API)

User authentication and authorization

Image storage

Admin moderation

Mobile application version

Improved search and filtering

Learning Outcomes

Through this project, the developer gained experience in:

Frontend application structure

Component-based design

CSS styling per screen

Handling user interactions

Building realistic user flows

Project Status

In Progress
Core screens and layouts have been implemented.

Author

Oti Frempong Maame Serwaa
IT Undergraduate Student

License

This project was developed for academic and learning purposes only.
