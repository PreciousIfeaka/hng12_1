# HNG12 Stage 1 Task API

## Overview
This project is a simple number classification API that provides insights about a given number. It determines whether the number is prime, perfect, Armstrong, even/odd, and calculates the sum of its digits. It also gives a fun fact about the number..

## Features
- Check if a number is **prime**
- Check if a number is **perfect** (i.e., a perfect square)
- Check if a number is an **Armstrong number**
- Determine if a number is **even or odd**
- Calculate the **sum of its digits**
- Gives a **fun fact** about the number.

## Installation & Setup

### Prerequisites
Ensure you have **Node.js** installed on your system.

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```
   *(Ensure you have [pnpm](https://pnpm.io/) installed, or use `npm install` instead.)*

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   NUMBERS_API_URL=<numbers_api_url>
   LIVE_URL=http://localhost:<port>
   ```
   *(Modify values as needed for production.)*

4. Start the server:
   ```sh
   pnpm start
   ```
   The server will start and listen on the specified port.

## API Endpoints
### Base URL
`http://localhost:3000` (or your deployed URL)

### 1. Root Endpoint
- **URL:** `/`
- **Method:** `GET`
- **Response:**
  ```json
  { "message": "Welcome to hng12 stage 1 task base url" }
  ```

### 2. API Info
- **URL:** `/api`
- **Method:** `GET`
- **Response:**
  ```json
  { "message": "Welcome to hng12 stage 1 task api responder" }
  ```

### 3. Number Classification
- **URL:** `/api/classify-number?number=<num>`
- **Method:** `GET`
- **Parameters:**
  - `number` (required) - The integer to analyze.
- **Response Example (Success):**
  ```json
  {
    "number": 7,
    "is_prime": true,
    "is_perfect": false,
    "digits_sum": 7,
    "properties": ["odd"],
    "fun_fact": "7 is the number of continents on Earth."
  }
  ```
- **Response Example (Error):**
  ```json
  { "number": "Not an integer", "error": true }
  ```

### Author
- **HNG12 Internship Participant**

