# 🎬 Movie Database App

A responsive **Movie Database Web Application** built with **React, Vite, Tailwind CSS, and the OMDb API**.  
This app allows users to search for movies, view detailed information (plot, cast, ratings, etc.), and manage a list of their favorite movies.  

Deployed on **Vercel**: [Live Demo](https://your-vercel-app-url.vercel.app)  

---

## 🚀 Features

### 🔍 Search Movies
- Search by title using the **OMDb API**.  
- Displays **movie poster, title, and release year**.  
- Includes **pagination with numbered pages + active state**.  
- Shows a **loading spinner** while fetching results.  

### 📄 Movie Details
- View **plot summary, cast, genre, runtime, and ratings**.  
- Add/Remove movies from **Favorites** directly from the details page.  

### ⭐ Favorites
- Save favorite movies with one click.  
- Stored in **localStorage**, so favorites persist across sessions.  
- Remove from favorites with a single click.  
- Favorites list updates automatically across all pages.  

### 🎨 UI & UX
- Styled with **Tailwind CSS**.  
- Dark cinematic theme.  
- Responsive design (works on desktop and mobile).  

---

## 🛠️ Tech Stack

- **React (Vite)** → Frontend framework  
- **Tailwind CSS** → Styling & responsiveness  
- **OMDb API** → Movie data provider  
- **LocalStorage** → Persistent favorites  
- **Vercel** → Hosting and deployment  

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movie-database.git
   cd movie-database
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add API Key**
   - Get a free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).  
   - Create a `.env` file in the project root:
     ```env
     VITE_APP_MOVIE_API_KEY=your_api_key_here
     ```

4. **Run locally**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
movie-database/
│── src/
│   ├── components/     # Reusable components (Navbar, MovieCard, Spinner, etc.)
│   ├── pages/          # Page components (Home, MovieDetails, Favorites)
│   ├── services/       # API calls (movieService.js)
│   ├── utils/          # Utility functions (favorites.js)
│   ├── App.jsx         # Routes & app entry
│   └── main.jsx        # React DOM render
│── public/             # Static assets
│── .env                # Environment variables (not committed)
│── package.json        # Project config
│── tailwind.config.js  # Tailwind settings
└── vite.config.js      # Vite settings
```

---

## 🔑 Environment Variables

| Variable                   | Description                     | Example       |
|----------------------------|---------------------------------|---------------|
| `VITE_APP_MOVIE_API_KEY`   | OMDb API key                   | `8e9e1f29`    |

---

## 🌐 Deployment

This app is deployed on **Vercel**.

Steps to deploy:
1. Push code to GitHub.  
2. Import the repo into [Vercel](https://vercel.com).  
3. Configure build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Add environment variable in Vercel:
   ```
   VITE_APP_MOVIE_API_KEY=your_api_key_here
   ```
5. Deploy 🎉  

---

## 🧩 Future Improvements
- Add **dark/light mode toggle**.  
- Implement **filtering by genre/year**.  
- Add **infinite scroll or advanced pagination**.  
- Include **trailers (YouTube integration)**.  
- Add **multi-language support (i18n)**.  

---

## 👨‍💻 Author

**Your Name**  
Frontend Developer | [GitHub](https://github.com/your-username) | [LinkedIn](https://linkedin.com/in/your-profile)  
