"use client"
import { useState } from "react"
import Image from "next/image"
import { Mic, Plus, Send } from "lucide-react"
import HomeContainer from "@/components/home-container/HomeContainer"
import ChatHistory from "@/components/AI/ChatHistory"
import SuggestionChip from "@/components/AI/SuggestionChip"
import { useDispatch } from "react-redux"
import { setChattedTrue } from "@/redux/features/aiSlice"
import { useRouter } from "next/navigation"

const bgImage = {
  backgroundImage: 'url(/image/heroBG.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '90vh',
};

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
  ])

  const [clickedOnce, setClickedOnce] = useState(false)

  const suggestions = [
    "Find me a romantic restaurant",
    "Best Italian food in LA",
    "Rooftop dining options",
    "Restaurants open late night",
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to chat
    setChatHistory([...chatHistory, { text: message, isUser: true }])

    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          text: `I'll help you find information about "${message}". Here are some options...`,
          isUser: false,
        },
      ])
    }, 1000)

    setMessage("")
  }

  const handleSuggestionClick = (text) => {
    setChatHistory([...chatHistory, { text, isUser: true }])

    // Simulate AI response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          text: `Great choice! Here are some recommendations for "${text}"...`,
          isUser: false,
        },
      ])
    }, 1000)
  }


  const handleExplore = () => {
    if (!clickedOnce) {
      setClickedOnce(true)
    } else {
      dispatch(setChattedTrue(true));
      router.push('/ai-picks');
      // setClickedOnce(false)
    }

  }



  return (
    <div>
      <div className="h-[90vh] overflow-scroll scrl-hide py-10">
        <HomeContainer>
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div className="relative mb-4">
              <Image src="/image/logo2.png" alt="LA Eatery Logo" width={1920} height={1080} className="object-contain w-[500px]" />
            </div>

            {
              !clickedOnce && (
                <div className="my-5">
                  {/* Title */}
                  <h1 className="text-lg font-light font-geologica tracking-[0.3em] text-gray-800 text-center mb-4 uppercase space-x-5">
                    <span>L A ’ S</span>   <span>R E S T A U R A N T</span>   <span>C O N C I E R G E</span>
                  </h1>
                  <p className="text-md text-red-500 font-geologica tracking-[0.25em] text-center uppercase space-x-5">
                    – <span>T A I L O R E D</span>  <span>B Y</span>   <span>A I</span> –
                  </p>
                </div>
              )
            }

            {
              clickedOnce && (
                <div>
                  {/* Chat History */}
                  <ChatHistory messages={chatHistory} />

                  {/* Suggestions */}
                  {chatHistory.length <= 2 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {suggestions.map((suggestion, index) => (
                        <SuggestionChip key={index} text={suggestion} onClick={handleSuggestionClick} />
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            {/* Chat Input */}
            {
              clickedOnce && (
                <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-8">
                  <div className="flex items-center p-2 pl-4 bg-white rounded-full shadow-md">
                    <Plus className="w-5 h-5 mr-2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Ask me anything about LA restaurants..."
                      className="flex-grow px-2 py-2 text-gray-800 focus:outline-none"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    {message.trim() ? (
                      <button
                        type="submit"
                        className="flex items-center justify-center p-2 text-white bg-gray-800 rounded-full"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex items-center justify-center p-2 text-white bg-gray-800 rounded-full"
                      >
                        <Mic className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </form>
              )
            }

            {/* Discover Section */}
            <div className="mt-4 text-center">

              <button onClick={handleExplore} className="bg-[#5C5C5C] cursor-pointer hover:bg-gray-800 text-white py-3 px-8 rounded-full transition-colors">
                Let’s Explore
              </button>
            </div>
          </div>
        </HomeContainer>
      </div>
    </div>
  )
}

export default Home
