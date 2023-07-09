import { IoIosSend} from "react-icons/io";
import Swal from "sweetalert2";
const Footer = () => {
  const handelSend =()=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Details has been send',
      showConfirmButton: false,
      timer: 1500
    })
  }
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  
    <span className="text-center text-xl text-black p-3 Skills rounded-lg bg-cyan-400 font-semibold my-auto">jubayer Portfolio</span> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Skills</a> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">My Email</span>
      </label> 
      <div className="relative">
        <input type="text" defaultValue={'ajjubayerhossain99@gmail.com'} className="input input-bordered w-full pr-16" /> 
        <button onClick={handelSend} className="btn bbttnn absolute top-0 right-0 rounded-l-none"><IoIosSend></IoIosSend></button>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;