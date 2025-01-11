import TourGuide from "../components/TourGuide"
import React from 'react'

const Home = () => {
  return (
    <div>
      <header className="header w-full bg-pink-100 p-5">
        هدر
      </header>
      
      <main className="h-screen bg-slate-200 p-5 w-full" >
        <p className="mb-4 font-bold">محتوای اصلی سایت</p>
        <div className="flex flex-col gap-4">
          <div className="red h-[10rem] w-[40rem] bg-red-200"></div>
          <div className="yellow h-[10rem] w-[40rem] bg-yellow-200"></div>
          <div className="green h-[10rem] w-[40rem] bg-green-200"></div>
        </div>
      </main>
      
      <footer className="footer w-full bg-blue-200 p-5" >
        فوتر
      </footer>

      {/* Add the TourGuide component */}
      <TourGuide />
    </div>
  );
};

export default Home;
