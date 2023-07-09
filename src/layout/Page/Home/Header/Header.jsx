import { Link } from "react-router-dom";
import img from "../../../../../public/IMG20221107180955.jpg"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const myResume ='https://portfolio-website-93580.web.app/jubayer-resume.pdf'
const Header = () => {
    const downloadFile=(url)=>{
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download",fileName);
        document.body.appendChild(aTag);
        aTag.click()
        aTag.remove();
        
    }
    return (
        <>
           <div className="home">
        <div className="home-content md:home-content">
            <h3>Hello, I am </h3>
            <h1>Jubayer Hossain</h1>
            <h3>And I am a <span >Frontend Web Developer |</span></h3>
           <p>
           Let's code my future and shape the world in the advancement of technology.
         </p>
            <div className="social-media">
        <Link to={'https://www.facebook.com/jubayer.hossin.1804'} className="logo"><FaFacebookF /></Link>
        <Link to={'https://twitter.com/Jubayer97681306'} className="logo"><FaTwitter></FaTwitter></Link>
        <Link to={'https://www.linkedin.com/in/jubayer-hossain-26266a27b/'} className="logo"><FaLinkedinIn></FaLinkedinIn></Link>
        <Link to={'https://github.com/Jubayer9'} className="logo"><FaGithub></FaGithub></Link>
            </div>
         <button className="Btn" onClick={()=>{downloadFile(myResume)}}>Download resume</button>
        </div>
       <div className="home-img">
        <img className="Img mask m mask-hexagon-2" src={img} alt="" />
       </div>


           </div>
        </>
    );
};

export default Header;