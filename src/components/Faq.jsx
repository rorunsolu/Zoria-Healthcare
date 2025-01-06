const Faq = () => {
    return (
        <section id="faq">
            <div className="container faq">
                <h2 className="faq__title">Frequently Asked <span>Questions</span></h2>
                <div className="faq">
                    <div className="faq__item">
                        <div className="faq__header">Which Healthcare Package Should I Choose?</div>
                        <div className="faq__body">
                            <div className="faq__content">Choosing the right healthcare package depends on your needs. Whether you’re
                                looking for basic health checkups or comprehensive family health plans, we offer a range of options to suit every
                                individual and family. Feel free to explore our different packages or contact us for personalized
                                recommendations.</div>
                        </div>
                    </div>
                    <div className="faq__item">
                        <div className="faq__header">Are There Any Hidden Fees?</div>
                        <div className="faq__body">
                            <div className="faq__content">We believe in transparent pricing. All costs, including taxes and
                                service fees, are clearly listed when you book. There are no hidden charges, and you can always review the full
                                breakdown of costs before confirming your package.</div>
                        </div>
                    </div>
                    <div className="faq__item">
                        <div className="faq__header">Can I Book for Multiple Family Members?</div>
                        <div className="faq__body">
                            <div className="faq__content">Yes, you can easily book for multiple family members. Just enter the details
                                of each member during the booking process. If you have any special requirements or group bookings, our
                                support team is here to help.</div>
                        </div>
                    </div>
                    <div className="faq__item">
                        <div className="faq__header">What is the Cancellation Policy?</div>
                        <div className="faq__body">
                            <div className="faq__content">Our cancellation policy varies depending on the package you choose. For
                                most bookings, you can cancel for free within a specified time frame. Be sure to review the cancellation
                                details before finalizing your reservation to understand any applicable fees.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;