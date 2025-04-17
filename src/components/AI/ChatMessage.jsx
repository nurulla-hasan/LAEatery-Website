const ChatMessage = ({ message, isUser }) => {
    return (
      <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
        <div
          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
            isUser ? "bg-gray-800 text-white rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none shadow-md"
          }`}
        >
          {message}
        </div>
      </div>
    )
  }
  
  export default ChatMessage
  