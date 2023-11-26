import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Product() {
    // let Product=useLocation().state;
    let id= useParams().id;
    let [Product,setProduct] = useState([]);
    let getData = async ()=>{
        let res = await axios.get(`https://fakestoreapi.com/products/`+id)
        setProduct(res.data);
        console.log(Product)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
<>
 
<section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Latest Products
        </h2>
  
      
      </div>
      <div className="row"> 
   



        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="box">
            <a href>
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
            </a>
          </div>
        </div>

  
  
  
      </div>
      <div className="btn-box">
        <a href>
          View All Products
        </a>
      </div>
    </div>
  </section>
</>
  )
}

export default Product