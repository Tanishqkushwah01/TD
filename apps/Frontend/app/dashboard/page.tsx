import WelcomeHeading from "../Component/Main";
import Navbar from "../Component/Navbar";
import CreateRoom from "../Component/CreateRoom";
import Cards from "../Component/DisplayCards";
// import {LightBtn,DarkBtn} from "../Component/Button";


export default function DashBoard() {

  return (
<div>
   <Navbar/>
   <WelcomeHeading/>
   <Cards/>

   {/* <CreateRoom/> */}
</div>
    


  );

}