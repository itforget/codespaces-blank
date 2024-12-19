import Header from "./components/header.js";
import Image from "next/image"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex flex-row justify-between my-40 mx-20 items-center">
        <div>
          <h2 className="text-white text-6xl font-extrabold">ÍTALO <br /> CORDEIRO</h2>
          <p className="text-white">Full-stack Developer - Data analyst</p>
        </div>
        <Image src="/avatar.svg" alt="Profile" width={400} height={400} />
        <div>
          <a className="font-semibold text-purple-400 p-4 bg-purple-700 bg-opacity-40 rounded-xl hover:bg-purple-500" href="">📄 Baixar CV</a>
        </div>
      </div>
      <div className="flex flex-row justify-center py-28 border-t-purple-700 border-b-purple-700 border-t border-b">
        <div className="grid grid-cols-3 gap-8 mx-20">
          <div className="bg-purple-700 bg-opacity-40 p-6 rounded-xl hover:bg-purple-500 transition-all cursor-pointer">
            <Image src="/project1.png" alt="Project 1" width={300} height={200} className="rounded-lg" />
            <h3 className="text-white text-xl font-bold mt-4">Project 1</h3>
            <p className="text-gray-300">Description of project 1</p>
          </div>
          <div className="bg-purple-700 bg-opacity-40 p-6 rounded-xl hover:bg-purple-500 transition-all cursor-pointer">
            <Image src="/project2.png" alt="Project 2" width={300} height={200} className="rounded-lg" />
            <h3 className="text-white text-xl font-bold mt-4">Project 2</h3>
            <p className="text-gray-300">Description of project 2</p>
          </div>
          <div className="bg-purple-700 bg-opacity-40 p-6 rounded-xl hover:bg-purple-500 transition-all cursor-pointer">
            <Image src="/project3.png" alt="Project 3" width={300} height={200} className="rounded-lg" />
            <h3 className="text-white text-xl font-bold mt-4">Project 3</h3>
            <p className="text-gray-300">Description of project 3</p>
          </div>
          <div className="bg-purple-700 bg-opacity-40 p-6 rounded-xl hover:bg-purple-500 transition-all cursor-pointer col-span-3">
            <Image src="/project4.png" alt="Project 4" width={300} height={200} className="rounded-lg" />
            <h3 className="text-white text-xl font-bold mt-4">Project 4</h3>
            <p className="text-gray-300">Description of project 4</p>
          </div>
        </div>
      </div>
    </main>
  )
}