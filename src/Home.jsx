import React from "react";
import ReactDom from "react-dom";
function Home() {
  return (
    <>
      <div class="flex space-x-4 justify-center bg-green-400">
        <div class="bg-blue-500 text-white p-4">Item 1</div>
        <div class="bg-green-500 text-white p-4">Item 2</div>
        <div class="bg-red-500 text-white p-4">Item 3</div>
      </div>
    </>
  );
}

export default Home;
