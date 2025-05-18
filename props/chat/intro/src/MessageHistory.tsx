import React from "react";
import Message from "./Message.tsx";
import Response from "./Response.tsx";
import Typing from "./Typing.tsx";

interface MessageHistoryItem {
  id: string;
  from: { name: string };
  type: string;
  time: string;
  text?: string;
}

interface MessageHistoryProps {
  items: MessageHistoryItem[];
}

const MessageHistory: React.FC<MessageHistoryProps> = ({ items = [] }) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <ul>
      {items.map((message: MessageHistoryItem) => (
        <li
          key={message.id}
          className={message.type === "message" ? "clearfix" : ""}
        >
          {message.type === "message" && <Message message={message} />}
          {message.type === "response" && <Response message={message} />}
          {message.type === "typing" && <Typing message={message} />}
        </li>
      ))}
    </ul>
  );
};

export default MessageHistory;
