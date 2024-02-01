import Image from 'next/image';
import logo from '@/Assets/images/logo.svg'
import { FaDollarSign } from "react-icons/fa";

import { HtmlHTMLAttributes } from 'react';

export default function Home() {
  return (
   <div className="min-h-screen w-full bg-slate-300 flex justify-center items-center flex-col gap 10">
      <Image src={logo} alt = "logo"/>
      <div>
        {/* left section  */}
        <div className='flex justify-center m-12'>
          {/* Bill */}
          <section className = 'bg-white p-4 rounded-xl'>
          <p>Bills</p>
            <input  className='text-right bg-slate-200 border-none w-[300px] rounded-md h-8' type="number" placeholder="0" />
            <FaDollarSign/>
          </section>
        </div>
      </div>
   </div>
  );
}

function label(props:React.
  HtmlHTMLAttributes<HTMLLabelElement>){
  return <label {...props} className=''/>
}
