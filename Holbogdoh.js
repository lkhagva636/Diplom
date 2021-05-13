import React from 'react'


import Menu from './Menu'
import Footer from './Footer'

export default function Home(){
    return (
        <div>
           <Menu/>
           <footer className="bg-dark text-center text-white">
  
  <div className="container p-4">
    
   
    <div className="row">
    
  <div class="col-sm">
      
     <p style={{fontSize: '.875rem' }}>Оригинал пүүзний дэлгүүр, 2019 оны 10 сарын 5-аас үйл ажиллагаа явуулж эхэлсэн. Монголын хамгийн урт пүүзний дэлгүүр.</p>
    </div>
    <div class="col-sm">
    <p style={{fontSize: '.875rem' }}>ХОЛБОО БАРИХ</p>
    <p style={{fontSize: '.875rem' }}>Хаяг: Жаргалан хотхон, Фоттон гармент дэлгүүр дотор</p>
    <p style={{fontSize: '.875rem' }}>
И-мэйл хаяг: duudmn@gmail.com
</p>
    <p style={{fontSize: '.875rem' }}>Утас: 77205050</p>

    </div>
  
  </div>

      
    
  </div>



  <div className="text-center p-3" style={{backgroundColor:'grey-dark'}}>
    © 2021

  </div>

</footer>

      
        </div>
    )
}