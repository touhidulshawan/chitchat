import { useState, useEffect } from "react";
import { useAuth } from "../context/useAuthContext";
import { firestore } from "../Firebase";
import ChatBox from "./ChatBox";
import Button from "./Button";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const { logout } = useAuth();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createTime").limit(30);

  useEffect(() => {
    return query.onSnapshot((querySnapShot) => {
      const data = querySnapShot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(data);
    });
  });

  const handleLogout = async () => {
    await logout();
  };

  const renderMessages =
    messages &&
    messages.map((msg) => <ChatMessage key={msg.id} message={msg} />);
  return (
    <div>
      <h1>Chat</h1>
      {renderMessages}
      <ChatBox messageRef={messagesRef} />
      <Button action={handleLogout} name="Log Out" />
    </div>
  );
};
export default Chat;
