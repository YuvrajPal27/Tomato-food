import {assets} from "../../assets/assets"
const AppDownload = () => {
  return (
    <div id="app-download" className="m-auto mt-25 text-[max(3vw,20px)] text-center font-medium">
        <p>For Better Experience Download <br /> Tomato App</p>
        <div id="app-download-platforms" className="flex justify-center gap-[max(2vw,10px)] mt-10 ">
            <img src={assets.play_store} className="w-[max(30vw,120px)] max-w-45 transition-all transition-duration-0.5 cursor-pointer hover:scale-105" alt="App Store" />
            <img src={assets.app_store} className="w-[max(30vw,120px)] max-w-45 transition-all transition-duration-0.5 cursor-pointer hover:scale-105" alt="Play Store" />
        </div>
    </div>
  )
}

export default AppDownload