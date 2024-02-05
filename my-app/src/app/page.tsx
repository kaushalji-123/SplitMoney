import Image from 'next/image';
import logo from '@/Assets/images/logo.svg'

// icons
import { FaDollarSign } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";


export default function Home() {
  const tips = [5, 10, 15, 25, 50];
  return (
    <div className="min-h-screen w-full bg-slate-300 flex justify-center items-center flex-col gap 10">
      <Image src={logo} alt="logo" />
      <div>
        {/* left section  */}
        <div className='flex justify-center flex-col m-12 relative'>
          {/* Bill */}
          <section className='bg-white p-4 rounded-xl flex flex-col'>
            <Label>Bill</Label>
            <input className='text-right bg-slate-200 px-2 border-none w-[250px] rounded-md h-9 text-dark-cyan outline-strong-cyan' type="number" placeholder="0" />
            <FaDollarSign className='absolute top-12 left-5 opacity-35' />
            {/* </section> */}
            {/* select-tip */}
            <section className='flex justify-between flex-col gap-2'>
              <Label>Select-Tips %</Label>
              <div className='grid grid-cols-3 gap-2'>
                {tips.map((d, i) => (
                  <TipButton key={i}>{d}%</TipButton>
                ))}

                <input type="number" placeholder="Custom"/>

              </div>
            </section>

            {/* Number of People */}
            <Label>Number of People</Label>
            <input className='text-right bg-slate-200 px-2 border-none w-[250px] rounded-md h-9 text-dark-cyan outline-strong-cyan' type="number" placeholder="0" />
            <MdPeopleAlt className='absolute top-12 left-5 opacity-35' />
          </section>
        </div>
        {/* right-section */}
        <section />
      </div>
    </div>
  );
}

function Label(props: React.
  HtmlHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className='text-[hsl(186,14%,43%)]' />
}

function TipButton(props: React.
  HtmlHTMLAttributes<HTMLLabelElement>) {
  return <button
  {...props}
  className='bg-dark-cyan text-yellow-50 font-semibold w-full h-[38px] rounded' />
}