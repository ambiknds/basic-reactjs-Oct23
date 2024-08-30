export default function Welcome() {
  return (
    <>
    <div className='bg-fixed bg-cover bg-center' style={{ backgroundImage: `url('https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
    <div className='h-[600px] flex items-center justify-end'>
      <h1 className='text-white text-[75px] text-bold mb-[200px] mr-10'>Begin Your Adventure Now.</h1>
    </div></div>
    <div className='h-[1000px] bg-blue-500'>
      <div className='absolute top-[620px] hover:top-[600px] left-1/2 transform -translate-x-1/2'>
        <div className='h-0 w-0 border-l-[200px] hover:border-b-[100px] border-b-[120px] border-r-[200px] border-l-transparent border-r-transparent border-b-green-500 hover:border-b-blue-500' />
      </div>
      <div className='absolute top-[610px] left-1/2 transform -translate-x-1/2'>
        <div className='h-0 w-0 border-l-[160px] opacity-50 border-b-[100px] border-r-[160px] border-l-transparent border-r-transparent border-b-green-500' />
      </div>
      <div className='absolute top-[620px]' style={{ left: "20%" }}>
        <div className='h-0 w-0 border-l-[200px] opacity-70 border-b-[80px] border-r-[200px] border-l-transparent border-r-transparent border-b-green-500' />
      </div>
      <div className='absolute top-[620px]' style={{ right: "20%" }}>
        <div className='h-0 w-0 border-l-[200px] opacity-70 border-b-[80px] border-r-[200px] border-l-transparent border-r-transparent border-b-green-500' />
      </div>
      <div className='absolute top-[540px]' style={{ left: "10%" }}>
        <div className='h-0 w-0 border-l-[200px] opacity-70 border-b-[180px] border-r-[200px] border-l-transparent border-r-transparent border-b-green-500' />
      </div>
      <div className='absolute top-[540px]' style={{ right: "10%" }}>
        <div className='h-0 w-0 border-l-[200px] opacity-70 border-b-[180px] border-r-[200px] border-l-transparent border-r-transparent border-b-green-500' />
      </div>
      <div className='absolute top-[700px] left-1/2 transform -translate-x-1/2'>
        <div className='h-0 w-0 border-l-[400px] border-t-[80px] border-r-[400px] border-l-transparent border-r-transparent border-t-green-500' />
      </div>
      <div className='absolute top-[700px] left-1/2 transform -translate-x-1/2'>
        <div className='h-0 w-0 border-l-[400px] opacity-50 border-t-[90px] border-r-[400px] border-l-transparent border-r-transparent border-t-green-500' />
      </div>
    </div>
      </>
  )
}