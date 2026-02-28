CampusFind – Campus Lost & Found Web Application
Project Overview
# CampusFind – Campus Lost & Found Web Application

## Project Overview

CampusFind is a frontend web application designed to help students and staff within a university campus report and recover lost items efficiently. The platform provides a centralized space where users can browse lost and found items, report new items, and view detailed information about each listing.

The project focuses on frontend development using JavaScript, HTML, and CSS, with an emphasis on usability, clean interface design, and realistic user flows.

Problem Statement
---

## Problem Statement

Lost items on campus are often reported through informal channels such as WhatsApp groups, notice boards, or word of mouth. These methods are unstructured, unreliable, and make it difficult for item owners to recover their belongings.

CampusFind solves this problem by providing a single, organized web platform where lost and found items can be reported, searched, and tracked easily.

Project Objectives

The main objectives of CampusFind are to:

Provide a centralized platform for lost and found items on campus

Make it easy to report lost or found items
---

Allow users to browse and search item listings
## Project Objectives

Improve communication and recovery of lost belongings

Demonstrate practical frontend development skills
The main objectives of CampusFind are to:

Technologies Used
* Provide a centralized platform for lost and found items on campus
* Make it easy to report lost or found items
* Allow users to browse and search item listings
* Improve communication and recovery of lost belongings
* Demonstrate practical frontend development skills

Programming Language: JavaScript
---

Markup: HTML (via JSX structure)
## Technologies Used

Styling: CSS
* Programming Language: JavaScript
* Markup: HTML (via JSX structure)
* Styling: CSS
* Framework: React (Vite setup)
* Development Tools: VS Code, Git

Framework: React (Vite setup)
---

Development Tools: VS Code, Git
## Application Pages and Functionality

Application Pages and Functionality
HomeScreen
### HomeScreen

The HomeScreen serves as the landing page of the application. It introduces users to CampusFind and provides navigation to the main features of the platform.

Main functions:

Display application overview
* Display application overview
* Provide navigation links to browse items or report items

Provide navigation links to browse items or report items
---

BrowseScreen
### BrowseScreen

The BrowseScreen is the core page of the application where users can view all reported lost and found items.

Main functions:

Display item listings using card layout
* Display item listings using card layout
* Allow users to browse lost and found items
* Support basic search and filtering (if implemented)

Allow users to browse lost and found items
---

Support basic search and filtering (if implemented)

ItemDetailScreen
### ItemDetailScreen

The ItemDetailScreen displays detailed information about a selected item.

Main functions:

Show item image

Display description, location, and status
* Show item image
* Display description, location, and status
* Allow users to view full item details clearly

Allow users to view full item details clearly
---

ReportScreen
### ReportScreen

The ReportScreen allows users to submit new lost or found item reports.

Main functions:

Input item name, category, description, and location
* Input item name, category, description, and location
* Upload or attach item image (mocked or static)
* Submit item report for listing

Upload or attach item image (mocked or static)
---

Submit item report for listing

DashboardScreen
### DashboardScreen

The DashboardScreen represents a personal view for users to track items they have reported.

Main functions:

Display user-reported items

Show item status (Lost, Found, Claimed)

Manage reported items (view or update status)

User Flow

User opens the CampusFind application
* Display user-reported items
* Show item status (Lost, Found, Claimed)
* Manage reported items (view or update status)

User lands on the HomeScreen
---

User navigates to BrowseScreen to view items
## User Flow

User selects an item to view details
1. User opens the CampusFind application
2. User lands on the HomeScreen
3. User navigates to BrowseScreen to view items
4. User selects an item to view details
5. User reports a lost or found item through ReportScreen
6. User tracks reported items through DashboardScreen

User reports a lost or found item through ReportScreen
---

User tracks reported items through DashboardScreen
## Project Structure

Project Structure
```text
src/
│
├── pages/
@@ -128,72 +130,80 @@ src/
├── App.jsx
├── main.jsx
└── index.css
Installation and Setup
Prerequisites
```

Node.js
---

npm or yarn
## Installation and Setup

Running the Project Locally
### Prerequisites

* Node.js
* npm or yarn

### Running the Project Locally

```bash
git clone https://github.com/your-username/campusfind.git
cd campusfind
npm install
npm run dev
```

The application runs locally using the Vite development server.

Project Scope and Limitations
---

## Project Scope and Limitations

This project focuses strictly on frontend implementation.
The following features are outside the current scope:

User authentication

Backend database

Real-time notifications
* User authentication
* Backend database
* Real-time notifications

These features are considered future enhancements.

Future Enhancements

Backend integration (Firebase or REST API)
---

User authentication and authorization
## Future Enhancements

Image storage
* Backend integration (Firebase or REST API)
* User authentication and authorization
* Image storage
* Admin moderation
* Mobile application version
* Improved search and filtering

Admin moderation
---

Mobile application version

Improved search and filtering

Learning Outcomes
## Learning Outcomes

Through this project, the developer gained experience in:

Frontend application structure

Component-based design

CSS styling per screen
* Frontend application structure
* Component-based design
* CSS styling per screen
* Handling user interactions
* Building realistic user flows

Handling user interactions
---

Building realistic user flows

Project Status
## Project Status

In Progress
Core screens and layouts have been implemented.

Author
---

## Author

Oti Frempong Maame Serwaa
IT Undergraduate Student

License
---

## License

This project was developed for academic and learning purposes only.
