import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Shop() {
const[Products,setProducts]=useState([]);
let getData= async()=>{
  let reso= await axios.get("https://fakestoreapi.com/products");
  console.log(reso.data)
  setProducts(reso.data)

}

useEffect(()=>{
  getData()
},[])
 


return (
<>
{/* shop section */}


  
  
    <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Latest Products
        </h2>
  
      
      </div>
      <div className="row"> 
   
        {

 Products.map((Product)=>(
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <Link to={`/product/`+Product.id} state={Product}>
              <div className="img-box">
                <img src= {Product.image}width={'100px'}height={"100px"} alt />
              </div>
              <div className="detail-box">
                <h6>
                  {Product.title}
                </h6>
                <h6>
                Price
                  <span>
                  {Product.price}
                  </span>
                </h6>
              </div>
              <div className="new">
                <span>
                  New
                </span>
              </div>
            </Link>
          </div>
        </div>
  
  ))}
  
  
  
      </div>
      <div className="btn-box">
        <a href>
          View All Products
        </a>
      </div>
    </div>
  </section>

  
{/* end shop section */}



</>
  )
}

export default Shop