import React from 'react'
import Card from './Card';
export default function Trending() {
    const trending = 6;
    var trendingsong=[];
    var a=0;
    for(var i=0; i<trending; i++){
        trendingsong.push({Card:<Card/>,key:i});
      }
  return (
    <div className="scrolled trending">
          {trendingsong.map(i=>
          {return <Card key={a++}/>}
        )}  
        </div>
  )
}
