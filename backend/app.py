from flask import Flask, request, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    
    # Simulate a small network delay for realism (optional)
    time.sleep(1)

    username = data.get('username')
    password = data.get('password')

    # Hardcoded credentials for demonstration
    if username == 'admin' and password == 'password123':
        return jsonify({
            "success": True, 
            "message": "Login realizado com sucesso!",
            "token": "fake-jwt-token-123456"
        }), 200
    else:
        return jsonify({
            "success": False, 
            "message": "Credenciais inválidas"
        }), 401

if __name__ == '__main__':
    app.run(debug=True, port=5000)
