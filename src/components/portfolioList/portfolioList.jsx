import React from 'react'
import './portfolioList.scss'

export default function PortfolioList({title,active,setSelect,id}) {
  return (
    <li className={active ? "portfolioList active": "portfolioList"} onClick={()=>setSelect(id)}>
        {title}
    </li>
  )
}
