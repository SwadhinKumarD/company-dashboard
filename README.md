# company-dashboard
Description
This project is a simple, interactive dashboard that displays a list of companies and visualizes their data through a line chart. Built with HTML, CSS, and JavaScript (with Chart.js and Bootstrap), it fetches data from a CSV file, and users can click on any company name to view relevant data plotted in a chart.

Table of Contents

Features
Technologies Used
Getting Started
Installation
Usage
File Structure
Credits
License

Features

Interactive Chart: Displays data for the selected company using Chart.js.
Responsive Design: Sidebar and main content area adjust for different screen sizes.
Colorful UI: Styled with Bootstrap and custom CSS for an engaging user experience.

Technologies Used

HTML/CSS: Structure and styling.
JavaScript: Frontend logic for handling user interaction and data visualization.
Chart.js: JavaScript library for rendering charts.
Bootstrap: CSS framework for responsive design.

Getting Started

To run this project locally, you’ll need to set up a local server.
Prerequisites
Python (for running a local server) or Visual Studio Code with the Live Server extension.

Installation

Clone the Repository:
git clone https://github.com/your-username/your-repository-name.git
Navigate to the Project Directory:
cd your-repository-name

Usage

Running Locally
Start a Local Server:
Using Python:
python3 -m http.server 8000
Using Visual Studio Code:
Open the project in VS Code.
Install the Live Server extension.
Right-click on index.html and select Open with Live Server.
Open the Project in Your Browser:

Go to http://localhost:8000 in your browser.
Interacting with the Dashboard:
Click on a company name in the sidebar to see its data plotted on the chart.

File Structure

Here’s a breakdown of the main files in the project:
project-directory/
├── index.html       # Main HTML file
├── style.css        # Custom CSS for styling
├── script.js        # JavaScript for handling interaction and data visualization
└── dump.csv         # Sample data file
index.html: Defines the structure of the webpage.
style.css: Contains custom styles for a colorful theme.
script.js: Handles data loading, filtering, and chart rendering.
dump.csv: CSV file with sample company data for testing.

Credits

Bootstrap for CSS framework.
Chart.js for charting.
Inspiration and guidance from project requirements.

License

This project is licensed under the MIT License. See the LICENSE file for details.

