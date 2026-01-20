# SNAPIT.COM - Link Storage Solution

South Africa's #1 Link Storage Solution - Save, organize, and access your favorite links from anywhere with no browser limitations.

## Features

- **Save Links**: Store your favorite bookmarks with custom titles, URLs, descriptions, and tags
- **Form Validation**: Real-time validation ensures data integrity with helpful error messages
- **Organize**: Use tags to categorize and organize your links for easy retrieval
- **Advanced Search**: Quickly find links by searching through titles, URLs, descriptions, or tags
- **Edit & Delete**: Easily manage your saved links with edit and delete functionality
- **Keyboard Support**: Press Enter to submit forms for faster workflow
- **Accessibility**: Full ARIA support and keyboard navigation for better user experience
- **Responsive Design**: Access your links from any device with a fully responsive interface
- **Local Storage**: All your links are saved locally in your browser for privacy and quick access
- **Quick Navigation**: Use the plus button to quickly scroll back to the top and add new links
- **Performance Optimized**: Efficient state management and memoization for smooth user experience

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
2. **Fill in Details**: Enter the title (required), URL (required), description, and optional tags for your bookmark
3. **Save**: Click "Add bookmark" or press Enter in any form field to save your link
4. **Search**: Use the search bar in the navbar to find specific links - results update in real-time
5. **Edit**: Click the "Edit" button on any link to modify its details - the form will auto-scroll into view
6. **Delete**: Click the "Delete" button to remove a link (with confirmation dialog)
7. **Scroll to Top**: Click the plus (+) button at the bottom of the links list to quickly return to the top
8. **About Us**: Click the "About Us" button in the footer to learn more about the application

### Keyboard Shortcuts

- **Enter**: Submit the form when adding or editing a link
- **Escape**: Close the form popup (coming soon)

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
│   ├── AboutUsOverlay/        # About Us overlay component
│   ├── buttons/                # Reusable button component
│   ├── Footer/                 # Footer component
│   ├── landingpagemodulecont/ # Main landing page container
│   ├── landingpagemodules/    # Landing page module components
│   ├── LinksView/              # Links display component
│   ├── Navbar/                 # Navigation bar component
│   ├── SearchBar/              # Search bar component
│   └── StatItem/               # Statistics item component
├── src/
│   ├── hooks/
│   │   └── useLocalStorage.ts  # Custom hook for localStorage management
│   ├── utils/
│   │   ├── searchUtils.ts      # Search functionality utilities
│   │   └── validation.ts       # Form validation utilities
│   ├── types/
│   │   └── LinkTypes.tsx       # TypeScript type definitions
│   ├── App.tsx                 # Main app component
│   └── assets/                 # Static assets
└── public/                     # Public assets
```

## Code Quality

This project follows modern React best practices:

- **Custom Hooks**: Reusable logic extracted into custom hooks (`useLocalStorage`)
- **Utility Functions**: Pure functions for search and validation
- **Type Safety**: Full TypeScript coverage with proper type definitions
- **Performance**: Memoization with `useMemo` and `useCallback` to prevent unnecessary re-renders
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Error Handling**: Comprehensive validation and user-friendly error messages
- **Code Organization**: Clear separation of concerns with hooks, utils, and components

## Deployment

The app is deployed to GitHub Pages. To deploy:

1. Build the project: `npm run build`
2. Deploy to GitHub Pages: `npm run deploy`

The app will be available at: https://Jose-IDO.github.io/my-new-react-app

## License

Copyright © 2025 SNAPIT.COM - All rights reserved

## Contact

For questions or support, please refer to the About Us section in the application footer.
