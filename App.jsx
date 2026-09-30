import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function Sobre() {
 return (
   <div className="pagina">
     <h1>Adimilson</h1>
     <h1>Sobre mim</h1>


     <p><strong>Nome:</strong> Adimilson Júnior de Almeida Dorneles</p>
     <p><strong>Curso:</strong> Técnico em Desenvolvimento de Sistemas</p>
     <p><strong>Aonde eu faço Curso:</strong>Senai SC</p>
     <p><strong>Cidade:</strong> Palhoça - SC</p>



     <h2>Contato</h2>
     <li>insta:junior_160226</li>
 
    


     <h2>Áreas que gosto</h2>
     <ul>
       <li>Programação</li>
       <li>Desenvolvimento Web</li>
       <li>Tecnologia</li>
       <li>Progamçao de Aplicativo </li>
       <li>Modelagem de Sistema</li>
     </ul>
     
   <h2>Tecnologias que conheço</h2>
   <ul>
   <li>HTML</li>
   <li>CSS</li>
   <li>JavaScript</li>
   <li>React</li>
   </ul>


   <h2>Tecnologias que desejo aprender</h2>
   <ul>
   <li>Node.js</li>
   <li>Banco de Dados</li>
   <li>Progamação de Aplicativo</li>
   <li>Modelagem de Sistema</li>
     </ul>
     <img src="https://unibta.edu.br/wp-content/uploads/2025/06/o-que-analise-e-desenvolvimento-de-sistemas-faz-em-bancos.jpg" alt=""/>
   </div>
 );
}


export default Sobre;
