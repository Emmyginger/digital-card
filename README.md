
React Digital Business Card 🚀
A sleek, modern, and customizable digital business card built with React. This project features a clean user interface, a theme toggle for light and dark modes, and dynamic background images for each theme.



✨ Features
Modern UI: Clean and professional design inspired by modern trends.

Light & Dark Mode: Easily switch between light and dark themes with a dedicated toggle button.

Dynamic Backgrounds: Each theme features a unique, customizable background image.

Responsive Design: Looks great on all screen sizes, from mobile phones to desktops.

Component-Based: Built with React for a modular and maintainable codebase.

Easy Customization: Theming is handled with CSS variables, making it simple to change colors, fonts, and images.

📸 Screenshots
Light Mode	Dark Mode
(Hint: Replace the placeholder URLs above with links to your actual screenshots.)	

Export to Sheets
🛠️ Tech Stack
Frontend: React.js

Styling: Plain CSS with Custom Properties (Variables)

Deployment: Can be deployed on any static site hosting service like Netlify, Vercel, or GitHub Pages.

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Make sure you have Node.js and npm (or yarn) installed on your machine.

Node.js (which includes npm)

Installation
Clone the repository:

Bash

git clone https://github.com/your-username/react-digital-business-card.git
Navigate to the project directory:

Bash

cd react-digital-business-card
Install dependencies:

Bash

npm install
or if you use yarn:

Bash

yarn install
Run the development server:

Bash

npm start
This will run the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

🎨 Customization
It's easy to customize this card with your own information, images, and styles.

Update Personal Information:

Open src/components/BusinessCard.js.

Modify the text content (name, title, website, about, interests) and links directly in the JSX.

Change Images:

Profile Picture: Replace the laura-smith.png file in the src/assets/ directory with your own picture. Ensure the filename matches or update the import statement in BusinessCard.js.

Background Images: Replace light-bg.jpg and dark-bg.jpg in src/assets/ with your desired background images.

Modify Colors and Fonts:

Open src/components/BusinessCard.css.

All theme colors are defined as CSS variables inside the :root selector.

CSS

:root {
  /* Light Mode Colors & Background Image */
  --light-bg-color: #e9ecef;
  --light-card-bg: #ffffff;
  /* ...and so on */
}
You can change these variable values to easily re-theme the entire application.

📁 Project Structure
react-digital-business-card/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── profile.png         # Profile Picture
│   ├── components/
│   │   ├── BusinessCard.js     # Main component JSX and logic
│   │   └── BusinessCard.css    # Styles for the component
│   ├── App.js                  # Main app component
│   └── index.js                # Entry point
├── package.json
└── README.md