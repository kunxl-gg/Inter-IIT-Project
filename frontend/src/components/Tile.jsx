import React from 'react'
import play from './../Images/play.png'

export default function Tile() {
  return (
    <div className="col">
                <div className='Songimg'><img src="https://filmfare.wwmindia.com/content/2022/apr/arijitsingh11650885572.jpg"alt=""/></div>
                <div className='Song'><div className="songname">Hamari Adhuri kahani</div><div className="singername">Arijit Singh<button className='play'><img src={play} alt="" /></button>  
</div>   
            </div>
            
            </div>
  )
}
