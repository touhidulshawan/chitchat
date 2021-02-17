import { useState } from "react";
import { useAuth } from "../context/useAuthContext";
import firebase from "firebase/app";

const ChatBox = ({ messageRef }) => {
  const [messageText, setMessageText] = useState("");

  const { currentUser } = useAuth();

  const handleMessageSend = async (evt) => {
    evt.preventDefault();
    const { uid, photoURL } = currentUser;

    await messageRef.add({
      messageText: messageText,
      createTime: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setMessageText("");
  };

  return (
    <form onSubmit={handleMessageSend}>
      <input
        type="text"
        value={messageText}
        onChange={(evt) => setMessageText(evt.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default ChatBox;
