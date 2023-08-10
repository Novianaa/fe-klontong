import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { GetProducts } from '../../Store/Actions/products'
import './styles.css'

const Home = () => {
  let { data, loading, } = useSelector((s) => s.products)
  // console.log('first', data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetProducts())
  }, [dispatch])
  const navigate = useNavigate()

  return (
    <>
      <div className="wrapper-products">
        {data.map((product, index) => {
          return (
            <div className="card-product" >
              <img src={product.images} alt={product.title} className='image-product' />
              <div className="wrapper-text">
                <div className="name-product">{product.title}</div>
                <div className="price-product">${product.price}</div>
                <button onClick={(id, title) => navigate(`/details/${product.title}`, { state: { id: product.id, title: product.title } })}>details</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Home