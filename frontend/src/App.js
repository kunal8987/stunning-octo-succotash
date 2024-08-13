import { Navbar } from "./Componend/Navbar/Navbar";
import Footer from "./Pages/Landing/Footer/Footer";

import Allroutes from "./Routes/Allroutes";

export default function App() {
  return (
    <>
      <div className="bg-[#f1faee]">
        <Navbar />
        <div className="container mx-auto px-5 md:px-10 lg:px-14 xl:px-24">
          <Allroutes />
        </div>
        <Footer/>
      </div>
    </>
  );
}
