import mainlogo from '../../img/Whitecollar.png'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
      <section className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3'>
        <img src={mainlogo} className="w-[80px] h-[50px]" alt="Flowbite Logo"/>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Teams</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Prices</a>
            </li>
            <li>
              <a href="#" className='text-lg'>Contact Us</a>
            </li>
            <li>
              <a href="#" className='border-0 bg-[#6B77E5] p-4 ml-6'>Get Consulting</a>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} className='text-black'/> : <AiOutlineMenu size={30} className='text-black ml-[100px]'/>}
        </div>
        <ul className={nav ? 'z-10 fixed left-0 top-0 w-[60%] h-full fill-[rgba(255,255,255,0.91)] backdrop-blur-[9.5px] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <img src={mainlogo} className="w-[80px] h-[50px] mt-8 mb-10" alt=""/>
          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-200 hover:ml-[30px] ml-[10px]">
            <a className="text-2xl" href="#">Home</a>
          </li>
          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-200 hover:ml-[30px] ml-[10px]">
            <a className="text-2xl" href="#">About Us</a>
          </li>

          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-200 hover:ml-[30px] ml-[10px]">
            <a className="text-2xl" href="#">Teams</a>
          </li>
          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-200 hover:ml-[30px] ml-[10px]">
            <a className="text-2xl" href="#">Prices</a>
          </li>
          <li className="hover:text-[#2C679E] hover:ease-in hover:duration-200 hover:ml-[30px] ml-[10px]">
            <a className="text-2xl" href="#">Contact Us</a>
          </li>
        </ul>
      </section>
  )
}

export default Navbar