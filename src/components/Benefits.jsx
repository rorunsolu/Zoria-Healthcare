const Benefits = () => {

    const benefitCards = [
        {
            description: "Tailored financial services designed to reduce operational costs and improve your bottom line.",
            title: "Electronic Health",
            cardClass: "benefits__card flex flex-col justify-between items-start overflow-hidden rounded-lg bg-purple-500 p-6 shadow-lg",
            id: "card-purple"
        },
        {
            description: "Gain valuable insights into your financial performance with detailed.",
            title: "Telehealth Services",
            cardClass: "benefits__card flex flex-col justify-between items-start overflow-hidden rounded-lg bg-orange-500 p-6 shadow-lg",
            id: "card-orange"
        },
        {
            description: "Our dedicated team provides personalized financial assistance tailored to your company's needs.",
            title: "Billing and Invoicing",
            cardClass: "benefits__card flex flex-col justify-between items-start overflow-hidden rounded-lg bg-green-500 p-6 shadow-lg",
            id: "card-green"
        }
    ];

    return (
        <section id="benefits">
            <div className="container benefits">
                <div className="benefits__text-wrapper mb-12">
                    <h2 className="benefits__title text-3xl font-bold mb-12">
                        Transform with <span className="text-green-500">Innovative Healthcare</span> Solutions
                    </h2>
                </div>

                <div className="benefits__card-wrapper grid grid-rows-6 grid-cols-4 gap-6 w-full h-[500px]">

                    <article className="benefits__card flex flex-col justify-between items-start overflow-hidden rounded-b-lg shadow-lg p-6 border-t-4 border-green-500" id="card-image">
                        <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center brightness-50" style={{ backgroundImage: "url(/src/assets/benefits/benefits-image.jpg)" }}></div>
                        <div>
                            <p className="benefits__card-subtitle text-yellow-500">Ready for the future</p>
                            <h3 className="benefits__card-title text-2xl font-semibold leading-tight text-white">
                                Our expertise drives us to continuously innovate.
                            </h3>
                        </div>

                        <div className="button-wrapper mt-8">
                            <a className="button button--white bg-white text-black py-2 px-4 rounded hover:bg-gray-200">Analytics and Reporting</a>
                        </div>
                    </article>

                    {benefitCards.map((card, index) => (
                        <article key={index} className="benefits__card flex flex-col justify-between items-start overflow-hidden rounded-lg bg-purple-500 p-6 shadow-lg" id={card.id}>
                            <p className="benefits__card-description text-black">{card.description}</p>
                            <div className="benefits__card-bottom flex justify-between items-end w-full">
                                <h3 className="benefits__card-title text-2xl font-semibold">
                                    {card.title}
                                </h3>
                                <a className="benefits__card-link w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600">
                                    <i className="ri-arrow-right-up-line text-2xl text-white"></i>
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
