import React, { useState } from 'react'
import './works.scss'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data=[
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://files.codingninjas.in/438375-17407.webp",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:  
        "https://files.codingninjas.in/438375-17407.webp",
      featured: true,
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://files.codingninjas.in/438375-17407.webp",
    },
  ]

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  

  return (
    <div className='works' id="works">
    <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
      {data.map((d) => ( <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <div className="imgContainer">
                <img src={d.icon} alt="" />
              </div>
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
              <span>Projects</span>
            </div>
          </div>
          <div className="right">
            <img src={d.img} alt="" />
          </div>
        </div>
      </div>
      ))}
    </div>
    <img src="assets/arrow.png" className='arrow left' alt=""  onClick={()=>handleClick("left")}/>
    <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=>handleClick("right")}/>
    </div>
  )
}
