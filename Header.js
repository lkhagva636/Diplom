
import {Row , Navbar ,Col,Image  } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import zurag from '../img/1.jpg'
import zurag2 from '../img/2.jpg'
import zurag3 from '../img/3.jpg'
import zurag4 from '../img/4.jpg'
import zurag5 from '../img/5.jpg'
import zurag6 from '../img/6.png'
import zurag7 from '../img/lebron.jpg'

export default function Header(){
  const [ner1, setNer1] = useState('')
  const [une1, setUne1] = useState(0)
  const [hymdune1, setHymdune1] = useState(0)
  const [ner2, setNer2] = useState('')
  const [une2, setUne2] = useState(0)
  const [hymdune2, setHymdune2] = useState(0)
  const [ner3, setNer3] = useState('')
  const [une3, setUne3] = useState(0)
  const [hymdune3, setHymdune3] = useState(0)
  const [ner4, setNer4] = useState('')
  const [une4, setUne4] = useState(0)
  const [hymdune4, setHymdune4] = useState(0)
  const [ner5, setNer5] = useState('')
  const [une5, setUne5] = useState(0)
  const [hymdune5, setHymdune5] = useState(0)

  function getPuuz() {
      let req = new XMLHttpRequest();
      req.open('GET', 'http://127.0.0.1:5000/puuz')
      req.responseType = 'json'
      req.addEventListener("load", function() {
          console.log('puuz hariu irlee', req.response);
          setNer1 ( req.response.data[0].ner);
          setUne1 ( req.response.data[0].une);
          setHymdune1 ( req.response.data[0].hymdune);
          setNer2 ( req.response.data[1].ner);
          setUne2 ( req.response.data[1].une);
          setHymdune2 ( req.response.data[1].hymdune);
          setNer3 ( req.response.data[2].ner);
          setUne3 ( req.response.data[2].une);
          setHymdune3 ( req.response.data[2].hymdune);
          setNer4 ( req.response.data[3].ner);
          setUne4 ( req.response.data[3].une);
          setHymdune4 ( req.response.data[3].hymdune);
          setNer5 ( req.response.data[4].ner);
          setUne5 ( req.response.data[4].une);
          setHymdune5 ( req.response.data[4].hymdune);
        
      });
      req.send();
  }
  useEffect(() => {
     getPuuz();
  }, []);
    return (
        <div className="container" style={{backgroundColor:'white'}}>
           <img src={zurag} alt="zurag" style={{width:'100%'}}></img>
           <img src={zurag2} alt="zurag2 " style={{width:'150px' ,marginTop:'-50px' , paddingLeft:'10px' , borderRadius:'10px' , boxSizing:'border-box' ,cursor:'pointer'}}></img>
           <Navbar  expand="lg" style={{backgroundColor:'white', paddingLeft:'50px'}}>
  <Navbar.Brand href="/bugd"  style={{ paddingLeft:'80px', paddingRight:'80px', backgroundColor:'grey' ,textAlign:'center' , borderRadius:'10px' ,color:'white'}}>Бүгд</Navbar.Brand>
  <Navbar.Brand href="#home"   style={{ paddingLeft:'80px', paddingRight:'80px', backgroundColor:'grey' ,textAlign:'center', borderRadius:'10px' , color:'aliceblue'}}>Захиалга</Navbar.Brand>
  <Navbar.Brand href="Hymdral"  style={{ paddingLeft:'80px', paddingRight:'80px', backgroundColor:'grey' ,textAlign:'center', borderRadius:'10px' , color:'aquamarine'}}>Хямдрал</Navbar.Brand>
  <Navbar.Brand href="#home"   style={{ paddingLeft:'80px', paddingRight:'80px', backgroundColor:'grey' ,textAlign:'center', borderRadius:'10px' , color:'pink'}}>Нэмэлт</Navbar.Brand>
  

  
</Navbar>

<Row style={{marginTop:'20px'}}>
<Navbar.Brand style={{paddingLeft:'50px', paddingTop:'50px'}} >Онцлох бараа</Navbar.Brand>
<Col xs={6} md={2}>
      <Image src={zurag4} style={{width:'180px'}} rounded /><br></br>
      <a>{ner1}</a><br></br>
      <a style={{color:'red'}}>{une1}</a>
      <del class="font-light text-gray-800">{hymdune1}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag5}style={{width:'180px'}} rounded /><br></br>
      <a>{ner2}</a><br></br>
      <a style={{color:'red'}}>{une2}</a>
      <del class="font-light text-gray-800">{hymdune2}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag6} style={{width:'180px'}}rounded /><br></br>
      <a>{ner3}</a><br></br>
      <a style={{color:'red'}}>{une3}</a>
      <del class="font-light text-gray-800">{hymdune3}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag7} style={{width:'180px'}}rounded /><br></br>
      <a>{ner4}</a><br></br>
      <a style={{color:'red'}}>{une4}</a>
      <del class="font-light text-gray-800">{hymdune4}</del>
    </Col>
  
  </Row>
  <Navbar.Brand style={{paddingLeft:'50px', paddingTop:'50px'}} >Онцлох бүтээгдэхүүн
</Navbar.Brand>
  <Row style={{marginTop:'20px'}}>

  <Col xs={6} md={2}>
      <Image src={zurag4} style={{width:'180px'}} rounded /><br></br>
      <a>{ner1}</a><br></br>
      <a style={{color:'red'}}>{une1}</a>
      <del class="font-light text-gray-800">{hymdune1}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag5}style={{width:'180px'}} rounded /><br></br>
      <a>{ner2}</a><br></br>
      <a style={{color:'red'}}>{une2}</a>
      <del class="font-light text-gray-800">{hymdune2}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag6} style={{width:'180px'}}rounded /><br></br>
      <a>{ner3}</a><br></br>
      <a style={{color:'red'}}>{une3}</a>
      <del class="font-light text-gray-800">{hymdune3}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag7} style={{width:'180px'}}rounded /><br></br>
      <a>{ner4}</a><br></br>
      <a style={{color:'red'}}>{une4}</a>
      <del class="font-light text-gray-800">{hymdune4}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag6} style={{width:'180px'}}rounded /><br></br>
      <a>{ner3}</a><br></br>
      <a style={{color:'red'}}>{une3}</a>
      <del class="font-light text-gray-800">{hymdune3}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag3} style={{width:'180px'}}rounded /><br></br>
      <a>{ner5}</a><br></br>
      <a style={{color:'red'}}>{une5}</a>
      <del class="font-light text-gray-800">{hymdune5}</del>
    </Col>
   
  </Row>
  
  <Row style={{marginTop:'20px'}}>

  <Col xs={6} md={2}>
      <Image src={zurag4} style={{width:'180px'}} rounded /><br></br>
      <a>{ner1}</a><br></br>
      <a style={{color:'red'}}>{une1}</a>
      <del class="font-light text-gray-800">{hymdune1}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag5}style={{width:'180px'}} rounded /><br></br>
      <a>{ner2}</a><br></br>
      <a style={{color:'red'}}>{une2}</a>
      <del class="font-light text-gray-800">{hymdune2}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag6} style={{width:'180px'}}rounded /><br></br>
      <a>{ner3}</a><br></br>
      <a style={{color:'red'}}>{une3}</a>
      <del class="font-light text-gray-800">{hymdune3}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag7} style={{width:'180px'}}rounded /><br></br>
      <a>{ner4}</a><br></br>
      <a style={{color:'red'}}>{une4}</a>
      <del class="font-light text-gray-800">{hymdune4}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag6} style={{width:'180px'}}rounded /><br></br>
      <a>{ner3}</a><br></br>
      <a style={{color:'red'}}>{une3}</a>
      <del class="font-light text-gray-800">{hymdune3}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag3} style={{width:'180px'}}rounded /><br></br>
      <a>{ner5}</a><br></br>
      <a style={{color:'red'}}>{une5}</a>
      <del class="font-light text-gray-800">{hymdune5}</del>
    </Col>
   
  </Row>
  <Navbar.Brand style={{paddingLeft:'50px', paddingTop:'50px'}} >Шинэ бүтээгдэхүүн
</Navbar.Brand>
  <Row style={{marginTop:'20px'}}>

  <Col xs={6} md={2}>
      <Image src={zurag4} style={{width:'180px'}} rounded /><br></br>
      <a>{ner1}</a><br></br>
      <a style={{color:'red'}}>{une1}</a>
      <del class="font-light text-gray-800">{hymdune1}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag5}style={{width:'180px'}} rounded /><br></br>
      <a>{ner2}</a><br></br>
      <a style={{color:'red'}}>{une2}</a>
      <del class="font-light text-gray-800">{hymdune2}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag6} style={{width:'180px'}}rounded /><br></br>
      <a>{ner3}</a><br></br>
      <a style={{color:'red'}}>{une3}</a>
      <del class="font-light text-gray-800">{hymdune3}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag7} style={{width:'180px'}}rounded /><br></br>
      <a>{ner4}</a><br></br>
      <a style={{color:'red'}}>{une4}</a>
      <del class="font-light text-gray-800">{hymdune4}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag6} style={{width:'180px'}}rounded /><br></br>
      <a>{ner3}</a><br></br>
      <a style={{color:'red'}}>{une3}</a>
      <del class="font-light text-gray-800">{hymdune3}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag3} style={{width:'180px'}}rounded /><br></br>
      <a>{ner5}</a><br></br>
      <a style={{color:'red'}}>{une5}</a>
      <del class="font-light text-gray-800">{hymdune5}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag4} style={{width:'180px'}} rounded /><br></br>
      <a>{ner1}</a><br></br>
      <a style={{color:'red'}}>{une1}</a>
      <del class="font-light text-gray-800">{hymdune1}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag5}style={{width:'180px'}} rounded /><br></br>
      <a>{ner2}</a><br></br>
      <a style={{color:'red'}}>{une2}</a>
      <del class="font-light text-gray-800">{hymdune2}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag6} style={{width:'180px'}}rounded /><br></br>
      <a>{ner3}</a><br></br>
      <a style={{color:'red'}}>{une3}</a>
      <del class="font-light text-gray-800">{hymdune3}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag7} style={{width:'180px'}}rounded /><br></br>
      <a>{ner4}</a><br></br>
      <a style={{color:'red'}}>{une4}</a>
      <del class="font-light text-gray-800">{hymdune4}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag6} style={{width:'180px'}}rounded /><br></br>
      <a>{ner3}</a><br></br>
      <a style={{color:'red'}}>{une3}</a>
      <del class="font-light text-gray-800">{hymdune3}</del>
    </Col>
    <Col xs={6} md={2}>
      <Image src={zurag3} style={{width:'180px'}}rounded /><br></br>
      <a>{ner5}</a><br></br>
      <a style={{color:'red'}}>{une5}</a>
      <del class="font-light text-gray-800">{hymdune5}</del>
    </Col>
   
  </Row><br></br><br></br><br></br>
 
  
  

        </div>
    )
}