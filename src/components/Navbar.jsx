import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Navbar() {
  return (
    <div className="w-full h-[70px] flex flex-row items-center justify-between bg-blue-500  ">
      <h1 className="text-[20px] ml-10">REACT APP</h1>
      <div className="flex flex-row gap-5 text-[20px]">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
      </div>

      <div className='flex flex-row gap-[45px]'>
        <button
          className="bg-yellow-700 h-[40px] w-[80px] hover:bg-blue-700 text-white rounded text-centertext-[20px] font-bold p-2 mr-[80px]"
        >Contact</button>
        <Sidebar />
      </div>
    </div>

  )
}
