import { Navbar } from "./Componend/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Signup/Register";
import Allroutes from "./Routes/Allroutes";

export default function App() {
  return (
    <>
      <div className="bg-[#f1faee]" >
          <Navbar />
        <div className="container mx-auto px-5 md:px-10 lg:px-14 xl:px-24">
         <Allroutes/>
        </div>
      </div>
    </>
  );
}
