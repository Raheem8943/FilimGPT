# 🎬 FilimGPT

Netflix-style movie app built with React. Sign in, browse movies, and watch trailers!

## What's in here?

- **Login/Sign-up** - Firebase auth so you can create an account and sign in
- **Browse Movies** - Check out all the movies that are now playing
- **Watch Trailers** - Click play and watch YouTube trailers in a full-screen video player
- **User Profile** - See your username and log out when you're done
- **Responsive Design** - Works great on any device with Tailwind CSS

## Tech Used

- React 19
- Firebase (for auth)
- Redux (for managing state)
- React Router (for navigation)
- Tailwind CSS (for styling)
- Vite (for building)

### Development

- **ESLint** - Code linting
- **Vite** - Module bundling

## Getting Started

```bash
npm install    # install dependencies
npm run dev    # start development
npm run build  # build for production
```

## Project Structure

```
src/
├── components/  # All the React components
├── hooks/       # Custom hooks for fetching movie data
├── utils/       # Firebase config, Redux store, validation
├── App.jsx      # Main app component
└── main.jsx     # Entry point
```

## How it works

1. Sign up or log in with your email
2. Browse through movies
3. Click play to watch trailers
4. Click "More Info" for details
5. Log out when done

## What's next?

- Add search functionality
- Create a watchlist
- Add movie ratings
- More filters for browsing
