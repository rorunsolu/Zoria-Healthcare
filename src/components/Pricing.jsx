const Pricing = () => {
    const pricingCards = [
        {
            title: "Basic Package",
            description: "Healthcare services for individuals.",
            fee: 16,
            features: [
                "General Health Checkups",
                "24/7 Online Consultation",
                "Basic Lab Tests"
            ]
        },
        {
            title: "Pro Package",
            description: "Healthcare services for families.",
            fee: 20,
            features: [
                "Family Health Checkups",
                "Specialist Consultations",
                "Advanced Lab Tests"
            ]
        },
        {
            title: "Business Package",
            description: "Comprehensive solutions for businesses.",
            fee: 24,
            features: [
                "Corporate Health Plans",
                "On-site Health Services",
                "Employee Wellness Programs"
            ]
        },
        {
            title: "Premium Package",
            description: "Healthcare services for VIP clients.",
            fee: 30,
            features: [
                "Personal Health Manager",
                "Home Visits",
                "Comprehensive Lab Tests"
            ]
        }
    ];

    return (
        <section id="pricing">
            <div className="container pricing">
                <div className="pricing__text-wrapper text-center mb-[5.5rem]">
                    <h2 className="pricing__title h2 text-black mb-4">
                        Choose your <span className="text-green-500">package for Zoria Healthcare</span> Solutions
                    </h2>
                    <p className="pricing__subtitle text-lg text-gray-600">
                        Providing comprehensive healthcare solutions tailored to your needs.
                    </p>
                </div>

                <div className="pricing__card-wrapper grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8 gap-12">

                    {pricingCards.map((pricingCard, index) => (
                        <article key={index} className="pricing__card bg-white rounded-lg rounded-t-none shadow-md p-5 relative border-t-4 border-[var(--color-green)]">
                            <i className="ri-shield-check-fill absolute-icon"></i>
                            <div className="pricing__card-top mt-6 mb-6">
                                <h3 className="pricing__card-title text-xl font-semibold text-gray-800 mb-2">{pricingCard.title}</h3>
                                <p className="pricing__card-description text-gray-600">{pricingCard.description}</p>
                            </div>
                            <div className="pricing__card-fee flex items-center mb-6">
                                <p className="pricing__card-unit text-lg font-medium text-gray-800 mr-1">$</p>
                                <p className="pricing__card-amount text-4xl font-bold text-gray-800">{pricingCard.fee}</p>
                                <p className="pricing__card-duration text-lg text-gray-600 ml-1">/mo</p>
                            </div>
                            <div className="pricing__card-features-wrapper space-y-2 mb-6">
                                {pricingCard.features.map((feature, index) => (
                                    <p key={index} className="pricing__card-feature flex items-center text-gray-600">
                                        <i className="ri-check-line text-green mr-2"></i> {feature}
                                    </p>
                                ))}
                            </div>
                            <div className="button-wrapper">
                                <a className="button button--green w-full text-center" href="#">More Info</a>
                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Pricing;
