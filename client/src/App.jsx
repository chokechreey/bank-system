import { Outlet } from "react-router-dom"
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="bg-fuchsia-100 h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App
