import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
    <div className="w-screen min-h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center 
        gap-3 shadow-lg bg-white px-3 py-2
        rounded-3xl">
          <button
          onClick={() => setColor("#F5F5F5")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#F5F5F5"}}
          >Soft White</button>
          <button
          onClick={() => setColor("#F8BBD0")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#F8BBD0"}}
          >Pink</button>
          <button
          onClick={() => setColor("#C8E6C9")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#C8E6C9"}}
          >Mint</button>
          <button
          onClick={() => setColor("#BBDEFB")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#BBDEFB"}}
          >Sky</button>
          <button
          onClick={() => setColor("#FFE0B2")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"#FFE0B2"}}
          >Peach</button>
           </div>
      </div>
    </div>
        </>
  )
}

export default App
