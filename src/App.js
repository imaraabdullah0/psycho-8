import React from "react";
// import {MenuIcon} from '@heroicons/react';

function App() {
  return (
   <div className='text-center cursor-pointer items-center border p-4rem bg-slate-300 font-mono justify-between	font-[900] text-lg drop-shadow-md brightness-90	flex	z-10'>
   <h2 className='text-3xl pl-[10px] font-bold mr-4rem text-white hover:text-blue-100'>PSYCHO CODING</h2>
    <ul className=' hidden md:flex text-white flex text-sm  justify-between mr-[5px]'>
      <li className='ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-blue-300'>Home</li>
      <li className='ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-blue-300'>About</li>
      <li className='ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-blue-300'>My Works</li>
      <li className='ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-blue-300'>Contact</li>
    </ul>
    <div className='hidden md:flex pr-4'>
       <button className='hover:-translate-y-1 hover:scale-110 hover:text-yellow-100 border-none text-sm bg-transparent mr-4 text-blue-400'>Sing in</button>
       <button className='px-2 py-0.5 bg-orange-200 rounded hover:-translate-y-1 hover:bg-blue-100 hover:text-red-400 px-8 py-3 text-sm text-gray-500'>Sing up</button>
    </div>

   </div>
  );
}

export default App;
