import { useUser } from "@clerk/clerk-react"
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const {user, isLoaded} = useUser();
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    // console.log(user);
    if(isLoaded && user){
      setCurrUser(user);
    }
  }, [isLoaded, user])

  if(!isLoaded) return (
    <div className="text-center text-5xl font-bold mt-4">Loading</div>
  )
  return (
    <>
      <Navbar />
      {
        currUser 
        ? <Outlet />
        : <div className="min-h-[67vh] text-center text-5xl font-bold mt-4">Please Login to your Account</div> 
      }
      <Footer />
    </>
  )
}

export default App
