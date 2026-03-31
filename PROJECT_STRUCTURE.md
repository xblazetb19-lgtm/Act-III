# Act-III Project Structure

## Frontend Components
- `src/components`
  - `Header.js`
  - `Footer.js`
  - `Main.js`
  - `Sidebar.js`
  - `LoadingSpinner.js`

## Database Schema
- `database/schema.sql`
  ```sql
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
  ```

## Hooks
- `src/hooks`
  - `useAuth.js`
  - `useFetch.js`
  - `useLocalStorage.js`

## Utilities
- `src/utils`
  - `api.js`
  - `helpers.js`

## Styles
- `src/styles`
  - `App.css`
  - `Header.css`
  - `Footer.css`
  - `Main.css`
  - `Sidebar.css`

## PWA Config
- `public/manifest.json`
  ```json
  {
    "short_name": "Act-III",
    "name": "Act-III Progressive Web App",
    "icons": [
      {
        "src": "./icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "./icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "start_url": ".",
    "display": "standalone",
    "theme_color": "#ffffff",
    "background_color": "#ffffff"
  }
  ```

## Documentation
- `README.md`
  ```markdown
  # Act-III

  ## Overview
  Act-III is a progressive web app that facilitates XYZ functionality.

  ## Installation
  1. Clone the repo.
  2. Run `npm install`.
  3. Run `npm start`.

  ## Usage
  Describe how to use the application.
  ```
