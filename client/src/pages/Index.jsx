import Landing from "../components/Home/Landing";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import Features from "../components/Home/Features";
const Login = () => {
  return (
    <>
      <section className="flex bg-grid bg-black bg-gradient-to-r from-black to-branddark flex-col font-poppins w-full min-h-screen overflow-hidden ">
        <Navbar />
        <Landing />
        <Features />
        <Footer />
      </section>
    </>
  );
};

export default Login;
