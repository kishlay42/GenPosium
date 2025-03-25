import { Header, Footer, Tabs,CursorTrail} from "./index";
import { Outlet } from "react-router-dom";
import  ScrollToTop  from "./Usables/ScrollToTop";
const Layout = () => {
  return (
    <div className="sticky overflow-auto top-0 z-50 bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-pink-50 to-90% h-3/4 scrollbar-hide ">
      <CursorTrail />
      <ScrollToTop />
      <Header />
      <Tabs />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
