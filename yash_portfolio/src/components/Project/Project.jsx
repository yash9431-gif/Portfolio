import React from 'react'
import './Projects.css'
import homedeput from "./Images/homedeput.png"
import dineout from "./Images/dineout.png"
import xoono from "./Images/Xoono.png"
import git from "./Images/git.png"
import dep from "./Images/deployed.png"

// import github from "./Images/git.png"

const Project = () => {
  return (
    <div className='mainproject' id='project'>
      <div className='prmain' >
          <h1>PROJECTS</h1>
          <div className='card'>
        <div className='card1'>
          <h3>HOME DEPUT</h3>
          <img src={homedeput} alt="" />
          <p>Its an e-commerce commonly known as Home Depot, is the largest home improvement retailer in the United States</p>
          <p>
            HTML
            CSS
             JAVA-SCRIPT
          </p>
            <div className='iconfoot'>
              <button>
                  <a href="https://github.com/yash9431-gif/HomeDepot"><img src={git} alt="" /></a>
                </button>   
                <button>
                <a href="https://trusting-leavitt-137a56.netlify.app/"><img src={dep} alt="" /></a>
              </button>
          
          </div>
        </div>
        

          <div className='card1'>
          <h3>DINEOUT ClONE</h3>
          <img src={dineout} alt="" />
          <p>It provides users with exciting offers on a plethora of restaurants, exclusive discounts on buffets, complimentary dishes & a lot more</p>
          <p>
            HTML
            CSS
            JAVA-SCRIPT
            
          </p>
            <div className='iconfoot'>
              <button>
                  <a href="https://github.com/yash9431-gif/Dinout"><img src={git} alt="" /></a>
              </button>
              <button>
                <a href="https://dinout-zeta.vercel.app/"><img src={dep} alt="" /></a>
              </button>
          
          </div>
        </div>

        <div className='card1'>
          <h3>YOOX ClONE</h3>
          <img src={xoono} alt="" />
          <p>Yoox is a portal for buying products for both men and women.  Their target audience ranges from kids to adolescents to teens and young. </p>
          <p>
            HTML
            CSS
            JAVA-SCRIPT
            Mongo-Db
            Express-JS
              
          </p>
            <div className='iconfoot'>
              <button>
                <a href="https://github.com/yash9431-gif/Dinout"><img src={git} alt="" /></a>
              </button>
               <button>
                 <a href="https://rococo-maamoul-64e2db.netlify.app/"><img src={dep} alt="" /></a>
              </button>
           
          </div>
   
        </div>

        
        

          </div>
      </div>
      
      </div>
  )
}

export default Project