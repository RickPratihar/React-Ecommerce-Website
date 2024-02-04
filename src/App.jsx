import { Outlet } from "react-router-dom";
import "./App.css";
import NavItems from "./component/NavItems";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <NavItems />
      <div className="min-vh-100 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
