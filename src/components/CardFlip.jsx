//npm install framer-motion
import { motion } from 'framer-motion'
import {useState} from 'react'
export default function CardFlip(){
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip(){
    if(!isAnimating){
      setIsFlipped(!isFlipped)
      setIsAniating(true)
    }
  }
  return(
    <div className='flex items-center justify-center bg-gradient-b-b h-[700px] cursor-pointer'>
      <div className='flip-card w-[600px] h-[360px] rounded-md' onClick={handleFlip}>
        <motion.div className='flip-card-inner w-full h-full' initial={false} animate={{rotateY: isFlipped? 180 : 360}} transition={{duration:0.6, animationDirection:"normal"}} onAnimationComplete={()=>setIsAnimating(false)}>
          <div className='flip-card-front w-full h-full bg-cover border-[1px] text white rounded-lg p-4' style={{backgroundImage: `url("https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&w=600")`}}>
            <h1 className='text-white text-2xl font-bold'>Sky</h1>
            <p className='text-white'>Live on top of the World.</p>
          </div>
          <div className='flip-card-back w-full h-full bg-cover border-[1px] text white rounded-lg p-4' style={{backgroundImage: `url("https://media.istockphoto.com/id/1126391770/photo/network-and-connection-technology-night-city-background-at-business-center-bangkok-thailand.jpg?b=1&s=612x612&w=0&k=20&c=FbABGRtcC4vls-GaoOShazh0OLzPWZ5EFwZwnSj-yWg=")`}}>
            <h1 className='text-white text-2xl font-bold'>Earth</h1>
            <p className='text-white'>or in the maze of the city.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}