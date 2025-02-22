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

