import { Link } from "react-router-dom";
import img from '../../../../public/IMG20221107180955.jpg'
const About = () => {
    return (
      <div className=" md:flex About-img 
      drop-shadow-xl">
<img data-aos="zoom-in-down" className="w-56 ml-14  mask mask-triangle-2 " src={img} alt="" />
<div className="flex items-center"> 
  
  <div data-aos="flip-up"
  
data-aos-duration="2000"className=" text-white"
  >
      <h1 className="text-center font-bold  text-5xl skills mt-3"> About For Me</h1>
      <div className=" ml-28 mr-20  grid md:grid-cols-2">
          <p className="mt-5"><span className=" About font-semibold">Name:</span> Jubayer Hossain</p>
          <p className="mt-5"> <span className=" About font-semibold">Nationality:</span> Bangladesh</p>
          <p className="mt-5"><span className=" About font-semibold">Age:</span> 17 Years</p>
          <p className="mt-5"> <span className=" About font-semibold">Language:</span> English,Bangla</p>
          <p className="mt-5"> <span className=" About font-semibold">Address:</span> Lala bag, Dhaka</p>
          <p className="mt-5"><span className=" About font-semibold">Email:</span> <Link className=" text-cyan-400" to='https://mail.google.com/mail/u/0/#inbox?compose=new'>ajjubayerhossain99@gmail.com</Link></p>
          <p className="mt-5"><span className=" About font-semibold">Phone:</span> 01322350293</p>
          <p className="mt-5"><span className=" About font-semibold">Github:</span> <Link className=" text-cyan-400" to='https://github.com/Jubayer9'>Github</Link> </p>
          <p className="mt-5"><span className=" About font-semibold">Religion:</span> Islam</p>
          <p className="mt-5"><span className=" About font-semibold">Linkedin:</span> <Link className=" text-cyan-400" to='https://www.linkedin.com/in/jubayer-hossain-26266a27b/'>Linkedin</Link></p>
      </div>
  </div>
  <div data-aos="flip-left"
data-aos-easing="ease-out-cubic"
data-aos-duration="2000" className="stats Skills mr-8 text-white">

<div className="stat">
<div className="stat-figure text-cyan-400">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
</div>
<div className="stat-value text-center">+19</div>
<div className="">Problem Solve </div>
</div>

<div className="stat">
<div className="stat-figure  text-cyan-400 ">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
</div>
<div className="stat-value text-center">+14</div>
<div className="">Project Complete</div>
</div>



</div>
</div>

      </div>
    );
};

export default About;