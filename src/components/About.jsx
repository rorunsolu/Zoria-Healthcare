const About = () => {
    return (
        <section id="about" className="bg-green">
            <div className="container about flex flex-col relative">

                <h2 className="about__title mb-[4.5rem]text-white">
                    Leading the Way in Healthcare Solutions
                </h2>

                <div className="about__statistics grid grid-cols-3 gap-8">

                    <div className="about__stats flex flex-col rounded-lg p-6 bg-white shadow-md relative">
                        <i className="ri-team-fill flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-18 h-18 rounded-full border-4 border-green text-2xl bg-white text-green"></i>
                        <span className="about__number text-3xl font-medium text-green">15+</span>
                        <h3 className="about__category">Years of Experience</h3>
                        <p className="about__description text-black-2">
                            Our team has over 15 years of experience.
                        </p>
                    </div>

                    <div className="about__stats flex flex-col rounded-lg p-6 bg-white shadow-md relative">
                        <i className="ri-earth-fill flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-18 h-18 rounded-full border-4 border-green text-2xl bg-white text-green"></i>
                        <span className="about__number text-3xl font-medium text-green">60k</span>
                        <h3 className="about__category">Patients Worldwide</h3>
                        <p className="about__description text-black-2">
                            We have treated over 60,000 patients worldwide successfully.
                        </p>
                    </div>

                    <div className="about__stats flex flex-col rounded-lg p-6 bg-white shadow-md relative">
                        <i className="ri-heart-pulse-fill flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-18 h-18 rounded-full border-4 border-green text-2xl bg-white text-green"></i>
                        <span className="about__number text-3xl font-medium text-green">800+</span>
                        <h3 className="about__category">Successful Treatments</h3>
                        <p className="about__description text-black-2">
                            Our team has performed over 800 successful treatments.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
