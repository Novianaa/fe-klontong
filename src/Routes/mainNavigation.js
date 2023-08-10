import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import DetailsProduct from "../Pages/Details"

const MainNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:title" element={<DetailsProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default MainNavigation