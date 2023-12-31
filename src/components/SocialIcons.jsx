import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialIcons = () => {

     const links = [
       {
         id: 1,
         child: (
           <>
             LinkedIn <FaLinkedin size={30} />
           </>
         ),
         href: "linkedIn",
         style: "rounded-tr-md",
       },
       {
         id: 2,
         child: (
           <>
             GitHub <FaGithub size={30} />
           </>
         ),
         href: "github",
       },
       {
         id: 3,
         child: (
           <>
             Mail <HiOutlineMail size={30} />
           </>
         ),
         href: "eamil",
       },
       {
         id: 4,
         child: (
           <>
             Resume <BsFillPersonLinesFill size={30} />
           </>
         ),
         href: "resume",
         style: "rounded-br-md",
         download: true,
       },
     ];


  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed hidden">
          <ul>
              
              {links.map(({id, child, href, style, download}) => {
            return (
                <li key={ id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + style} >
                <a href={href} className="flex justify-between w-full items-center" download={download} target='_blank'rel='noreferrer'>
                  <>
                    {child}
                  </>
                </a>
              </li>
            );
        })}
      </ul>
    </div>
  );
}

export default SocialIcons