import Breadcrumb from "../layout/Breadcrumb";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Alsolike from "./cart/Alsolike";
import Cartsummary from "./cart/Cartsummary";

const Addcart = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb />
      <Cartsummary />
      <Alsolike />
      <Footer />
    </>
  );
};

export default Addcart;
