import { useState } from 'react'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const [toggleSocial, setToggleSocial] = useState(false);
  return (
    <>
      <img className='bg-blue-500 w-[30px] h-[30px] absolute top-5 right-5 z-[10] cursor-pointer'
        src={toggle ? close : menu}
        onClick={() => setToggle(!toggle)}
      />
      {toggle && <div className="bg-black absolute top-0 right-0 h-screen w-[200px]">
        <div className='text-white text-[25px] ml-10'>
          <h1 className='mt-[70px]'>Product</h1>
          <h1>About</h1>
          <div>
            <button onClick={() => setToggleSocial(!toggleSocial)}>Socials</button>
            {toggleSocial && <div className='ml-2'>
              <h1>Instagram</h1>
              <h1>Facebook</h1>
              <h1>Youtube</h1>
            </div>}
          </div>
          <h1>Contact</h1>
        </div>
      </div>}
    </>
  )
}