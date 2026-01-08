# SNAPIT.COM - Link Storage Solution

South Africa's #1 Link Storage Solution - Save, organize, and access your favorite links from anywhere with no browser limitations.

## Features

- **Save Links**: Store your favorite bookmarks with custom titles, URLs, descriptions, and tags
- **Organize**: Use tags to categorize and organize your links for easy retrieval
- **Search**: Quickly find links by searching through titles, URLs, descriptions, or tags
- **Edit & Delete**: Easily manage your saved links with edit and delete functionality
- **Responsive Design**: Access your links from any device with a fully responsive interface
- **Local Storage**: All your links are saved locally in your browser for privacy and quick access
- **Quick Navigation**: Use the plus button to quickly scroll back to the top and add new links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jose-IDO/my-new-react-app.git
cd my-new-react-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Deploy to GitHub Pages (runs build first)

## Usage

1. **Add a Link**: Click the "Add your link" button at the top of the page to open the form
2. **Fill in Details**: Enter the title, URL, description, and optional tags for your bookmark
3. **Save**: Click "Add bookmark" to save your link
4. **Search**: Use the search bar in the navbar to find specific links
5. **Edit**: Click the "Edit" button on any link to modify its details
6. **Delete**: Click the "Delete" button to remove a link (with confirmation)
7. **Scroll to Top**: Click the plus (+) button at the bottom right to quickly return to the top
8. **About Us**: Click the "About Us" button in the footer to learn more about the application

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **LocalStorage** - Client-side data persistence

## Project Structure

```
my-new-react-app/
├── components/
│   ├── AboutUsOverlay/     # About Us overlay component
│   ├── Authentication/      # Login/Registration components
│   ├── ButtonContainer/     # Button container component
│   ├── buttons/             # Reusable button component
│   ├── Footer/              # Footer component
│   ├── Inputs/              # Input components
│   ├── landingpagemodulecont/  # Main landing page container
│   ├── landingpagemodules/  # Landing page module components
│   ├── LinksView/           # Links display component
│   ├── Navbar/              # Navigation bar component
│   ├── overlay/             # Overlay component
│   ├── SearchBar/           # Search bar component
│   └── StatItem/            # Statistics item component
├── src/
│   ├── App.tsx              # Main app component
│   ├── types/               # TypeScript type definitions
│   └── assets/              # Static assets
└── public/                  # Public assets
```

## Deployment

The app is deployed to GitHub Pages. To deploy:

1. Build the project: `npm run build`
2. Deploy to GitHub Pages: `npm run deploy`

The app will be available at: https://Jose-IDO.github.io/my-new-react-app

## License

Copyright © 2025 SNAPIT.COM - All rights reserved

## Contact

For questions or support, please refer to the About Us section in the application footer.
