import image from '../assets/profileimg.jpg'
import { HiArrowRightCircle } from "react-icons/hi2";


const Home = () => {
  return (
    <section
      name="home"
      className="via-black w-full h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:px-6 mt-20 text-center md:text-start">
          <h2 className="text-4xl sm:text-7xl pb-6 mt-20 text-bold ">
            I'm a Full Stack Developer
          </h2>
          <p className="max-w-md md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            nesciunt consectetur aliquid. Laudantium minus autem aspernatur
            iusto incidunt nobis est, officiis itaque. Reiciendis aspernatur
            veniam maxime eum? Excepturi, enim temporibus.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-red-600 cursor-pointer justify-around gap-2 ">
              Portfolio
              <span className="">
                <HiArrowRightCircle size={20} className="mx-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="w-[60%] h-[50%] flex items-center">
          <img
            src={image}
            alt=""
            className="w-full h-full object-fill mx-auto md:w-full rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
}

export default Home