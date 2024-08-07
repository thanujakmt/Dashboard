
import { useState } from 'react'
import { PiSquaresFourFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import 'react-circular-progressbar/dist/styles.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import HomePageIconsData from './data/HomePageIconsData';
import HomePageIcons from './components/HomePageIcons';
import NavBarIconsData from './data/NavBarIconsData';
import NavBarIcons from './components/NavBarIcons';
import Section3 from './components/Section3';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className='h-auto bg-gray'>
        <div className=' flex flex-col md:flex-row md:items-center md:justify-between md:p-5 p-2 gap-4 '>
          <div className=' flex items-center justify-between md:justify-center gap-8'>
            <PiSquaresFourFill onClick={() => handleMenuToggle()} className=' text-sky_blue text-[3em]' />
            <div className=' flex relative items-center border border-gray '>
              <IoSearch className=' text-white text-[1.5em] absolute  pl-2' />
              <input type="text" placeholder='Search...' className=' outline-none bg-very_light_grat rounded-[10px] w-52 text-white pl-10 p-1 placeholder:text-white' />
            </div>
          </div>
          <div className=' flex md:items-center md:justify-center justify-end p-2 gap-5'>
            {
              HomePageIconsData.map((item) => {
                return <HomePageIcons key={item.id} data={item} />
              })
            }
            <img src="/images/02.jpg" className=' h-10 rounded-[50%]' alt="" />
          </div>
        </div>
        <div className=' flex'>
          <div className={`flex flex-col justify-between h-[500px] md:h-[800px] md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className='flex flex-col gap-8'>
              {
                NavBarIconsData.map((item) => {
                  return <NavBarIcons key={item.id} data={item} />
                })
              }
            </div>
            <IoMdLogOut className=' text-very_light_grat1 h-7 w-16 pl-2 cursor-pointer mb-2' />
          </div>
          <div className='w-full bg-black overflow-hidden'>
            <div className=' flex justify-center md:justify-start m-5 w-auto'>
              <h1 className=' text-white text-[1.6em] font-[700]'>Dashboard</h1>
            </div>
            <div className=''>
              <div className=' p-2'>
                <Section1 />
              </div>
              <div className=' flex flex-col md:flex-row '>
                <Section2 />
              </div>
              <div className=''>
                <Section3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
