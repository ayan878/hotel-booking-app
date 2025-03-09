import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Registration from "./pages/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Registration/>
            </Layout>
          }
        />
        <Route path="/registration" element={<Registration />} />
        {/* Using a div for simplicity */}
        <Route path="*" element={<div>HomePage</div>} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
}

export default App;
