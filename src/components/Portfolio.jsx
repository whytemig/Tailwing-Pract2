import React from 'react'
import image from '../assets/projectimg.jpg'

const Portfolio = () => {
     const portfolios = [
       {
         id: 1,
         src: image,
       },
       {
         id: 2,
         src: image,
       },
       {
         id: 3,
         src: image,
       },
       {
         id: 4,
         src: image,
       },
       {
         id: 5,
         src: image,
       },
       {
         id: 6,
         src: image,
       },
     ];



  return (
    <section name="portfolio" className="w-full md:h-screen md:my-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" underline md:inline text-4xl text-center">Portfolio</p>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            perferendis?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={image}
                  alt=""
                  className="rounded-md hover:scale-105 cursor-pointer"
                />
                <div className="items-center justify-center flex">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Deploy
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Github
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio