import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        />
        <Route path="/search" element={<div>SearchPage</div>} />
        {/* Using a div for simplicity */}
        <Route path="*" element={<div>HomePage</div>} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
}

export default App;
