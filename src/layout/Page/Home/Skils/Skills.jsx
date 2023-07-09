import { FaCss3Alt, FaHtml5, FaNode, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
const Skills = () => {
    return (
        <div data-aos="flip-down" data-aos-easing="linear" data-aos-duration="1500">


<p  className=" text-5xl mt-9 rounded-br-full rounded-tl-full bbttnn p-4 w-60 md:ml-[430px] skills text-teal-300">My Skills

</p>

            <div className="inline-grid md:grid-cols-2 md:my-10 ">

                <div className="">
                    <p className="ml-60 text-3xl skills "><FaHtml5></FaHtml5>
                    </p>
<p className="ml-60 text-lg text-teal-300">90%</p>
                    <progress className="progress  progress-accent md:my-9  md:mx-56 md:px-[19%] " value={90} max="100"></progress>
                </div>
                <div className="">
                    <p className="ml-60 text-3xl skills ">
                        <BiLogoMongodb></BiLogoMongodb>

                    </p>
                    <p className="ml-60 text-lg text-teal-300">35%</p>
                    <progress className="progress progress-accent md:my-9 md:mx-56 md:px-[19%] " value="35" max="100"></progress>

                </div>
                <div className="">
                    <p className="ml-60 text-3xl skills "> <FaCss3Alt></FaCss3Alt>
                    </p>
                    <p className="ml-60 text-lg text-teal-300">80%</p>
                    <progress className="progress progress-accent md:my-9 md:mx-56 md:px-[19%] " value="80" max="100"></progress>
                </div>
                <div className="">
                    <p className="ml-60 text-3xl skills ">
                        <SiExpress></SiExpress>

                    </p>
                    <p className="ml-60 text-lg text-teal-300">70%</p>
                    <progress className="progress progress-accent md:my-9 md:mx-56 md:px-[19%] " value="70" max="100"></progress>
                </div>
                <div className="">
                    <p className="ml-60 text-3xl skills "><FaNodeJs></FaNodeJs>
                    </p>
                    <p className="ml-60 text-lg text-teal-300">45%</p>
                    <progress className="progress progress-accent md:my-9 md:mx-56 md:px-[19%] " value="45" max="100"></progress>
                </div>
                <div className="">
                    <p className="ml-60 text-3xl skills ">
                        <FaNode></FaNode>

                    </p>
                    <p className="ml-60 text-lg text-teal-300">40%</p>
                    <progress className="progress progress-accent md:my-9 md:mx-56 md:px-[19%] " value="40" max="100"></progress>

                </div>
                <div className="">
                    <p className="ml-60 text-3xl skills "><FaReact></FaReact> </p>
                    <p className="ml-60 text-lg text-teal-300">50%</p>
                    <progress className="progress progress-accent md:my-9 md:mx-56 md:px-[19%]  " value="50" max="100"></progress>
                </div>
                
                <div className="">
                    <p className="ml-60 text-3xl skills ">
                        <TbBrandNextjs></TbBrandNextjs>

                    </p>
                    <p className="ml-60 text-lg text-teal-300">20%</p>
                    <progress className="progress progress-accent md:my-9 md:mx-56 md:px-[19%] " value="20" max="100"></progress>

                </div>


            </div>
        </div>
    );
};

export default Skills;