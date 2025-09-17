# GitHub Copilot Instructions: MERN Fullstack Project

## 🛠️ Tech Stack
This repository uses the MERN stack:
- **MongoDB** as the NoSQL database
- **Express.js** as the backend framework
- **React.js** for the frontend interface
- **Node.js** as the runtime environment
- **Mongoose** for MongoDB object modeling
- **Axios** for HTTP requests
- **JWT** for authentication
- **Jest** and **React Testing Library** for testing
- **ESLint** and **Prettier** for code quality and formatting
- **dotenv** for environment variable management
- **Nodemon** for development server auto-reloading
- **React Router** for client-side routing
- **Redux** or **Context API** for state management (if applicable)
- **bcrypt** for password hashing
- **CORS** for handling cross-origin requests
- **Helmet** for securing HTTP headers
- **Postman** for API testing
- **Jenkins** or **GitHub Actions** for CI/CD (if applicable)

## Project Goal
Build a modular, scalable, and maintainable fullstack web application using modern development and architectural best practices.

## Project Structure
- `/client`: React app with functional components and hooks
- `/server`: Express REST API with separated controllers
- `/models`: Mongoose schemas for MongoDB
- `/routes`: Organized route files by entity
- `/config`: Environment variables and DB setup
- `/middleware`: Authentication, validation, and error handling

## Best Practices
Copilot should follow these conventions:
- Use **ESLint** and **Prettier** for consistent code style
- Apply **descriptive names** for functions, variables, and components
- Separate business logic into **services** or **controllers**
- Validate data using **Joi** or **express-validator**
- Prefer **async/await** over callbacks
- Implement **centralized error handling**
- Avoid logic inside React components; use custom hooks when needed
- Use **React Router** for navigation and **Context API** or **Redux** for global state
- Document functions with JSDoc-style comments when helpful
- Add .gitignore for node_modules, .env, and build files
- Use MIT license or other appropriate open-source license

## Security
- Sanitize inputs to prevent injection attacks
- Use **dotenv** for managing secrets
- Implement authentication with **JWT** and role-based authorization

## Testing
- Use **Jest** and **Supertest** for backend testing
- Use **React Testing Library** for frontend testing
- Prioritize unit and integration tests

## Deployment
- Configure production scripts in `package.json`
- Use React’s `build` and serve it via Express in production
- Provide a `.env.example` file for easy setup

## Code Style
- Prefer arrow functions
- Avoid code duplication
- Modularize reusable functions
- Keep files small and focused
- Use comments to explain complex logic
- Follow the DRY (Don't Repeat Yourself) principle

## TypeScript Integration
- Use TypeScript interfaces for props, state, and component definitions
- Define proper types for event handlers and refs
- Implement generic components where appropriate
- Use strict mode in `tsconfig.json` for type safety
- Leverage React's built-in types (`React.FC`, `React.ComponentProps`, etc.)
- Create union types for component variants and states

### Component Design
- Follow the single responsibility principle for components
- Use descriptive and consistent naming conventions
- Implement proper prop validation with TypeScript or PropTypes
- Design components to be testable and reusable
- Keep components small and focused on a single concern
- Use composition patterns (render props, children as functions)

### State Management
- Use `useState` for local component state
- Implement `useReducer` for complex state logic
- Leverage `useContext` for sharing state across component trees
- Consider external state management (Redux Toolkit, Zustand) for complex applications
- Implement proper state normalization and data structures
- Use React Query or SWR for server state management

### Hooks and Effects
- Use `useEffect` with proper dependency arrays to avoid infinite loops
- Implement cleanup functions in effects to prevent memory leaks
- Use `useMemo` and `useCallback` for performance optimization when needed
- Create custom hooks for reusable stateful logic
- Follow the rules of hooks (only call at the top level)
- Use `useRef` for accessing DOM elements and storing mutable values

### Styling
- Use CSS Modules, Styled Components, or modern CSS-in-JS solutions
- Implement responsive design with mobile-first approach
- Follow BEM methodology or similar naming conventions for CSS classes
- Use CSS custom properties (variables) for theming
- Implement consistent spacing, typography, and color systems
- Ensure accessibility with proper ARIA attributes and semantic HTML
- Use styling libraries consistently (React Bootstrap, MUI, Chakra UI)

### Performance Optimization
- Use `React.memo` for component memoization when appropriate
- Implement code splitting with `React.lazy` and `Suspense`
- Optimize bundle size with tree shaking and dynamic imports
- Use `useMemo` and `useCallback` judiciously to prevent unnecessary re-renders
- Implement virtual scrolling for large lists
- Profile components with React DevTools to identify performance bottlenecks

### Data Fetching
- Use modern data fetching libraries (React Query, SWR, Apollo Client)
- Implement proper loading, error, and success states
- Handle race conditions and request cancellation
- Use optimistic updates for better user experience
- Implement proper caching strategies
- Handle offline scenarios and network errors gracefully

### Error Handling
- Implement Error Boundaries for component-level error handling
- Use proper error states in data fetching
- Implement fallback UI for error scenarios
- Log errors appropriately for debugging
- Handle async errors in effects and event handlers
- Provide meaningful error messages to users

### Forms and Validation
- Use controlled components for form inputs
- Implement proper form validation with libraries like Formik, React Hook Form
- Handle form submission and error states appropriately
- Implement accessibility features for forms (labels, ARIA attributes)
- Use debounced validation for better user experience
- Handle file uploads and complex form scenarios

### Routing
- Use React Router for client-side routing
- Implement nested routes and route protection
- Handle route parameters and query strings properly
- Implement lazy loading for route-based code splitting
- Use proper navigation patterns and back button handling
- Implement breadcrumbs and navigation state management

### Testing
- Write unit tests for components using React Testing Library
- Test component behavior, not implementation details
- Use Jest for test runner and assertion library
- Implement integration tests for complex component interactions
- Mock external dependencies and API calls appropriately
- Test accessibility features and keyboard navigation

### Security
- Sanitize user inputs to prevent XSS attacks
- Validate and escape data before rendering
- Use HTTPS for all external API calls
- Implement proper authentication and authorization patterns
- Avoid storing sensitive data in localStorage or sessionStorage
- Use Content Security Policy (CSP) headers

### Accessibility
- Use semantic HTML elements appropriately
- Implement proper ARIA attributes and roles
- Ensure keyboard navigation works for all interactive elements
- Provide alt text for images and descriptive text for icons
- Implement proper color contrast ratios
- Test with screen readers and accessibility tools

## Implementation Process
1. Plan component architecture and data flow
2. Set up project structure with proper folder organization
3. Define TypeScript interfaces and types
4. Implement core components with proper styling
5. Add state management and data fetching logic
6. Implement routing and navigation
7. Add form handling and validation
8. Implement error handling and loading states
9. Add testing coverage for components and functionality
10. Optimize performance and bundle size
11. Ensure accessibility compliance
12. Add documentation and code comments

## Additional Guidelines
- Follow React's naming conventions (PascalCase for components, camelCase for functions)
- Use meaningful commit messages and maintain clean git history
- Implement proper code splitting and lazy loading strategies
- Document complex components and custom hooks with JSDoc
- Use ESLint and Prettier for consistent code formatting
- Keep dependencies up to date and audit for security vulnerabilities
- Implement proper environment configuration for different deployment stages
- Use React Developer Tools for debugging and performance analysis