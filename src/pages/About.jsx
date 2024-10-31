import React from 'react'


export default function About() {
  return (
    <section className="container mx-auto py-5 bg-gray-500/25 ">
    <div className="rounded-lg">
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-10">
        <img
          src="aboutpic.jpg"
          className="w-full md:w-[40rem] rounded-lg md:translate-x-[1rem] md:translate-y-[1rem]"
        />
        <div className="">
          <h1 className="text-3xl md:text-5xl md:leading-[2.25ch] font-bold font-serif">
            About Us
          </h1>
          <p className="py-6 max-w-[65ch] leading-relaxed font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            laudantium suscipit quos assumenda ut amet aliquam dignissimos
            doloremque soluta, ducimus similique, impedit eaque totam officiis
            nihil necessitatibus debitis facilis quaerat? Quia eos aspernatur
            necessitatibus voluptatem neque. Consectetur repudiandae eligendi
            doloremque ab praesentium eum aliquam officia distinctio.
            Voluptatibus nostrum cumque ut perspiciatis libero sint quos
            deleniti rerum. At eaque optio sed! Lorem ipsum dolor sit amet.
          </p>
          <button className="btn bg-[#FF5500] text-lg text-white border-none px-6">Learn More</button>
        </div>
      </div>
    </div>
  </section>
);
  
}
