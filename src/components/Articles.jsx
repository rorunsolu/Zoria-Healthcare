const Articles = () => {
    return (
        <section id="articles">
            <div className="container articles">
                <div className="articles__text-wrapper">
                    <h2 className="articles__title"><span>Insights</span> and <span>Updates</span></h2>
                    <p className="articles__subtitle">Read our latest articles and stay up-to-date with the latest healthcare trends and news.</p>
                </div>

                <div className="articles__card-wrapper">
                    <article className="articles__card" id="articles__card-1">
                        <h3 className="articles__card-title">The Benefits of Regular Health Checks</h3>
                        <div className="articles__card-bottom">
                            <p className="articles__card-info">Regular health checks can help identify potential health issues early.</p>
                            <div className="button-wrapper">
                                <a className="button button--white">Read More</a>
                            </div>
                        </div>
                    </article>

                    <article className="articles__card" id="articles__card-2">
                        <h3 className="articles__card-title">Healthy Eating Habits</h3>
                        <div className="articles__card-bottom">
                            <p className="articles__card-info">Discover how balanced meals can improve your overall health.</p>
                            <div className="button-wrapper">
                                <a className="button button--white">Read More</a>
                            </div>
                        </div>
                    </article>

                    <article className="articles__card" id="articles__card-3">
                        <h3 className="articles__card-title">Exercise Tips for a Busy Schedule</h3>
                        <div className="articles__card-bottom">
                            <p className="articles__card-info">Learn quick and effective workouts for a hectic lifestyle.</p>
                            <div className="button-wrapper">
                                <a className="button button--white">Read More</a>
                            </div>
                        </div>
                    </article>

                    <article className="articles__card" id="articles__card-4">
                        <h3 className="articles__card-title">Healthy Sleep Habits</h3>
                        <div className="articles__card-bottom">
                            <p className="articles__card-info">Discover how regular sleep can improve your overall health.</p>
                            <div className="button-wrapper">
                                <a className="button button--white">Read More</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Articles;
