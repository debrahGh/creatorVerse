# creatorVerse
🚀 CreatorVerse

CreatorVerse is a full-stack web application built with React and Supabase that allows users to manage a list of their favorite content creators. Users can add, view, edit, and delete creators, with the data stored in a Supabase database. This app is styled with PicoCSS and uses React Router for navigation.


🌟 Features

View All Creators: Display a list of all content creators.
View Single Creator: Click on a creator to view their details on a separate page.
Add New Creator: Add a new content creator by providing their name, URL, and description.
Edit Creator: Update the details of an existing content creator.
Delete Creator: Remove a content creator from the list.
Responsive Design: Styled with PicoCSS for a clean and responsive user interface.
🛠️ Technology Stack

Frontend: React, Vite
Backend: Supabase
Styling: PicoCSS
Deployment: Vercel

📂 Project Structure

├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Card.jsx
│   │   └── Navbar.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── ViewCreator.jsx
│   │   ├── AddCreator.jsx
│   │   └── EditCreator.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── client.js
├── package.json
└── README.md

⚙️ Setup & Installation

Prerequisites
Node.js (v14+)
npm or yarn

Steps to Run Locally
Clone the Repository:
bash
Copy code
git clone https://github.com/your-username/creatorverse.git](https://github.com/debrahGh/creatorVerse)
cd creatorverse
Install Dependencies:
bash
Copy code
npm install
Set Up Supabase:
Create a Supabase account at supabase.com.
Create a new project and a table called creators with fields like id, name, url, description, and imageURL.
Get your Supabase Project URL and API Key.
Create a .env file in the root of your project and add your Supabase credentials:
makefile
Copy code
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
Run the App:
bash
Copy code
npm run dev
Open the App:
Visit http://localhost:3000 to view the app.
Deployment
The app can be deployed using Vercel. If you haven't already:
bash
Copy code
npm install -g vercel
vercel
Configure your environment variables in the Vercel dashboard after deploying.
🎨 Screenshot

🎥 Demo

Include a GIF or link to a demo video showcasing the application in action.
📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

