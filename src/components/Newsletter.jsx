import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-[#0C221B]">
      <div className="container gap-4 md:gap-5 lg:gap-6 mx-auto px-2 flex items-center justify-center flex-col h-[20rem] md:h-[25rem] text-white text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl max-w-[35rem]">
          Deliciousness to your inbox
        </h2>
        <p>
          Enjoy weekly hand picked recipes and recommendations in your inbox.
        </p>
        <form className="flex items-center">
          <input
            className="h-9 md:h-10 md:w-[20rem] rounded-tl rounded-bl px-3 py-2"
            placeholder="Email address"
            type="text"
          />
          <button className="btn h-full rounded-br rounded-tr bg-[#FF5500] text-white rounded-none btn-sm">
            JOIN
          </button>
        </form>
        <span className="text-sm">
          By joining to our newsletter you agree to our{" "}
          <a
            className="underline underline-offset-4 decoration-orange-500 "
            href="#"
          >
            Terms and Conditions
          </a>
        </span>
      </div>
    </section>
  );
}