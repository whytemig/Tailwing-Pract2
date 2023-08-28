import { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {

  const [nav, setNav] = useState(false)

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
      <ul className=" hidden md:flex mx-auto">
        {links.map(({ id, link }) => {
          return (
            <li
              className="px-4 cursor-pointer capitalize font-medium text-gray-400"
              key={id}
            >
              {link}
            </li>
          );
        })}
      </ul>
      <div
        className="cursor-pointer z-10 text-grey-500 pr-4 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                className="px-4 cursor-pointer capitalize py-4 text-3xl border-b-2 border-black w-full text-center"
                key={id}
              >
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar