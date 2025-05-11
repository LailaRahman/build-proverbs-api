# Afghan Proverbs RESTful API

This project is a simple RESTful API built with Node.js and Express that allows users to
manage traditional Afghan proverbs in Dari, Pashto, and their English translations. The
data is stored in a local JSON file—no database required.

# Features

- Get all proverbs
- Get a specific proverb by ID
- Add a new proverb
- Update an existing proverb
- Delete a proverb

# Tech Stack

- Node.js
- Express
- JSON file for storage (no database)
- ES Modules (import/export)

# Project Structure

├── app.js
├── controllers/
│ └── proverbsController.js
├── models/
│ └── ProverbModel.js
├── routes/
│ └── proverbsRoutes.js
├── data/
│ └── proverbs.json
└── README.md

# How to Run the Project Locally

1. Clone the repo

```bash
 git clone https://github.com/LailaRahman/build-proverbs-api.git
 cd build-proverbs-api

2. Install dependencies
 npm install cors ejs express fs-extra nodemon

3. Run the server
 node app.js

Server will start on http://localhost:3000

# Example Requests (using curl)

Get all proverbs:
curl http://localhost:3000/proverbs

Get a proverb by ID:
curl http://localhost:3000/proverbs/1

Add a new proverb:
Endpoint: POST /proverbs
POST /proverbs
Body (JSON):
{
    "textDari": "آب که یک‌جا بماند می‌گندد.",
    "textPashto": "اوبه چې ودریږي، بوی کوي.",
    "translationEn": "Stagnant water stinks.",
    "meaning": "Lack of movement or progress leads to problems.",
    "category": "wisdom"
}

Update a proverb:
Endpoint: PUT /proverbs/1
Body (JSON):
{
   "textDari": "کارد به استخوان رسید.",
    "textPashto": "چاقو هډوکي ته ورسېد.",
    "translationEn": "The knife reached the bone.",
    "meaning": "The situation has become unbearable.",
}

Delete a proverb:
Endpoint: Delete /proverbs/19
Body (JSON):

Data Source
All proverbs are stored in a local JSON file (proverbs.json).

👤 Author
Laila Rahman
GitHub: @LailaRahman

License
This project is for educational purposes only.
```
