# PrecisionApply 🔍

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/GSB1920/precision-apply)

> From overlooked to interviewed. PrecisionApply engineers your resume to pass the ATS and impress the hiring manager.

**Live Demo: [https://precision-apply.vercel.app](https://precision-apply.vercel.app)** 

![PrecisionApply Screenshot](./assets/app-screenshot.png) *(Will add a screenshot Soon)*

## ✨ Why PrecisionApply?

The average job posting receives 250+ applications. Over 75% are rejected by ATS systems before a human ever sees them. PrecisionApply solves this by:

*   **🔍 ATS Score Simulator**: Get a real-time score based on keyword matching between your resume and any job description.
*   **📊 Keyword Gap Analysis**: Discover crucial keywords missing from your resume.
*   **🤖 AI-Powered Suggestions**: Get actionable, contextual advice from OpenAI on how to improve your resume.
*   **✨ Spell & Grammar Check**: Ensure your resume is error-free.

## 🛠️ Tech Stack

*   **Frontend**: React, Tailwind CSS, Vite
*   **Backend**: Node.js, Express.js
*   **AI**: OpenAI API
*   **Deployment**: Vercel (Frontend), Railway (Backend)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- An [OpenAI API](https://platform.openai.com/api-keys) key

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/GSB1920/precision-apply.git
    cd precision-apply
    ```

2.  **Set up the Backend**
    ```bash
    cd server
    npm install
    # Create a .env file and add your OpenAI API key
    echo "OPENAI_API_KEY=your_key_here" > .env
    ```

3.  **Set up the Frontend**
    ```bash
    cd ../client
    npm install
    ```

4.  **Run the Development Servers**
    ```bash
    # Run the backend (from /server directory)
    npm run dev

    # Run the frontend (from /client directory, in a new terminal)
    npm run dev
    ```

## 📋 Development Roadmap

- [x] Project Ideation & Tech Stack Selection
- [ ] MVP (Core Analysis Engine)
- [ ] AI Integration & UI
- [ ] Deployment & Live Demo
- [ ] Advanced Features (PDF Parsing, User Accounts)

View the detailed project board and progress [here](https://github.com/GSB1920/precision-apply/projects/1).

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 📧 Contact

GSB1920 - https://x.com/TheObservsing1 - gauravbais2001@gmail.com

Project Link: [https://github.com/GSB1920/precision-apply](https://github.com/GSB1920/precision-apply)
