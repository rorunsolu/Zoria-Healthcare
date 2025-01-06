const Pricing = () => {
    return (
        <section id="pricing">
            <div className="container pricing">
                <div className="pricing__text-wrapper">
                    <h2 className="pricing__title">Choose your <span>package for Zoria Healthcare</span> Solutions</h2>
                    <p className="pricing__subtitle">Providing comprehensive healthcare solutions tailored to your needs.</p>
                </div>

                <div className="pricing__card-wrapper">
                    <article className="pricing__card">
                        <i className="ri-shield-check-fill absolute-icon"></i>
                        <div className="pricing__card-top">
                            <h3 className="pricing__card-title">Basic Package</h3>
                            <p className="pricing__card-description">Essential healthcare services for individuals.</p>
                        </div>
                        <div className="pricing__card-fee">
                            <p className="pricing__card-unit">$</p>
                            <p className="pricing__card-amount">16</p>
                            <p className="pricing__card-duration">/mo</p>
                        </div>
                        <div className="pricing__card-features-wrapper">
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> General Health Checkups</p>
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> 24/7 Online Consultation</p>
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> Basic Lab Tests</p>
                        </div>
                        <div className="button-wrapper">
                            <a className="button button--green">Choose Plan</a>
                        </div>
                    </article>

                    <article className="pricing__card">
                        <i className="ri-shield-check-fill absolute-icon"></i>
                        <div className="pricing__card-top">
                            <h3 className="pricing__card-title">Pro Package</h3>
                            <p className="pricing__card-description">Advanced healthcare services for families.</p>
                        </div>
                        <div className="pricing__card-fee">
                            <p className="pricing__card-unit">$</p>
                            <p className="pricing__card-amount">20</p>
                            <p className="pricing__card-duration">/mo</p>
                        </div>
                        <div className="pricing__card-features-wrapper">
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> Family Health Checkups</p>
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> Specialist Consultations</p>
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> Advanced Lab Tests</p>
                        </div>
                        <div className="button-wrapper">
                            <a className="button button--green">Choose Plan</a>
                        </div>
                    </article>

                    <article className="pricing__card">
                        <i className="ri-shield-check-fill absolute-icon"></i>
                        <div className="pricing__card-top">
                            <h3 className="pricing__card-title">Business Package</h3>
                            <p className="pricing__card-description">Comprehensive solutions for businesses.</p>
                        </div>
                        <div className="pricing__card-fee">
                            <p className="pricing__card-unit">$</p>
                            <p className="pricing__card-amount">24</p>
                            <p className="pricing__card-duration">/mo</p>
                        </div>
                        <div className="pricing__card-features-wrapper">
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> Corporate Health Plans</p>
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> On-site Health Services</p>
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> Employee Wellness Programs</p>
                        </div>
                        <div className="button-wrapper">
                            <a className="button button--green">Choose Plan</a>
                        </div>
                    </article>

                    <article className="pricing__card">
                        <i className="ri-shield-check-fill absolute-icon"></i>
                        <div className="pricing__card-top">
                            <h3 className="pricing__card-title">Premium Package</h3>
                            <p className="pricing__card-description">Exclusive healthcare services for VIP clients.</p>
                        </div>
                        <div className="pricing__card-fee">
                            <p className="pricing__card-unit">$</p>
                            <p className="pricing__card-amount">30</p>
                            <p className="pricing__card-duration">/mo</p>
                        </div>
                        <div className="pricing__card-features-wrapper">
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> Personal Health Manager</p>
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> Home Visits</p>
                            <p className="pricing__card-feature"><i className="ri-check-line"></i> Comprehensive Lab Tests</p>
                        </div>
                        <div className="button-wrapper">
                            <a className="button button--green">Choose Plan</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Pricing;