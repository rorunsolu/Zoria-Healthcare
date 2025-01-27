const About = () => {
    const aboutStats = [
        {
            number: "15+",
            category: "Years of Experience",
            description: "Our team has over 15 years of experience.",
            icon: "ri-team-fill",
        },
        {
            number: "60k",
            category: "Patients Worldwide",
            description: "We have treated over 60,000 patients worldwide successfully.",
            icon: "ri-earth-fill",
        },
        {
            number: "800+",
            category: "Successful Treatments",
            description: "Our team has performed over 800 successful treatments.",
            icon: "ri-heart-pulse-fill",
        }
    ];

    return (
        <section id="about" className="bg-green py-16">
            <div className="container about flex flex-col relative">

                <h2 className="about__title h2 text-center text-white mb-[4.5rem]">
                    Leading the Way in Healthcare Solutions
                </h2>

                <div className="about__statistics grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8 gap-12">

                    {aboutStats.map((aboutStat, index) => (
                        <article key={index} className="about__stats flex flex-col items-start rounded-lg p-6 bg-white shadow-md relative">
                            <i className={`absolute-icon border-green bg-white text-green ${aboutStat.icon}`}></i>
                            <span className="about__number text-5xl leading-[1.6] font-medium text-green">{aboutStat.number}</span>
                            <h3 className="about__category text-2xl font-semibold">{aboutStat.category}</h3>
                            <p className="about__description text-gray-600">{aboutStat.description}</p>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default About;

