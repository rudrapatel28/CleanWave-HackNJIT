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
    <div className = "w-screen min-h-screen bg-gradient-to-bl from-blue-300 via-green-200 to-yellow-300">
      <div className = "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-x-1/2">
        <div className = "flex flex-col items-center text-center">
          <div className = "flex item-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF!</h1>
              <UserButton afterSignOutUrl="/"></UserButton>
            </div>
              <div className="flex mt-2">{isAuth && 
                <Button>Go to Chats</Button>}
              </div>
              <p className="max-w-x1 mt-1 text-lg text-slate-600">
              Join millions of students, researchers and professionals to instantly answer questions and understand research with AI 
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
