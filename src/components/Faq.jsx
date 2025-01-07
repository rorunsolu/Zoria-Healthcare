const Faq = () => {

    const faqItems = [
        {
            question: "Which Healthcare Package Should I Choose?",
            answer: "Choosing the right healthcare package depends on your needs. Whether you’re looking for basic health checkups or comprehensive family health plans, we offer a range of options to suit every individual and family. Feel free to explore our different packages or contact us for personalized recommendations."
        },
        {
            question: "Are There Any Hidden Fees?",
            answer: "We believe in transparent pricing. All costs, including taxes and service fees, are clearly listed when you book. There are no hidden charges, and you can always review the full breakdown of costs before confirming your package."
        },
        {
            question: "Can I Book for Multiple Family Members?",
            answer: "Yes, you can easily book for multiple family members. Just enter the details of each member during the booking process. If you have any special requirements or group bookings, our support team is here to help."
        },
        {
            question: "What is the Cancellation Policy?",
            answer: "Our cancellation policy varies depending on the package you choose. For most bookings, you can cancel for free within a specified time frame. Be sure to review the cancellation details before finalizing your reservation to understand any applicable fees."
        }
    ];

    return (
        <section id="faq" className="bg-green py-16">
            <div className="container faq flex flex-col gap-4">
                <h2 className="faq__title h2 text-center text-white mb-12">
                    Frequently Asked <span className="text-yellow-400">Questions</span>
                </h2>
                <div className="faq flex flex-col gap-4">

                    {faqItems.map((faqItem, index) => (
                        <div key={index} className="faq__item rounded-lg bg-white shadow-md">
                            <div className="faq__header flex items-center relative rounded-lg p-5 min-h-[3.5rem] cursor-pointer font-medium text-black bg-white">{faqItem.question}
                                <span className="absolute right-4 text-2xl">+</span>
                            </div>
                            <div className="faq__body max-h-0 overflow-hidden transition-max-height duration-200 ease-out rounded-lg bg-white">
                                <div className="faq__content text-left p-5 font-normal text-gray-700">{faqItem.answer}</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Faq;
