import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import ChatList from './components/ChatList';

const projectID = '49c92888-a695-4773-8883-58dab9e42fcc';

function App() {
  return (
    <ChatEngine
      height="100vh"
      width="100vw"
      projectID={projectID}
      userName="th1nkers"
      userSecret="SuryA1103@a"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
