
const Header = () => {
  return (
    <div id='header' className='animate-fadein h-[34vw] my-auto bg-[url("/header_img.png")] bg-no-repeat bg-contain relative'>

        <div id="header-contents" className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]  w-full md:max-w-[65%] lg:max-w-[45%]'>

            <h2 className='font-semibold text-white text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Order your favourite food here</h2>

            <p className='text-white text-[1vw] hidden md:block'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time.</p>

            <button className=' font-semibold text-slate-600 px-4 py-2 text-sm sm:text-base md:px-6 md:py-3 bg-white rounded-3xl border-none'>View Menu</button>

        </div>
    </div>

    
  )
}

export default Header