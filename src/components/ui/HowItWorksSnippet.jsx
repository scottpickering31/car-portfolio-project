import { useEffect, useRef, useState } from "react";

function HowItWorksSnippet({ title, description, image, flipImage }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const containerClasses = isVisible
    ? flipImage
      ? "flex w-full flex-row-reverse mt-20 animate-opacity-transform p-5 "
      : "flex w-full mt-20 animate-opacity-transform p-10"
    : "flex w-full mt-20 p-5 opacity-0 ";

  const textClasses = isVisible
    ? flipImage
      ? "flex items-center text-center w-1/2 text-2xl p-10 opacity-0 transition-opacity-transform duration-1000 delay-1000 opacity-100 "
      : "flex items-center text-center w-1/2 text-2xl p-10 opacity-0 transition-opacity-transform duration-1000 delay-1000 opacity-100 shadow-2xl border rounded-lg bg-white tracking-wider"
    : "flex items-center text-center w-1/2 text-2xl p-5 opacity-0 ";

  const imageClasses = isVisible
    ? flipImage
      ? "flex flex-col w-1/2 animate-flip "
      : "flex flex-col w-1/2 animate-flip "
    : "flex flex-col w-1/2 h-1/2 ";

  return (
    <div ref={containerRef} className={containerClasses}>
      <div className={imageClasses}>
        <h1 className="text-center">{title}</h1>
        <img src={image} alt={title} />
      </div>
      <div className={textClasses}>
        <p
          className={
            flipImage
              ? "shadow-2xl border rounded-lg p-5 text-center bg-white tracking-wider"
              : ""
          }
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default HowItWorksSnippet;
