# Foodie API

A modern React app to explore global cuisines by fetching meals from TheMealDB API based on country/area input. Built with Vite, styled with Tailwind CSS (v4), and featuring a glassmorphism design. Deployed on GitHub Pages.

## Features
- Search meals by cuisine area (e.g., "Italian", "French").
- Responsive, futuristic UI with glass effects and neon glows.
- Fetches data from [TheMealDB API](https://www.themealdb.com/api.php).
- Lightweight and fast, powered by Vite for development and builds.

## Prerequisites
- [Node.js](https://nodejs.org/) (v22.12.0 or higher recommended).
- [Git](https://git-scm.com/) for cloning and version control.
- A GitHub account for deployment.

## Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/alamin72b/Foodie-API.git
   cd Foodie-API
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Locally**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

## Usage
- Enter a cuisine area (e.g., "Italian") in the search bar and click "DISCOVER" or press Enter.
- Browse meal cards with images and IDs fetched from TheMealDB API.
- Responsive layout adapts to mobile, tablet, and desktop screens.

## Deployment
Deploy to GitHub Pages with the following steps:

1. **Install `gh-pages`** (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Verify Configuration**:
   - Ensure `vite.config.js` has `base: '/Foodie-API/'` (matching your repo name).
   - Ensure `package.json` has:
     ```json
     "homepage": "https://alamin72b.github.io/Foodie-API",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
     ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**:
   - Go to your repo > Settings > Pages.
   - Set Source to `gh-pages` branch, `/ (root)` directory.
   - Visit `https://alamin72b.github.io/Foodie-API/` after deployment.

## Project Structure
```
Foodie-API/
├── src/
│   ├── App.jsx           # Main component with search and meal display
│   ├── index.css        # Tailwind CSS and custom glassmorphism styles
│   ├── main.jsx         # Entry point
├── vite.config.js       # Vite config with base path and plugins
├── package.json         # Dependencies and scripts
├── README.md            # This file
```

## Technologies
- **React**: Frontend framework for dynamic UI.
- **Vite**: Fast build tool and dev server.
- **Tailwind CSS (v4)**: Utility-first CSS framework with Vite plugin.
- **TheMealDB API**: Public API for meal data.
- **GitHub Pages**: Hosting for static site.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License
MIT License. See [LICENSE](LICENSE) for details.
