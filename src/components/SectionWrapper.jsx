// const SectionWrapper = ({ id, children }) => {
//   return (
//     <section id={id}>
//       {children}

//     </section>
//   );
// };

// export default SectionWrapper;

const SectionWrapper = ({ className, id, children }) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
    </div>
  );
};

export default SectionWrapper;
