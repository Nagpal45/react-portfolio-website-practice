import React, { useEffect, useState } from 'react'
import './portfolio.scss'
import PortfolioList from '../portfolioList/portfolioList'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data'

export default function Portfolio() {
const[select, setSelect] = useState("featured")
const [data, setData] = useState([])

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ]

  useEffect(() => {
    switch(select){
      case "featured":
        setData(featuredPortfolio)
        break;
      case "web":
        setData(webPortfolio)
        break;
      case "mobile":
        setData(mobilePortfolio)
        break;
      case "design":
        setData(designPortfolio)
        break;
      case "content":
        setData(contentPortfolio)
        break;
      default:
        setData(featuredPortfolio)
    }
  }, [select])



  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList title={item.title} active={select === item.id} setSelect={setSelect}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
      {data.map((d) =>( 
        <div className="item">
          <img src={d.img} alt="" />
          <h3>
            {d.title}
          </h3>
        </div>
      ))}
      </div>
    </div>
  )
}