import { motion } from 'framer-motion'
import { useState } from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

export default function ImageSlider() {
  const [positionIndex, setPositionIndex] = useState(0, 1, 2, 3, 4)

  const handleNext = () => {
    setPositionIndex((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
      return updatedIndexes;
    })
  }
  const images = [img1, img2, img3, img4, img5]

  const positions = [center, left1, left, right, right1]

  const imageVariants = {
    center: { x: '0%', scale: 1, zindex: 5 },
    left1: { x: '-50%', scale: 0.7, zindex: 2 },
    left: { x: '-90%', scale: 0.5, zindex: 1 },
    right: { x: '90%', scale: 0.5, zindex: 1 },
    rght1: { x: '50%', scale: 0.7, zindex: 2 }
  }
  return (
    <div className='flex items-center flex-col justify-center bg-h-screen'>
      {images.map((image, index)=>(
        <motion.img
          src={image}
          alt={image}
          key={index}
          className='rounded-[12px]'
          initial="center"
          animate={positions(setPositionIndex[index])}
          variants={imageVariants}
          transition={{ duration: 2 }}
          style={{width: '40%', position:'absolute'}}         
          />
      ))}
      <button className='text-white mt-[40px] bg-indigo-400 rounded-md py-4 px-2' onClick={handleNext}>Next</button>
    </div>


  )
}