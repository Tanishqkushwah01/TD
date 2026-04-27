import Tools from "../../Component/Tools";
import RoomCanvas from "../../Component/RoomCanvas";

export default async function Canvas({ params }: { params: { roomId: string } }) {
    const roomId = (await params).roomId;

    return <RoomCanvas roomId={roomId} />

   
}