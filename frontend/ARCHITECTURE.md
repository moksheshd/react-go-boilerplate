# Frontend Architecture Documentation

This document provides a comprehensive overview of the frontend architecture for the React & Go Boilerplate application.

## Table of Contents

1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Core Components](#core-components)
5. [State Management](#state-management)
6. [Theming System](#theming-system)
7. [Internationalization](#internationalization)
8. [Authentication](#authentication)
9. [Responsive Design](#responsive-design)
10. [UI Components](#ui-components)
11. [Development Workflow](#development-workflow)

## Overview

The frontend is a modern React application built with TypeScript, Vite, and shadcn/ui components. It follows a component-based architecture with context-based state management. The application supports multiple themes, dark/light modes, and internationalization.

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (based on Radix UI primitives)
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form
- **Internationalization**: i18next
- **Icons**: Lucide React

## Project Structure

```
frontend/
├── public/               # Static assets
├── src/
│   ├── components/       # UI components
│   │   ├── custom/       # Custom application-specific components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # shadcn UI components
│   ├── contexts/         # React context providers
│   ├── hooks/            # Custom React hooks
│   ├── i18n/             # Internationalization
│   │   └── locales/      # Translation files
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.tsx          # Application entry point
├── tailwind.config.ts    # Tailwind configuration
└── vite.config.ts        # Vite configuration
```

## Core Components

### App.tsx

The main application component that sets up the application structure, including:

- React Query client for data fetching
- React Router for navigation
- Context providers for theme, language, and authentication
- Toast notifications

```tsx
const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </TooltipProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
```

### Layout Components

The application uses a structured layout system with the following components:

- **Header**: Contains the application title and user profile dropdown
- **Sidebar**: Navigation menu with collapsible sections
- **MainPanel**: Main content area
- **Footer**: Application footer

## State Management

The application uses React Context API for state management, with the following key contexts:

### AuthContext

Manages user authentication state, including:

- User information
- Login/logout functionality
- Authentication status

```tsx
// AuthContext.tsx
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  // Authentication methods
  const login = async (email: string, password: string) => { /* ... */ };
  const logout = () => { /* ... */ };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

### ThemeContext

Manages the application's theme settings, including:

- Light/dark mode
- Color theme selection
- Theme persistence

```tsx
// ThemeContext.tsx
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Initialize from localStorage or system preference
  });
  
  const [color, setColor] = useState<ColorOption>(() => {
    // Initialize from localStorage or default
  });

  // Apply theme changes to DOM
  useEffect(() => {
    // Update document classes and styles
  }, [mode, color]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### LanguageContext

Manages the application's language settings:

- Language selection
- Translation loading
- Language persistence

```tsx
// LanguageContext.tsx
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Initialize from localStorage or default
  });

  useEffect(() => {
    // Update i18n language
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
```

## Theming System

The application uses a comprehensive theming system with the following features:

### Light/Dark Mode

- Toggle between light and dark modes
- System preference detection
- Persistence in localStorage

### Color Themes

- 22 color options (slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose)
- Color theme persistence
- Different color values for light and dark modes

### CSS Variables

The theming system uses CSS variables for consistent styling:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 47.4% 11.2%;
  /* ... other variables */
}

/* Theme Colors */
.theme-slate { --primary: 215.3 26.5% 31.4%; --primary-foreground: 210 40% 98%; --ring: 215.3 26.5% 31.4%; }
.theme-gray { --primary: 220 8.9% 46.1%; --primary-foreground: 210 40% 98%; --ring: 220 8.9% 46.1%; }
/* ... other theme colors */
```

## Internationalization

The application uses i18next for internationalization with the following features:

### Supported Languages

- English (en)
- Hindi (hi)

### Translation Structure

Translations are organized in JSON files by language:

```json
// en.json
{
  "auth": {
    "welcome": "Welcome",
    "login": "Login",
    "email": "Email",
    "password": "Password",
    "signIn": "Sign In"
  },
  "dashboard": {
    "welcome": "Welcome to your dashboard",
    "titlePrefix": "Dashboard"
  }
  // ... other translation keys
}
```

### Language Selection

- Language selector component in the UI
- Language persistence in localStorage
- Automatic language detection

## Authentication

The application implements a simple authentication system with the following features:

### Login Flow

1. User enters email and password
2. Authentication request is sent
3. On success, user data is stored in localStorage
4. User is redirected to the dashboard

### Protected Routes

- Routes that require authentication redirect to the login page if the user is not authenticated
- Authentication state is checked on application startup

### User Profile

- User information is displayed in the header
- Profile dropdown with user details and logout option

## Responsive Design

The application is fully responsive with the following features:

### Mobile Detection

A custom hook `useIsMobile` detects mobile devices:

```tsx
// use-mobile.tsx
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

### Responsive Layout

- Collapsible sidebar on mobile
- Adaptive header with mobile menu
- Responsive content layout

## UI Components

The application uses shadcn/ui components, which are built on top of Radix UI primitives:

### Core Components

- **Button**: Various button styles and variants
- **Card**: Content containers with header, content, and footer sections
- **Dialog**: Modal dialogs for important actions
- **Dropdown**: Dropdown menus for actions
- **Form**: Form components with validation
- **Input**: Text input fields
- **Sidebar**: Navigation sidebar with collapsible sections
- **Toast**: Notification system

### Custom Components

The application includes custom components located in the `src/components/custom/` directory:

- **LanguageSelector**: Language selection dropdown
- **ModeToggle**: Light/dark mode toggle
- **ThemeSelector**: Color theme selection grid
- **ProfileDropdown**: User profile dropdown with settings
- **UserAvatar**: User avatar with fallback initials

## Development Workflow

### Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run build:dev`: Build for development
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

### Development Server

The development server runs on port 8080 and is configured in `vite.config.ts`:

```ts
server: {
  host: "::",
  port: 8080,
},
```

### Path Aliases

The application uses path aliases for cleaner imports:

```ts
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
```

This allows importing from `@/components/ui/button` instead of `../../components/ui/button`.
