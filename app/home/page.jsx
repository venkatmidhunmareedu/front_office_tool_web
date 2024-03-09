"use client"
import React from 'react'
import SideBar from './_components/SideBar'
import MessageCard from './_components/MessageCard'
import ChatWindow from './_components/ChatWindow'
import PatientSection from './_components/PatientSection'
import Footer from './_components/Footer'


const page = () => {
    return (
        <div className="grid grid-rows-2 w-[100vw] h-[100vh]">
            <div className="row-span-10 flex ">
                <SideBar />
                <div className="w-full flex justify-center space-x-2">
                    <MessageCard />
                    <ChatWindow />
                    <PatientSection />
                </div>
            </div>
            <div className="row-span-3">
                <Footer />
            </div>
        </div>
    )
}

export default page