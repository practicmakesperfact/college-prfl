# Bruh College Web Portal

A modern, responsive, and bilingual front-end web portal for **Bruh College**, built with React, Vite, and Tailwind CSS. The application showcases the college's programs, admissions, leadership, and a secure student digital library.

## 🌟 Features

*   **Bilingual Localization**: Seamlessly switch between English (EN) and Amharic (አማ) without reloading the page. All content, from the navbar to the footer, is dynamically localized.
*   **Modern UI/UX**: Built with Tailwind CSS, featuring smooth micro-animations, glassmorphism overlays, and a premium color palette tailored for an educational institution.
*   **Fully Responsive**: Optimized for desktop, tablet, and mobile devices with a custom mobile navigation menu.
*   **Secure Digital Library (Mockup)**: Includes a protected resource area that requires student authentication (mock flow) before allowing access to downloadable department files.
*   **Dynamic Sections**:
    *   **Hero & Stats**: Engaging entry points highlighting college achievements.
    *   **Programs & Departments**: Detailed breakdowns of academic offerings with distinct visual iconography.
    *   **Admissions**: A step-by-step guide and an interactive, multi-step Registration Modal.
    *   **Gallery & Testimonials**: Visual grids and student success stories to build trust.
    *   **News & Events**: Latest campus updates.

## 🚀 Technologies Used

*   **Framework**: [React 18](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/practicmakesperfact/college-prfl.git
    cd college-prfl
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

*   `src/components/` - Contains all modular UI sections (Navbar, Hero, About, etc.)
*   `src/i18n.jsx` - The central translation dictionary and Context Provider handling the EN/AM localization logic.
*   `src/App.jsx` - The main entry point combining all layout components.
*   `src/index.css` - Global Tailwind directives and custom animation classes.

## 📝 License
This project is open-source and available under the MIT License.
