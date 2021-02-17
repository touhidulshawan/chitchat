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
    <div className="md:w-12/12 m-auto">
      <div className="flex justify-end">
        <Button
          classes="py-3 px-4 rounded-lg uppercase mt-2 mr-2 text-red-600 focus:ring-red-600"
          action={handleLogout}
          name="Log Out"
        />
      </div>
      <div
        style={{ minHeight: "480px" }}
        className="w-full md:flex md:flex-col md:items-center "
      >
        <div
          className="py-4 px-2 md:w-6/12 md:m-auto md:border-4 md:border-gray-800 md:rounded-xl"
          style={{ minHeight: "480px" }}
        >
          {renderMessages}
        </div>
        <ChatBox messageRef={messagesRef} />
      </div>
    </div>
  );
};
export default Chat;
