import './index.css'
import React, { useState } from "react";
import Trainings from '../Trainings'
import Meetups from '../Meetups';
import Webinars from '../Webinars'
import Conference from '../Conference'
import Videos from '../Videos'
import Pm from '../Pm'
import Blogs from '../Blogs'
import Podcasts from '../Podcasts'

const Banner = () => {
    const [rows,setrows] = useState(<></>);
    const [curr,setcurr] = useState([]);
    const [sel,setsel] = useState(false);
    function sty(e){
        setcurr((prev)=>[...prev,e.target]);
        e.target.style.backgroundColor="yellow";
        e.target.style.color="black";
        e.target.style.textShadow="0 0 0 black";
    }
    function rm(){
        if(sel){
            let el=curr[curr.length-1];
            el.style.backgroundColor="transparent";
            el.style.color="white";
            el.style.textShadow="0 0 2px black";
        }
        else{
            setsel(true);
            document.getElementById("display").style.border="2px solid yellow";
        }
    }
    const xyz = ()=>{
        setrows(<></>);
    }
    return (
        <div id="banner_holder" onMouseLeave={()=>{setrows(<></>); rm(); document.getElementById("display").style.border="none"; setsel(false);}}>
            <div id="banner">
                <div id="contents">
                    <a href='#trainings_holder' onMouseOver={(e)=>{setrows(<Trainings/>); rm(); sty(e);}} onClick={xyz}>Trainings</a>
                    <a href='#meetups_holder' onMouseOver={(e)=>{setrows(<Meetups/>); rm();sty(e);}} onClick={xyz}>Meetups</a>
                    <a href='#webinars_holder' onMouseOver={(e)=>{setrows(<Webinars/>); rm();sty(e);}} onClick={xyz}>Webinars</a>
                    <a href='#conference_holder' onMouseOver={(e)=>{setrows(<Conference/>);rm(); sty(e);}} onClick={xyz}>Conference</a>
                    <a href='#videos_holder' onMouseOver={(e)=>{setrows(<Videos/>); rm();sty(e);}} onClick={xyz}>Videos</a>
                    <a href='#pm_holder' onMouseOver={(e)=>{setrows(<Pm/>); rm();sty(e);}} onClick={xyz}>PM Speak Series</a>
                    <a href='#blogs_holder' onMouseOver={(e)=>{setrows(<Blogs/>);rm(); sty(e);}} onClick={xyz}>Blogs</a>
                    <a href='#podcasts_holder' onMouseOver={(e)=>{setrows(<Podcasts/>);rm(); sty(e);}} onClick={xyz}>Podcasts</a>
                    <a href='#intro_holder' onMouseOver={(e)=>{setrows(<></>); rm();sty(e);}} onClick={xyz}>Be A Speaker</a>
                    <a href='#intro_holder' onMouseOver={(e)=>{setrows(<></>);rm(); sty(e);}} onClick={xyz}>Be A Volunteer</a>
                    <a href='#intro_holder' onMouseOver={(e)=>{setrows(<></>);rm(); sty(e);}} onClick={xyz}>About Us</a>
                </div>
                <div id="display">
                    {rows}
                </div>
            </div>
        </div>
     );
}
 
export default Banner;