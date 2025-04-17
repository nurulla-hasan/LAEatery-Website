"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mic, Plus, Send } from "lucide-react"
import HomeContainer from "@/components/home-container/HomeContainer"
import ChatHistory from "@/components/AI/ChatHistory"
import SuggestionChip from "@/components/AI/SuggestionChip"

const AIChatWithHistory = () => {
    const [message, setMessage] = useState("")
    const [chatHistory, setChatHistory] = useState([
    ])

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

    return (
        <div className="min-h-screen py-10">
            <HomeContainer>
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="relative mb-4">
                        <Image src="/image/logo2.png" alt="LA Eatery Logo" width={1920} height={1080} className="object-contain w-96" />
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-semibold text-gray-800 text-center">LA Restaurant Concierge</h1>
                    <p className="text-lg text-gray-700 mt-1 mb-6 text-center">-Tailored by AI-</p>

                    {/* Chat History */}
                    <ChatHistory messages={chatHistory} />

                    {/* Suggestions */}
                    {chatHistory.length <= 2 && (
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                            {suggestions.map((suggestion, index) => (
                                <SuggestionChip key={index} text={suggestion} onClick={handleSuggestionClick} />
                            ))}
                        </div>
                    )}

                    {/* Chat Input */}
                    <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-8">
                        <div className="bg-white rounded-full shadow-md flex items-center p-2 pl-4">
                            <Plus className="h-5 w-5 text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Ask me anything about LA restaurants..."
                                className="flex-grow py-2 px-2 focus:outline-none text-gray-800"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            {message.trim() ? (
                                <button
                                    type="submit"
                                    className="p-2 rounded-full bg-gray-800 text-white flex items-center justify-center"
                                >
                                    <Send className="h-5 w-5" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="p-2 rounded-full bg-gray-800 text-white flex items-center justify-center"
                                >
                                    <Mic className="h-5 w-5" />
                                </button>
                            )}
                        </div>
                    </form>

                    {/* Discover Section */}
                    <div className="mt-4 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Discover LA's Hottest Restaurants</h2>

                        <Link href="/ai-picks">
                            <button className="bg-[#5C5C5C] hover:bg-gray-800 text-white py-3 px-8 rounded-full transition-colors">
                                Explore AI Picks
                            </button>
                        </Link>
                    </div>
                </div>
            </HomeContainer>
        </div>
    )
}

export default AIChatWithHistory
