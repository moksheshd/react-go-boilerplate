# React & Go Boilerplate Frontend Documentation

Welcome to the React & Go Boilerplate frontend documentation. This repository contains a comprehensive set of documents to help you understand and work with the frontend codebase.

## Documentation Index

| Document | Description |
|----------|-------------|
| [Documentation Summary](./DOCUMENTATION_SUMMARY.md) | High-level overview of all documentation with guidance on how to use it effectively. |
| [Architecture Documentation](./ARCHITECTURE.md) | Detailed overview of the frontend architecture, including component structure, state management, theming, and internationalization. |
| [Architecture Diagrams](./ARCHITECTURE_DIAGRAM.md) | Visual representations of the frontend architecture with component hierarchies, context flow, authentication flow, and more. |
| [Component Reference](./COMPONENT_REFERENCE.md) | Detailed reference for all UI components, including layout components, UI components, custom components, and page components. |
| [Developer Guide](./DEVELOPER_GUIDE.md) | Comprehensive guide for developers on how to extend and maintain the frontend application. |
| [Theming Guide](./THEMING_GUIDE.md) | In-depth guide to the theming system, including theme modes, color themes, CSS variables, and customization options. |
| [Internationalization Guide](./I18N_GUIDE.md) | Comprehensive guide to the internationalization (i18n) system, including translation files, language context, and adding new languages. |
| [Authentication Guide](./AUTH_GUIDE.md) | Detailed guide to the authentication system, including login flow, protected routes, user profiles, and security considerations. |
| [State Management Guide](./STATE_MANAGEMENT_GUIDE.md) | Comprehensive guide to the state management approach, including context-based state management, React Query, and performance optimizations. |
| [Responsive Design Guide](./RESPONSIVE_DESIGN_GUIDE.md) | Detailed guide to the responsive design approach, including mobile-first design, breakpoints, and adaptive components. |

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory
3. Install dependencies

```bash
cd frontend
npm install
```

### Running the Development Server

```bash
npm run dev
```

This will start the development server at http://localhost:8080.

## Project Overview

The React & Go Boilerplate frontend is a modern React application built with TypeScript, Vite, and shadcn/ui components. It follows a component-based architecture with context-based state management. The application supports multiple themes, dark/light modes, and internationalization.

### Key Features

- **Modern React with TypeScript**: Type-safe development with React 18
- **Component-Based Architecture**: Modular and reusable components
- **Context-Based State Management**: Global state management using React Context API
- **Theming System**: Comprehensive theming with light/dark modes and multiple color options
- **Internationalization**: Multi-language support with i18next
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Authentication**: User authentication with protected routes

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
```

## Contributing

Please refer to the [Developer Guide](./DEVELOPER_GUIDE.md) for detailed information on how to contribute to the project, including coding standards, workflow, and best practices.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
