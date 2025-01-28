import { benefitCards } from "../constants/index.js";

const Benefits = () => {
  return (
    <section id="benefits">
      <div className="container benefits">
        <div className="benefits__text-wrapper mb-16">
          <h2 className="benefits__title h2 mb-16 text-center">
            Transform with Innovative Healthcare Solutions
          </h2>
        </div>

        <div className="benefits__card-wrapper flex flex-col  lg:grid lg:grid-cols-11 lg:grid-rows-6 gap-8">
          <article
            className="benefits__card relative flex flex-col justify-between items-start col-span-5 row-span-6 overflow-hidden rounded-lg shadow-lg p-6"
            id="card-image"
          >
            <img
              className="absolute inset-0 -z-10 w-full h-full object-cover brightness-50"
              src="/benefits/benefits-image.jpg"
              alt="A person takign their blood sugar levels"
            />
            <div>
              <p className="benefits__card-subtitle text-yellow-300">
                Ready for the future
              </p>
              <h3 className="benefits__card-title text-xl sm:text-2xl font-semibold leading-tight text-white">
                Our expertise drives us to continuously innovate.
              </h3>
            </div>

            <div className="button-wrapper mt-8">
              <a className="button button--white bg-white hover:bg-white-hover">
                Analytics and Reporting
              </a>
            </div>
          </article>

          {benefitCards.map((card, index) => (
            <article
              key={index}
              className={`benefits__card flex flex-col justify-between items-start overflow-hidden rounded-lg p-6 shadow-lg min-h-[200px] border-t-4 border-green rounded-t-none ${
                index === 0
                  ? "col-span-3 row-span-3 col-start-6"
                  : index === 1
                  ? "col-span-3 row-span-3 col-start-6 row-start-4"
                  : index === 2
                  ? "col-span-3 row-span-6 col-start-9 row-start-1"
                  : ""
              }`}
              id={card.id}
            >
              <p className="benefits__card-description text-black">
                {card.description}
              </p>
              <div className="benefits__card-bottom flex justify-between items-end w-full">
                <h3 className="benefits__card-title text-xl sm:text-2xl font-semibold">
                  {card.title}
                </h3>
                <a className="benefits__card-link aspect-square p-2 w-12 h-12 bg-green rounded-[0.5rem] flex items-center justify-center relative hover:bg-green-hover">
                  <i className="ri-arrow-right-up-line grid place-items-center w-6 h-6 text-xl text-white relative -top-[2px]"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
