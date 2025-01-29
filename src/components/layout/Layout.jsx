import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">{children}</div> {/* Add pt-16 here */}
      <Footer />
    </div>
  );
};

export default Layout;
