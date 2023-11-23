import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

const Home = () => {
  return (
    <section className="grid grid-cols-[200px_minmax(0,_1fr)] grid-rows-[80px_minmax(0,_1fr)] h-screen">
      <SideNav />
      <Header />
      <main className="ml-2">
        <Outlet />
      </main>
    </section>
  );
};

export default Home;
