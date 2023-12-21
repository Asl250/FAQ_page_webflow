import Phone from '../../img/Call.png'
import Ictn from '../../img/Location (2).png'
import Msg from '../../img/Message (1).png'
import Mainlogo from '../../img/Whitecollar.png'
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='bg-[#37393F]'>
            <div className='text-white'>
                <div className="w-full max-w-screen-xl mx-auto p-4 ">
                    <div className="w-full mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between max-sm:mb-5">
                        <img src={Mainlogo} className="w-[80px] h-[50px] max-sm:mb-3 ml-4 sm:justify-center max-sm:justify-center" alt="Flowbite Logo" />
                        <ul className="flex flex-wrap text-white items-center  text-sm font-medium sm:mb-0 dark:text-gray-400 max-sm:gap-5">
                            <li className='ml-10 inline-flex '>
                                <img src={Phone} alt='phone'/>
                                <a href='/' className='text-lg mt-3 ml-2'>Call us <br/> <span>+01 569 896 654</span></a>
                            </li>
                            <li className='ml-10 inline-flex '>
                                <img src={Msg} alt='mail'/>
                                <a href='/' className='text-lg mt ml-2'>Mail us <br/>
                                    <span className='text-md'>Info@Example.com</span></a> <br/>

                            </li>
                            <li className='ml-10 inline-flex '>
                                <img src={Ictn} alt='location'/>
                                <a href='/' className='text-lg mt-3 ml-2'>Location <br/> <span>Amsterdam, 109-74</span></a>
                            </li>
                        </ul>
                    </div>
                    <hr className="border-[#6C6D72] sm:mx-auto dark:border-[#6C6D72] lg:my-5" />
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between max-sm:gap-8">
                        <div>
                            <ul className="flex flex-wrap text-center items-center  text-white gap-[110px] xl:gap-[160px] max-lg:gap-[70px] max-md:gap-[50px] text-lg font-medium max-sm:flex-col max-sm:gap-0">
                                <li>
                                    <span>Home</span>
                                </li>
                                <li>
                                    <span>About Us</span>
                                </li>
                                <li>
                                    <span>Teams</span>
                                </li>
                                <li>
                                    <span>Prices</span>
                                </li>
                                <li>
                                    <span>Contact Us</span>
                                </li>
                                <li>
                                    <span>FAQ</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="border-[#6C6D72] sm:mx-auto dark:border-[#6C6D72] lg:mt-3" />
                </div>
            </div>
            <div className="w-full mx-auto max-w-screen-xl pe-4 pb-6 md:flex md:items-center md:justify-between">
                <span className="text-md text-white sm:text-center dark:text-white ml-3">Copyright © <a href='/' className='text-[#40DDB6]'>WhiteCollar</a></span>
                <ul className="text-white inline-flex">
                    <li className="ml-3">
                        Follow:
                    </li>
                    <li>
                        <FaInstagram className='ml-4'/>
                    </li>
                    <li>
                        <FaFacebook className='ml-2'/>
                    </li>
                    <li>
                        <FaTwitter className='ml-2'/>
                    </li>
                    <li>
                        <FaPinterest className='ml-2'/>
                    </li>
                </ul>
        </div>
    </section>
    )
}

export default Footer