import React from "react";

const Navigation = () => {

  return (
    <nav className="bg-[#3f3ff4] w-full h-12 py-3">
        
          <div className="flex justify-center">
                <div className="mx-auto h-1">
                  <a href="#" className="text-white hover:bg-[#5b53f7]  px-6 py-3 rounded-md text-m">Home</a>
                  <a href="#" className="text-white hover:bg-[#5b53f7] px-6 py-3 rounded-md text-m">About</a>
                  <a href="#" className="text-white hover:bg-[#5b53f7] px-6 py-3 rounded-md text-m">Contact</a>
                  <a href="#" className="text-white hover:bg-[#5b53f7] px-6 py-3 rounded-md text-m">FAQ</a>
                  <a href="#" className="text-white hover:bg-[#5b53f7] px-6 py-3 rounded-md text-m">Download</a>
                </div>
            </div>
            <div className="h-8 w-8 text-left">
              <a href="#" className="text-white px-8 py-15 text-m">MUHAMMAD_ALI</a>
            </div>
    </nav>
  );
};

export default Navigation;
