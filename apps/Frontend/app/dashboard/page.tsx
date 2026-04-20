import RoomCard from "../Component/RoomCard";
import WelcomeHeading from "../Component/Main";
import Navbar from "../Component/Navbar";
import CreateRoom from "../Component/CreateRoom";
// import {LightBtn,DarkBtn} from "../Component/Button";


export default function DashBoard() {

  return (
<div>
   <Navbar/>
   <WelcomeHeading/>
   <div className="flex justify-center items-center">
    {/* <div className="gap-4 grid grid-cols-3">
    <RoomCard variant='#dca7a0'/>
    <RoomCard variant="#c8e8c8"/>
    <RoomCard variant="#c8dce8"/>
    <RoomCard variant="#c8dce8"/>
    <RoomCard variant='#dca7a0'/>
    <RoomCard variant="#c8e8c8"/>
    <RoomCard variant="#c8e8c8"/>
    <RoomCard variant="#c8dce8"/>
    <RoomCard variant='#dca7a0'/> */}
    {/* </div> */}
   </div>

   {/* <CreateRoom/> */}
</div>
    


  );

}