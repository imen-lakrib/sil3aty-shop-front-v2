import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

interface LayoutProps {
  children: React.ReactNode; // Specify that the children prop is of type React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;