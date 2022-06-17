import React from 'react'
// import { ArrowDownward, ArrowUpward } from "@material-ui/icons"


function Revenue() {
  return (
    <div className="featured">
    <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,144</span>
            <span className="featuredMoneyRate">-232
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
    </div>
    
    <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,144</span>
            <span className="featuredMoneyRate">-232 
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
    </div>
    
    <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,144</span>
            <span className="featuredMoneyRate">-232 
            </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
    </div>
    </div> 
  )
}

export default Revenue
