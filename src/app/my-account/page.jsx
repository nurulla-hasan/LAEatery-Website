"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import HomeContainer from "@/components/home-container/HomeContainer"
import ContactInfo from "@/components/account/ContactInfo"
import AccountBanner from "@/components/account/AccountBanner"
import AccountDetails from "@/components/account/AccountDetails"
import EditProfile from "@/components/account/EditProfile"
import ChangePassword from "@/components/account/ChangePassword"


const AccountPage = () => {
  const [activeView, setActiveView] = useState("details") // details, edit, password

  // User data state
  const [userData, setUserData] = useState({
    fullName: "Leslie Alexander",
    email: "debra.holt@example.com",
    phone: "(208) 555-0112",
    password: "••••••••",
  })

  const updateUserData = (newData) => {
    setUserData({
      ...userData,
      ...newData,
    })
    setActiveView("details")
  }

  return (
    <div className="min-h-screen py-8 text-[#333333] ">
      <HomeContainer>
        {/* Banner with user info */}
        <AccountBanner fullName={userData.fullName} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column - Welcome and contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <ContactInfo />
          </motion.div>

          {/* Right column - Account details/edit form/change password */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="rounded-lg p-6">
              {activeView === "details" && (
                <AccountDetails
                  userData={userData}
                  onEditClick={() => setActiveView("edit")}
                  onChangePasswordClick={() => setActiveView("password")}
                />
              )}

              {activeView === "edit" && (
                <EditProfile userData={userData} onUpdate={updateUserData} onCancel={() => setActiveView("details")} />
              )}

              {activeView === "password" && (
                <ChangePassword
                  onPasswordChange={() => setActiveView("details")}
                  onCancel={() => setActiveView("details")}
                />
              )}
            </div>
          </motion.div>
        </div>
      </HomeContainer>
    </div>
  )
}

export default AccountPage
