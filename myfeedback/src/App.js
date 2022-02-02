import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { FeedbackProvider } from "./context/FeedbackContext";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";

import About from "./pages/About";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Link to="/">
          <Header />
        </Link>

        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            />

            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
