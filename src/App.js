import React from "react";
import "./App.css";

import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from './components/LoginForm';

const App = () => {

  if(!localStorage.getItem("username")){
    return <LoginForm />
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="603caa48-4cb3-4fa4-acae-158b8d912a74"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatProps) => <ChatFeed {...chatProps} />}
    />
  );
};

export default App;
