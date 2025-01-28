import { faqItems } from "../constants/index.js";

const Faq = () => {
  return (
    <section id="faq" className="bg-green py-16">
      <div className="container faq flex flex-col gap-4">
        <h2 className="faq__title h2 text-center text-white mb-16">
          Frequently Asked <span className="text-yellow-400">Questions</span>
        </h2>
        <div className="faq flex flex-col gap-4">
          {faqItems.map((faqItem, index) => (
            <div
              key={index}
              className="faq__item rounded-lg bg-white shadow-md"
            >
              <div
                className="faq__header flex items-center relative rounded-lg p-5 min-h-[3.5rem] cursor-pointer font-medium text-black bg-white"
                onClick={() => {
                  const body = document.getElementById(`faq-body-${index}`);
                  if (body) {
                    body.style.maxHeight =
                      body.style.maxHeight === "0px" || !body.style.maxHeight
                        ? "1000px"
                        : "0px";
                  }
                }}
              >
                {faqItem.question}
                <span className="absolute right-4 text-2xl">+</span>
              </div>
              <div
                id={`faq-body-${index}`}
                className="faq__body overflow-hidden transition-max-height duration-200 ease-out rounded-lg bg-white"
                style={{
                  maxHeight: "0px",
                  transition: "max-height 0.2s ease-out",
                }}
              >
                <div className="faq__content text-left p-5 pt-0 font-normal text-gray-700">
                  {faqItem.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
