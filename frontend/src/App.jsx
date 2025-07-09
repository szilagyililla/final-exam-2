import NavBar from "../components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursePage from "../components/CoursePage";
import CreatePage from "../pages/CreatePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CoursePage />} />
        <Route path="/" element={<CreatePage />} />
      </Routes>
    </>
  );
}

export default App;
