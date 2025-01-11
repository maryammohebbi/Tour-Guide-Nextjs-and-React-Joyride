import Item from "@/components/Item";
import TourGuide from "../components/TourGuide"
import React from 'react'

const items = [
  {
    id: 1,
    bgColor: "bg-red-200",

  },
  {
    id: 2,
    bgColor: "bg-yellow-200",
    
  },
  {
    id: 3,
    bgColor: "bg-green-200",
    
  }
]


const Home = () => {

  return (
    <div>
      <header className="header w-full bg-pink-100 p-5">
        هدر
      </header>
      
      <main className="h-screen bg-slate-200 p-5 w-full" >
        <p className="mb-4 font-bold">محتوای اصلی سایت</p>
        <div className="flex flex-col gap-4">
          {
            items.map(item => {
              return(
                <Item key={item.id} item={item}/>
              )
            })
          }
        </div>
      </main>
      
      <footer className="footer w-full bg-blue-200 p-5" >
        فوتر
      </footer>

      {/* Add the TourGuide component */}
      <TourGuide items={items} />
    </div>
  );
};

export default Home;
