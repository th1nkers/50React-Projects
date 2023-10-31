import React from 'react';

const ChatList = (props) => {
  const { chats, activeChat } = props;

  // Use the chats and activeChat properties as needed
  // For example, you can map through the chats and render a list of chats
  return (
    <div className='chatlist__'>
      {/* Render your chat list here using the chats and activeChat */}
    </div>
  );
}

export default ChatList;
