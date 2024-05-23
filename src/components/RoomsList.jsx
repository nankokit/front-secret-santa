import React from 'react';

const RoomsList = ({ rooms }) => {
  return (
    <div className="rooms-list">
      {rooms.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </div>
  );
};

export default RoomsList;
