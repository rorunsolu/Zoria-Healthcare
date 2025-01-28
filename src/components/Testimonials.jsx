import { testimonialCards } from "../constants/index.js";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container testimonials">
        <div className="testimonials__text-wrapper text-center mb-[4.5rem]">
          <h2 className="testimonials__title h2 mb-[0.5rem] text-gray-800">
            Customer <span className="text-green-500">Reviews</span> and{" "}
            <span className="text-green-500">Testimonials</span>
          </h2>
          <p className="testimonials__subtitle body-1 text-gray-600">
            Hear from our satisfied clients about their experiences with Zoria
            Healthcare.
          </p>
        </div>

        <div className="testimonials__card-wrapper grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8 gap-12">
          {testimonialCards.map((testimonial, index) => (
            <article
              key={index}
              className="testimonials__card flex flex-col bg-white rounded-lg rounded-t-none shadow-md p-5 relative border-t-4 border-[var(--color-green)]"
            >
              <i className="ri-star-smile-fill absolute-icon"></i>

              <div className="testimonials__card-top flex items-center gap-4 mt-[1.5rem] mb-4">
                <div className="testimonials__card-image-wrapper w-14 h-14 rounded-full overflow-hidden">
                  <img
                    className="testimonials__card-image object-cover w-full h-full"
                    src={testimonial.url}
                    alt={`Picture of ${testimonial.name}`}
                    loading="lazy"
                  />
                </div>
                <div className="testimonials__card-info">
                  <p className="testimonials__card-name text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="testimonials__card-job text-sm text-gray-600">
                    {testimonial.job}
                  </p>
                </div>
              </div>

              <div className="testimonials__card-middle italic text-gray-600 mb-4">
                <p className="testimonials__card-review">
                  {testimonial.review}
                </p>
              </div>

              <div className="testimonials__card-bottom flex items-center gap-2 text-gray-800">
                <div className="testimonials__card-stars flex items-center gap-[0.15rem] text-yellow-300">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
