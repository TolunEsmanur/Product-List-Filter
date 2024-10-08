import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import {products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from "react";


const ProductsList = () => {

  const [search, setSearch] = useState("")
  
  

  

  return (
    <>
    <Header
   
    categoriess={categories}
   /> 

    <Form.Control
      onChange={(e)=>setSearch(e.target.value)}
      placeholder="Search Product..."
      type="search"
      className="w-50 m-auto"
    /> 
    
       <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">

          {
          products.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase().trim())).map((ürün)=>(
              <ProductCard key={ürün.id} {...ürün}/>
            ))
          }
          
        </Row>
      </Container>

      

     
    </>
  ) 
};

export default ProductsList;


