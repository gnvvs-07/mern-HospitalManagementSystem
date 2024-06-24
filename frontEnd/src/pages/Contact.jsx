import React from "react";

export default function Contact() {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Contact Us for any issues
        </p>
        <form action="#" className="form__label flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@gmail.com"
              className="form__input mt-3"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="your issue"
              className="form__input mt-3"
            />
          </div>
          <div className="sm:col-spn-2">
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea
              rows="6"
              type="text"
              name="comment"
              id="message"
              placeholder="Leave a comment ..."
              className="form__input mt-3"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-full">Submit</button>
        </form>
      </div>
    </section>
  );
}
