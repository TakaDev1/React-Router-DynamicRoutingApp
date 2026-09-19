import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <h1>React-Router-DynamicRoutingApp</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
