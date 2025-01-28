import { articleCards } from "../constants/index.js";

const Articles = () => {
  return (
    <section id="articles">
      <div className="container articles">
        <div className="articles__text-wrapper text-center mb-16">
          <h2 className="articles__title h2 text-black mb-[0.5rem]">
            <span className="text-green">Insights</span> and{" "}
            <span className="text-green">Updates</span>
          </h2>
          <p className="articles__subtitle body-1 text-gray-600">
            Read our latest articles and stay up-to-date with the latest
            healthcare trends and news.
          </p>
        </div>

        <div className="articles__card-wrapper grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-8">
          {articleCards.map((card, index) => (
            <article
              key={index}
              className="articles__card overflow-hidden rounded-lg shadow-md hover:cursor-pointer group"
            >
              <img className="w-full h-56" src={card.url} alt={card.alt} />

              <div className="p-5">
                <p className="text-sm font-semibold text-green mb-2">
                  {card.author} • {card.date}
                </p>

                <h3 className="text-xl font-bold mb-2 line-clamp-1 group-hover:text-green transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-sm line-clamp-2">
                  {card.description}
                </p>

                <div className="flex gap-2 mt-4">
                  {card.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full border-[1.75px] bg-white text-green"
                    >
                      {tag}
                    </span>
                  ))}
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
