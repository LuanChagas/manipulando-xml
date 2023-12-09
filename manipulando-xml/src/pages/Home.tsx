import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { useState } from "react";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section
      id="container"
      className="grid grid-cols-1 grid-rows-[60px_1fr] h-screen md:grid-cols-1"
    >
      <Header onToggleSidebar={toggleSidebar} />

      <div className="flex">
        <SideNav isOpen={isSidebarOpen} onToggleSidebar={setIsSidebarOpen} />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default Home;
