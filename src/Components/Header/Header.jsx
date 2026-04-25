
const Header = () => {
  return (
    <div id='header' className='animate-fadein h-[34vw]  my-auto bg-[url("/header_img.png")] bg-no-repeat bg-contain relative'>
        <div id="header-contents" className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] '>
            <h2 className='font-semibold text-white text-[max(4vw,22px)]'>Order your favourite food here</h2>
            <p className='text-white text-[1vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties. Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time.</p>
            <button className=' font-semibold text-slate-600 px-[1.5vw] py-[0.5vw] text-[max(1vw,18px)] bg-white rounded-3xl border-none'>View Menu</button>
        </div>
    </div>

    
  )
}

export default Header