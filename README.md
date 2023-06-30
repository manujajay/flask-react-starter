# Python Flask and React Application
This project is a simple demonstration of integrating a Python Flask backend with a React frontend.

## Backend Setup (Python Flask)
Create a new Python project and install the necessary dependencies: Flask and Flask-CORS.

```bash
pip install flask flask_cors
```

Create a new Python file named app.py at the root of your project. This file will contain the Flask backend code.

```python
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(port=8080)

```

This is a basic Flask application that exposes a single endpoint at /api/hello and returns a JSON response with a greeting message.

Run the Flask server by executing the app.py file.

```bash
python app.py
```


The Flask server will start and listen on http://localhost:8080.

## Frontend Setup (React)
Create a new React application using Create React App or your preferred method.

```bash
npx create-react-app my-app
```

Replace the contents of src/App.js with the following code:

```javascript
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setGreeting(data.message);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{greeting}</h1>
      </header>
    </div>
  );
}

export default App;
```


This React component fetches the greeting message from the Flask backend and displays it on the page.

Run the React application by executing the following command inside the project folder:

```bash
npm start
```

The React development server will start and listen on http://localhost:3000.

Open your web browser and navigate to http://localhost:3000. You should see the greeting message from the Flask backend displayed on the page.

