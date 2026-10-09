"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation"

export default function Home() {
    const router = useRouter()
    const [text, setText] = useState("")
    // redirect("/Mr.H")


    const createTree = () => {
      router.push(`/generate?handle=${text}`)
    }
  return (
    <main>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">
        <div className=" flex  justify-center flex-col ml-[10vw] gap-3">
          <p className="text-yellow-300 font-bold text-7xl">Everything you</p>
          <p className="text-yellow-300 font-bold text-7xl">are. In one,</p>
          <p className="text-yellow-300 font-bold text-7xl">
            simple link in bio.
          </p>
          <p className="text-yellow-300 font-bold text-xl my-4">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, and other social media profiles.
          </p>
          <div className="input flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="bg-gray-200 px-2 py-2 focus:outline-green-800 rounded-md text-gray-800"
              type="text"
              placeholder="bittr.ee/your-url"
            />
            <button
              onClick={() => createTree()}
              className="bg-pink-300 rounded-full px-4 py-4 text-black font-semibold"
            >
              Claim your Bittree
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-center flex-col mr-[10vw]">
          <img src="./home.png" alt="homepage image" />
        </div>
      </section>
      <section className="bg-red-500 min-h-screen"></section>
    </main>
  );
}
