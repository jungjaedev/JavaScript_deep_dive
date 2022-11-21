import { useRef } from 'react';
import { useSockets } from "../context/socket.context";

function RoomsContainer() {
  const { socket, roomId, rooms } = useSockets();
  const newRoomRef = useRef(null);

  function handleCreateRoom() {
    // get the room name

    // emit room create event

    // set room name input to empty string
  }
  return <nav>
    <div>
      <input ref={newRoomRef} placeholder="Room name" />
      <button onClick={handleCreateRoom}>CREATE ROOM</button>
    </div>
  </nav>;
}

export default RoomsContainer;
