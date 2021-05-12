import { Button } from 'bootstrap'
import React from 'react'
import "./Boddy.css"
export function Boddy() {
    let clients = [
        {
          
          title: "Individual",
          description: "Therapy for me",
          color: "#186C82",
          backgroundColor: "#D0D9EB",
          
        },
        {
          
          title: "Couples",
          description: "Therapy for us",
          color: "#186C82",
          backgroundColor: "#D0D9EB",
        },
        {
          
          title: "Teens",
          description: "For age 13 19",
          color: "#186C82",
          backgroundColor: "##fff",
        },
        {
            
            title: "Psychiatry",
            description: "Midication mgmt",
            color: "#186C82",
            backgroundColor: "##fff",
          },
      ];
    return (
        <div>
            { 
            <div >
                <div class="video_home">
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src="https://assets-global.website-files.com/5f6b627361bad8cad0fc5c99/605905e7e0e3ca7eaa7af26d_girl-on-phone-transcode.mp4" type="video/mp4"></source>
                    </video>       
                    <div class="content">         
                        <h1> Feeling better starts<br />with a single message</h1>
                        <h5>What type of support are you looking for?</h5>
                    </div>
                    <div class="map">
                    {clients.map((el) => (
                            <div className="card" style={{ backgroundColor: el.backgroundColor , color:el.color }}>
                            
                            <h3>{el.title}</h3>
                            <p>{el.description}</p>
                            </div>
                    ))}
                    </div>
                </div> 
            </div>      
            }
        </div>
    )
}
