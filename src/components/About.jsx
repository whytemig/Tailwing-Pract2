import React from 'react'

const About = () => {
  return (
    <section className="w-full h-screen bg-gray-950 text-white mt-12 md:mt-0">
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
        name="about"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold text-center underline md:inline border-gray-500">
            About
          </p>
        </div>
        <p className="mt-10 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet
          quisquam consectetur perferendis, mollitia eius natus hic ut, rem quas
          minus repellendus unde. Illo a mollitia, exercitationem obcaecati sit
          nisi velit maiores odio commodi veritatis libero repellendus, facilis
          corrupti facere vel perferendis tempora ab eveniet eius quas odit
          magnam. Molestias.
        </p>
        <br />
        <p className=" text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis et
          cum mollitia, commodi modi harum! Architecto est nesciunt iste debitis
          sit obcaecati id totam repellendus perspiciatis nam, mollitia cumque,
          velit at numquam molestiae officia non quasi vero consectetur quae
          error libero! Laboriosam excepturi deserunt minus vitae, dicta
          corrupti assumenda fuga.
        </p>
      </div>
    </section>
  );
}

export default About