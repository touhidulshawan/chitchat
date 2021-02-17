import { useAuth } from "../context/useAuthContext";

const ChatMessage = (props) => {
  const { uid, messageText, createTime, photoURL } = props.message;
  const { currentUser } = useAuth();
  const messageClass = uid === currentUser.uid ? "sent" : "received";
  return (
    <div>
      <img src={photoURL} alt="person" />
      <p>{messageText}</p>
    </div>
  );
};
export default ChatMessage;
