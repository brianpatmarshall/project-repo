import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import { AuthProvider } from "./context/AuthProvider";
import RequireAuthentication from "./components/RequiredAuthentication";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="projects" element={<Projects />} />
            {/* <Route element={<RequireAuthentication />}>
            </Route> */}
          </Route>
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}
export default App;
