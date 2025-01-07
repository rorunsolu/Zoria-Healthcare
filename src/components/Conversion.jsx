const Conversion = () => {
    return (
        <section id="conversion" className="relative">

            <div className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center brightness-50" style={{ backgroundImage: "url('/src/assets/conversion/conversion-image-1.jpg')" }}>
                {/* Background Layer */}
            </div>

            <div className="container conversion">
                <div className="conversion__text-wrapper flex flex-col items-center">
                    <h2 className="conversion__title h2 mb-[0.5rem] text-white">Transform with Innovative Zoria Healthcare Solutions</h2>
                    <p className="conversion__subtitle text-lg text-white-2 mb-[1.5rem]">Providing innovative and comprehensive healthcare solutions tailored to your needs. Join us in transforming healthcare for a better tomorrow.</p>
                    <div className="button-wrapper">
                        <a className="button button--white">Give Us a Call</a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Conversion;