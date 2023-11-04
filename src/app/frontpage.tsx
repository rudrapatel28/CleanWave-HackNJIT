import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import {LogIn} from 'lucide-react'
import FileUpload from "@/components/FileUpload";
// hi again
export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
  <div className="w-screen min-h-screen bg-gradient-to-bl from-teal-300 via-teal-200 to-white">
      <div className = "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-x-1/2">
        <div className = "flex flex-col items-center text-center">
          <div className = "flex item-center">
            <h1 className="mr-3 text-5xl font-semibold">Save the oceans!</h1>
              <UserButton afterSignOutUrl="/"></UserButton>
            </div>
              <div className="flex mt-2">{isAuth && 
                <Button>Go to Chats</Button>}
              </div>
              <p className="max-w-x1 mt-1 text-lg text-slate-600">
              Our platform serves as a dynamic hub where passionate individuals unite to make a tangible impact on ocean conservation. By uploading videos of their dedicated efforts to clean our precious seas, users become true stewards of our planet. Dr. Clean, our innovative AI chatbot, guides and educates users on actionable steps to protect our oceans, sharing knowledge that transcends borders. Together, we're on a mission to create a cleaner, healthier future for our oceans and all who call them home. 
              </p>
              
              <div className="w-half mt-4">
              {isAuth ? (
              <FileUpload />
            ) : (
                <Link href="/sign-in">
                <Button>
                  
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                  </Button>
                  </Link>
            )}
            </div>
        </div>
      </div>
    </div>
  )
}
