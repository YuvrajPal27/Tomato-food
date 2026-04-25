import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"
import { Route, Routes } from "react-router"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <div>
    <div className="w-[80%] m-auto">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/cart" element={<Cart />} />
        <Route  path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </div>
  )
}

export default App
