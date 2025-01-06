const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container testimonials">

                <div className="testimonials__text-wrapper">
                    <h2 className="testimonials__title">Customer <span>Reviews</span> and <span>Testimonials</span></h2>
                    <p className="testimonials__subtitle">Hear from our satisfied clients about their experiences with Zoria Healthcare.</p>
                </div>

                <div className="testimonials__card-wrapper">

                    <article className="testimonials__card">
                        <i className="ri-speak-fill absolute-icon"></i>

                        <div className="testimonials__card-top">

                            <div className="testimonials__card-image-wrapper">
                                <img className="testimonials__card-image" src="./src/images/person-1.jpg" alt="Picture of a customer" loading="lazy" />
                            </div>

                            <div className="testimonials__card-info">
                                <p className="testimonials__card-name">John Doe</p>
                                <p className="testimonials__card-job">Project Manager</p>
                            </div>

                        </div>

                        <div className="testimonials__card-middle">
                            <p className="testimonials__card-review">"The team was professional, responsive, and truly understood my needs. I highly recommend them to everyone!"</p>
                        </div>

                        <div className="testimonials__card-bottom">

                            <div className="testimonials__card-stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <span>5.0</span>
                        </div>

                    </article>

                    <article className="testimonials__card">
                        <i className="ri-speak-fill absolute-icon"></i>

                        <div className="testimonials__card-top">

                            <div className="testimonials__card-image-wrapper">
                                <img className="testimonials__card-image" src="./src/images/person-2.jpg" alt="Picture of a customer" loading="lazy" />
                            </div>

                            <div className="testimonials__card-info">
                                <p className="testimonials__card-name">Jane Smith</p>
                                <p className="testimonials__card-job">Marketing Specialist</p>
                            </div>

                        </div>

                        <div className="testimonials__card-middle">
                            <p className="testimonials__card-review">"Their attention to detail and commitment to delivering top-notch results made the entire process smooth and stress-free. I'll definitely be using their services again."</p>
                        </div>

                        <div className="testimonials__card-bottom">

                            <div className="testimonials__card-stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <span>5.0</span>
                        </div>

                    </article>

                    <article className="testimonials__card">
                        <i className="ri-speak-fill absolute-icon"></i>

                        <div className="testimonials__card-top">

                            <div className="testimonials__card-image-wrapper">
                                <img className="testimonials__card-image" src="./src/images/person-3.jpg" alt="Picture of a customer" loading="lazy" />
                            </div>

                            <div className="testimonials__card-info">
                                <p className="testimonials__card-name">Emily Taylor</p>
                                <p className="testimonials__card-job">Business Owner</p>
                            </div>

                        </div>

                        <div className="testimonials__card-middle">
                            <p className="testimonials__card-review">"The team delivered results that far exceeded our expectations, and their creative approach brought a fresh perspective to our project. Highly recommended!"</p>
                        </div>

                        <div className="testimonials__card-bottom">

                            <div className="testimonials__card-stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <span>5.0</span>
                        </div>

                    </article>

                </div>

            </div>
        </section>
    );
};

export default Testimonials;