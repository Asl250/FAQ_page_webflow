import { useState } from "react";
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'

const FAQ = () => {
    const  [toggle, setToggle] = useState(1)
        function updateToggle(id: number){
        setToggle(id)
    }


    const [drop, setDrop] = useState(false)
    const dropDown = () =>{
        setDrop(!drop)
    }

    const [drop2, setDrop2] = useState(false)
    const dropDown2 = () =>{
        setDrop2(!drop2)
    }

    
    const [drop3, setDrop3] = useState(false)
    const dropDown3 = () =>{
        setDrop3(!drop3)
    }

    const [drop4, setDrop4] = useState(false)
    const dropDown4 = () =>{
        setDrop4(!drop4)
    }

    return(
        <div className="lg:flex lg:mx-[10%] my-[150px]">
        <div className="lg:bg-[#F4F4F4] lg:w-[40%] max-sm:grid-cols-2 text-center py-10">
            <h1 className="text-[#37393F] font-bold text-4xl block">Categories</h1>

            <div className="lg:block sm:flex sm:justify-between sm:mx-[20%]">
                <button onClick={() => updateToggle(1)} className="block text-2xl hover:bg-[#6B77E5] lg:w-[90%] h-[70px]  
                                border-0 hover:border-none hover:rounded-lg hover:text-white
                                transition ease-in-out delay-100 sm:mt-9 max-sm:mx-[15%] max-sm:text-2xl max-sm:w-[70%]">Main Question</button>

                <button onClick={() => updateToggle(2)} className="block text-2xl hover:bg-[#6B77E5] lg:w-[85%] h-[70px]  
                                border-0 hover:border-none hover:rounded-lg hover:text-white
                                transition ease-in-out delay-100 sm:mt-9 max-sm:mx-[15%] max-sm:text-2xl max-sm:w-[70%]">Common Queries</button>

            </div>
            
            <div className="lg:block sm:flex sm:justify-between sm:mx-[20%]">
            
                <button onClick={() => updateToggle(3)} className="block text-2xl md:my-[37px] hover:bg-[#6B77E5] lg:w-[85%] h-[70px]  
                                    border-0 hover:border-none hover:rounded-lg hover:text-white
                                    transition ease-in-out delay-100 max-sm:mx-[15%] max-sm:text-2xl max-sm:w-[70%]">General question</button>

                <button onClick={() => updateToggle(4)} className="block text-2xl hover:bg-[#6B77E5] lg:w-[85%] h-[70px]  
                                border-0 hover:border-none hover:rounded-lg hover:text-white
                                transition ease-in-out delay-100 mb-9 sm:mt-9 max-sm:mx-[15%] max-sm:text-2xl max-sm:w-[70%]">Legal information</button>
            </div>
           
           
        </div>
        <div className="lg:w-[65%] lg:ml-[10%] h-[500px] sm:w-[60%] sm:mx-[20%] max-sm:mx-[10%]">

            {/* toggle 1 */}
            <div className={toggle === 1 ? 'block md:grid-rows-4 space-y-12' : 'hidden'}>
                <div id="1" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown} className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">How does our pricing works ?</p>
                        {drop ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div id="2" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown2}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">How does our pricing works ?</p>
                        {drop2 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop2 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div   id="3" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown3}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">How does our pricing works ?</p>
                        {drop3 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop3 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div id="4" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown4}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">How does our pricing works ?</p>
                        {drop4 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop4 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
            </div>


            {/* toggle 2 */}
            <div className={toggle === 2 ? 'block md:grid-rows-4 space-y-12' : 'hidden'}>
                <div id="1" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown} className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">Etiam maximus non eros ac congue. Nullam non augue libero. </p>
                        {drop ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div id="2" className="block border-[1px] border-[#E3E3E3] p-4">
                    <div onClick={dropDown2}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">Etiam maximus non eros ac congue. Nullam non augue libero. </p>
                        {drop2 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop2 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div   id="3" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown3}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">Etiam maximus non eros ac congue. Nullam non augue libero. </p>
                        {drop3 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop3 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div id="4" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown4}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">Etiam maximus non eros ac congue. Nullam non augue libero. </p>
                        {drop4 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop4 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
            </div>



            {/* toggle 3 */}
            <div className={toggle === 3 ? 'block md:grid-rows-4 space-y-12' : 'hidden'}>
                <div id="1" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown} className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">How does our pricing works ?</p>
                        {drop ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div id="2" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown2}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">How does our pricing works ?</p>
                        {drop2 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop2 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div   id="3" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown3}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">In a aliquet eros, malesuada ornare odio. </p>
                        {drop3 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop3 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div id="4" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown4}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">How does our pricing works ?</p>
                        {drop4 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop4 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
            </div>


            {/* toggle 4 */}
            <div className={toggle === 4 ? 'block md:grid-rows-4 space-y-12' : 'hidden'}>
                <div id="1" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown} className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">In a aliquet eros, malesuada ornare odio. </p>
                        {drop ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div id="2" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown2}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">In a aliquet eros, malesuada ornare odio. </p>
                        {drop2 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop2 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div   id="3" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown3}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">In a aliquet eros, malesuada ornare odio. </p>
                        {drop3 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop3 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
                <div id="4" className="block border-[1px] border-[#E3E3E3]  p-4">
                    <div onClick={dropDown4}  className="flex justify-between">
                        <p className="text-[#37393F] text-xl font-bold">In a aliquet eros, malesuada ornare odio. </p>
                        {drop4 ? <AiOutlineArrowUp size={30} className='ease-in-out duration-500'/> : <AiOutlineArrowDown size={30} className='ease-in-out duration-500'/>}
                    </div>
                        <p className={drop4 ? 'block text-lg text-[#7D7D7D]' : 'hidden'}>
                            Quisque in faucibus purus. Mauris rhoncus, neque et sodales luctus, diam urna pretium dui, vitae iaculis nisi 
                            quam at risus. Ut porta molestie velit. Nunc maximus, nibh sed hendrerit gravida, sem risus blandit erat, vel gravida 
                        </p>
                </div>
            </div>

            
        </div>
    </div>
    )
    
    }

export default FAQ