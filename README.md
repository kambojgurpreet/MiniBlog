# MiniBlog

A simple CRUD (Create, Read, Update, Delete) blog application built with vanilla JavaScript and [json-server](https://github.com/typicode/json-server) for a mock REST API.

## Features
- Add, view, and display blog posts
- Uses ES6/ES7 JavaScript (no frameworks)
- Styled with [Bulma CSS](https://bulma.io/) and FontAwesome icons
- Mock backend using `json-server` and `db.json`

## Project Structure
```
MiniBlog/
├── app.js         # Main frontend logic (fetch, post, display)
├── http.js        # HTTP utility class for API requests
├── ui.js          # UI class for rendering posts and alerts
├── db.json        # Mock database for json-server
├── index.html     # Main HTML file
├── package.json   # Project metadata and dependencies
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed

### Install Dependencies
```
npm install
```

### Start the Mock API Server
```
npx json-server --watch db.json --port 3000
```

### Open the App
Just open `index.html` in your browser. The app will connect to the mock API at `http://localhost:3000/posts`.

## Usage
- Add a post using the form.
- Posts are displayed below the form.
- Alerts show for success or input errors.

## Author
Gurpreet Kamboj

## License
ISC
