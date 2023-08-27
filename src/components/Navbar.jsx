import { FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {

    const links = [
      {
        id: 1,
        link: "Home",
      },
      {
        id: 2,
        link: "About",
      },
      {
        id: 3,
        link: "Portfolio",
      },
      {
        id: 4,
        link: "Experience",
      },
      {
        id: 5,
        link: "Contact"
      },
    ];
  return (
    <div className="flex justify-between w-full h-20 text-white fixed bg-black px-4 items-center">
      <div>
        <h1 className="text-5xl font-signature ml-2">Name</h1>
      </div>
          <ul className=" hidden md:flex">
              {links.map(({ id, link }) => {
                  return (
                    <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 duration-200 hover:scale-105" key={id}>
                      {link}
                    </li>
                  );
              })}
       
          </ul>
          <div className='cursor-pointer z-10 text-grey-500 pr-4'>
              <FaBars size={30}/>
          </div>
    </div>
  );
}

export default Navbar