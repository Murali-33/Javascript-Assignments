React Error Boundaries - Explanation & Interview-Worthy Answer
📌 What is an Error Boundary?
An Error Boundary in React is a special class component that catches JavaScript errors in the component tree and prevents the entire app from crashing. It acts like a try-catch block but for React components.

🔹 Key Features of Error Boundaries:
✅ Catches errors only in lifecycle methods, render, and constructors (not inside event handlers).
✅ Prevents entire app crashes by displaying fallback UI.
✅ Does not catch errors in async code (e.g., setTimeout) or errors in event handlers.

  Usage:

  class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again.</h2>;
    }
    return this.props.children;
  }
}

// Usage:
function App() {
  return (
    <ErrorBoundary>
      <ComponentThatMayFail />
    </ErrorBoundary>
  );
}


✅ Step 4: How to Handle Functional Components?
"Since hooks cannot be used inside class components, React does not support error boundaries in functional components. But we can wrap functional components
inside an Error Boundary OR use libraries like react-error-boundary for handling errors in functional components."
  import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

function BuggyComponent() {
  throw new Error("Oops! Crash!");
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BuggyComponent />
    </ErrorBoundary>
  );
}

How to Impress the Interviewer?
Explain the Problem Clearly
"In React, a single error can crash the entire app. Error Boundaries catch these errors and prevent the app from breaking."

Show Different Ways to Handle Errors

Class-based Error Boundaries (default method)
react-error-boundary for functional components
Mention Limitations of Error Boundaries
❌ Cannot catch errors inside event handlers
❌ Cannot catch async errors (like setTimeout)

Bonus: Mention Future React Developments

React may introduce built-in hooks for error boundaries in the future.
