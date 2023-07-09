import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMyLocation } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import Swal from "sweetalert2";
const Contact = () => {
  const handleSend=()=>  {
        Swal.fire({
            position: 'top-end',
            background:'rgba(0, 238, 255, 0.194)',
            color:' White',
            icon: 'success',
            title: ' Send your message successfully',
            showConfirmButton: false,
            timer: 1500
          })
       
    }
    return (
        <div  data-aos="fade-right" className="Skills 
      ">
      <h1 className="text-4xl font-bold mx-auto mt-10 skills Skills w-56 text-center rounded-lg p-2 "> Contact Me
      </h1>
            <div className="hero md:min-h-screen  ">
  <div className="hero-content  w-[1000px] Skills">
     <div className="">
<div data-aos="fade-right"  data-aos-duration="2000"  data-aos-easing="linear" className=" ">
     <h1 className="text-2xl p-3 Skills rounded-l-full text-center mt-20 mr-28 -ml-5  ">
     <BsFillTelephoneFill className="mx-auto text-cyan-400"></BsFillTelephoneFill><hr />
    +8801322350293
     </h1>
   
</div>
<div data-aos="fade-left" data-aos-easing="linear"   data-aos-duration="2000" className="">
     <h1 className="text-2xl Skills rounded-l-full  p-3 mt-20 mr-28 -ml-5  ">
     <IoMdMail className="mx-auto text-cyan-400"></IoMdMail>
     <hr />
        ajjubayerhossain@gmail.com</h1>
   
</div>
<div data-aos="fade-right"   data-aos-easing="linear"   data-aos-duration="2000" className=" ">
            
     <h1 className="text-2xl p-3 Skills rounded-l-full text-center  mt-20 mr-28 -ml-5  ">
     <MdOutlineMyLocation className="mx-auto text-cyan-400"></MdOutlineMyLocation><hr />
     Lalabag, Dhaka, Bangladesh</h1>

</div>

     </div>
   
    <div className="card  w-full max-w-sm shadow-2xl bg-base-100 md:contact">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input caret-cyan-400 text-cyan-400 input-bordered Skills" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input caret-cyan-400 text-cyan-400 input-bordered Skills" />
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" placeholder="subject" className="input caret-cyan-400 text-cyan-400 input-bordered Skills" />
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <textarea placeholder="Message" className="caret-cyan-400 text-cyan-400 textarea Skills" ></textarea>
       
        </div>
        <div className="form-control mt-6">
          <button onClick={handleSend} className="btn bbttnn">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;