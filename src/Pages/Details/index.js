import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { GetDetailsProduct } from "../../Store/Actions/products"
import './styles.css'

const DetailsProduct = () => {
  const location = useLocation()
  let { data } = useSelector((s) => s.details)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetDetailsProduct(location.state.id))
  }, [dispatch, location.state.id])
  return (
    <>
      <div className="wrapper-details">
        <div className="wrapper-left">
          <img src={data?.images} alt={data?.title} className='image-product' />
          <div className="text-price">${data?.price}</div>
        </div>
        <div className="wrapper-right">
          <h2>{data?.title}</h2>
          <div className="">{data?.description}</div>
          <div className="">{data?.category?.name}</div>
        </div>
      </div>
    </>
  )
}
export default DetailsProduct