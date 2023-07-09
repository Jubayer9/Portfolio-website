import { Link } from 'react-router-dom';
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import img1 from '../../../../public/projects/FireShot Capture 568 - BAND ZOON - assignment-12-27a21.web.app.png'
import img2 from '../../../../public/projects/FireShot Capture 573 - Hero Bag_Home - toy-marketplace-clind.web.app.png'
import img3 from '../../../../public/projects/FireShot Capture 580 - Super Chef BD - assignment-10-c8113.web.app.png'
import img4 from '../../../../public/projects/FireShot Capture 575 - Hero Bag_Home - toy-marketplace-clind.web.app.png'
import img5 from '../../../../public/projects/FireShot Capture 581 - Super Chef BD - assignment-10-c8113.web.app.png'
import img6 from '../../../../public/projects/FireShot Capture 585 - BAND ZOON - assignment-12-27a21.web.app.png'
const Project = () => {
  return (


    <div className="">
      <h1 className='text-center text-5xl  my-16 skills '>My Project <hr /> </h1>

      <div className="grid md:grid-flow-col mb-40 md:ml-8 md:gap-10">

        <div data-aos="fade-right" data-aos-duration="2500" className="card w-96    Skills Skills  shadow-xl md:GO1">
          <figure>
            <img src={img1} alt="" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              BAND zoon
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Which is used in this project :</p>
            <div className="flex text-cyan-400">
              <p className='text-3xl my-10 icon'><FaHtml5></FaHtml5></p>
              <p className='text-3xl my-10 icon'><FaCss3Alt></FaCss3Alt></p>
              <p className='text-3xl my-10 icon'><FaReact></FaReact></p>
              <p className='text-3xl my-10 icon'><BiLogoMongodb></BiLogoMongodb></p>
              <p className='text-3xl my-10 icon'><SiExpress></SiExpress></p>
            </div>
            <div className="card-actions justify-end">


              <button className="btn  GO btn-block" onClick={() => window.my_modal_1.showModal()}>Go</button>
              <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box Skills  Skills">
                  <button className="btn bbttnn ml-96">X</button>

                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    1. The website is designed separately for admin, teacher and student
                    <br /><br /> 2. This website uses mainly javascript and react and some great animations
                    <br /><br /> 3. using ASO , React animations,CSS animations etc
                  </p>
                  <div className="">
                    <img src={img6} alt="" />
                    <Link to={'https://github.com/Jubayer9/assignment-12-summer-camp-school-server#b7a12-summer-camp-server_side-jubayer9'} className="btn bbttnn my-5 mr-5  ">github-Server </Link>
                    <Link to={'https://github.com/Jubayer9/assignment-12-summer-camp-school-client'} className="btn bbttnn ">github-Client </Link>
                    <Link to={'https://assignment-12-27a21.web.app/'} className="btn bbttnn  btn-block">Live ... </Link>
                  </div>
                  <div className="modal-action">


                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
        <div data-aos="flip-left" data-aos-duration="3000" className="card w-96   Skills  shadow-xl md:GO2">
          <img src={img3} alt="" />
          <div className="card-body">
            <h2 className="card-title">
              Super Chef BD
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Which is used in this project :</p>
            <div className="flex text-cyan-400">
              <p className='text-3xl my-10 icon'><FaHtml5></FaHtml5></p>
              <p className='text-3xl my-10 icon'><FaCss3Alt></FaCss3Alt></p>
              <p className='text-3xl my-10 icon'><FaReact></FaReact></p>
              <p className='text-3xl my-10 icon'><BiLogoMongodb></BiLogoMongodb></p>
              <p className='text-3xl my-10 icon'><SiExpress></SiExpress></p>
            </div>
            <div className="card-actions justify-end">

              <button className="btn GO btn-block" onClick={() => window.my_modal_5.showModal()}>Go</button>
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box Skills">
                  <button className="btn bbttnn ml-96">X</button>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">1. Welcoming and visually appealing homepage design with an intuitive layout.
                    <br /> <br /> 2. Clear and concise navigation menu, allowing users to easily explore different
                    sections of the website.
                    <br /><br />  3. Engaging and informative content highlighting the key features, services, or
                    products offered by the website.</p>
                  <div className="">
                    <img src={img5} alt="" />

                    <Link to={'https://github.com/Jubayer9/assignment-10'} className="btn my-5 bbttnn ">github</Link>
                    <Link to={'https://assignment-10-c8113.web.app/home'} className="btn bbttnn  btn-block">Live ... </Link>
                  </div>
                  <div className="modal-action">
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2500" className="card w-96   Skills  shadow-xl  md:GO3">
          <figure><img src={img2} alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              Hero Bag 👊
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Which is used in this project :</p>
            <div className="flex text-cyan-400">
              <p className='text-3xl my-10 icon'><FaHtml5></FaHtml5></p>
              <p className='text-3xl my-10 icon'><FaCss3Alt></FaCss3Alt></p>
              <p className='text-3xl my-10 icon'><FaReact></FaReact></p>
              <p className='text-3xl my-10 icon'><BiLogoMongodb></BiLogoMongodb></p>
              <p className='text-3xl my-10 icon'><SiExpress></SiExpress></p>
            </div>
            <div className="card-actions justify-end">

              <button className="btn GO btn-block" onClick={() => window.my_modal_55.showModal()}>Go</button>
              <dialog id="my_modal_55" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box Skills">
                  <button className="btn bbttnn ml-96">X</button>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className='py-4'>
                    1. Secure and convenient shopping experience, with options for adding items to a
                    shopping cart, making payments, and tracking orders.
                    <br /><br />    2. A comprehensive online toy marketplace offering a wide variety of toys for
                    children of all ages.
                    <br /><br /> 3. User-friendly interface with easy navigation, allowing customers to browse and
                    search for their desired toys effortlessly.
                  </p>
                  <img src={img4} alt="" />
                  <div className="">
                    <img src={img4} alt="" />
                    <Link to={'https://github.com/Jubayer9/assignment-11-toy-marketplace-server'} className="btn bbttnn my-5 mr-5  ">github-Server </Link>
                    <Link to={'https://github.com/Jubayer9/assignment-11-toy-marketplace-climd'} className="btn bbttnn ">github-Client </Link>
                    <Link to={'https://toy-marketplace-clind.web.app/'} className="btn bbttnn  btn-block">Live ... </Link>
                  </div>
                  <div className="modal-action">
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;