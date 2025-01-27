const Articles = () => {

    const articleCards = [
        {
            title: "The Benefits of Regular Health Checks",
            description: "Regular health checks can help identify potential health issues early.",
            image: "articles-image-1.jpg",
        },
        {
            title: "Healthy Eating Habits",
            description: "Discover how balanced meals can improve your overall health.",
            image: "articles-image-2.jpg",
        },
        {
            title: "Exercise Tips for a Busy Schedule",
            description: "Learn quick and effective workouts for a hectic lifestyle.",
            image: "articles-image-3.jpg",
        },
        {
            title: "Healthy Sleep Habits",
            description: "Discover how regular sleep can improve your overall health.",
            image: "articles-image-4.jpg",
        }
    ];

    return (
        <section id="articles">
            <div className="container articles">
                <div className="articles__text-wrapper text-center mb-12">
                    <h2 className="articles__title h2 text-black mb-[0.5rem]">
                        <span className="text-green">Insights</span> and <span className="text-green">Updates</span>
                    </h2>
                    <p className="articles__subtitle text-lg text-gray-600">
                        Read our latest articles and stay up-to-date with the latest healthcare trends and news.
                    </p>
                </div>

                <div className="articles__card-wrapper grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

                    {articleCards.map((card, index) => (
                        <article key={index} className="articles__card flex flex-col justify-between p-5 relative overflow-hidden  rounded-lg">
                            <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center brightness-50" style={{ backgroundImage: `url(/src/assets/articles/${card.image})` }}></div>
                            <h3 className="articles__card-title text-xl font-bold text-white mb-2">{card.title}</h3>
                            <div className="articles__card-bottom mt-4">
                                <p className="articles__card-info text-[1rem] text-white-2 mb-4">{card.description}</p>
                                <div className="button-wrapper">
                                    <a className="button button--white" href="#">Read More</a>
                                </div>
                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Articles;