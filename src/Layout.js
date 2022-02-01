import React from 'react';
import  "./Style.css"
import img from "./img.jpg"




export default function Layout() {
  return <div>
       <h1 class="title red">Oussema Chammakhi</h1>
       <br></br>
       <img src="/picture.jpg" ></img>
        <br></br>
       <img src={img} ></img>
       <br></br>
       <iframe width="320" height="240" src="https://www.youtube.com/embed/8jypK2U1AM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

'





       
      
  </div>;
}
