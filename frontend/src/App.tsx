import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Registration from "./pages/Registration";
// import Login from "./pages/Login"; // Make sure to import the Login page
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route (home) with Layout wrapper */}
        <Route
          path="/"
          element={
            <Layout>
              Home Page
            </Layout>
          }
        />

        {/* Separate route for /registration */}
        <Route
          path="/registration"
          element={
            <Layout>
              <Registration />
            </Layout>
          }
        />

        {/* Add more routes here */}
        {/* <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        /> */}

        {/* Catch-all route for unknown paths */}
        <Route
          path="*"
          element={
            <Layout>
              <div>HomePage</div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
