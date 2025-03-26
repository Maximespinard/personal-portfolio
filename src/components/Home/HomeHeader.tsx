import Arrow from '../../assets/arrow.svg';
import meIcon from '../../assets/me-icon.png';
import elipse from '../../assets/elipse.png';

const HomeHeader = () => {
  return (
    <div className="container mt-10">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="mt-12 lg:ml-8 relative flex flex-col items-center order-last sm:order-first">
          <img
            src={meIcon}
            alt="Maxime Spinard"
            className="w-[175px] sm:w-[300px]"
          />
          <span className="absolute collapse sm:-top-8 sm:-right-4 sm:visible">
            <Arrow />
          </span>
        </div>
        <div className="sm:ml-8 sm:relative mt-5">
          <div className="flex flex-col ">
            <span className="text-base sm:absolute sm:-top-24 ">
              Hello! I am
              <span className="text-main-purple"> Maxime Spinard</span>
            </span>
            <div className="mt-5 sm:mt-0 sm:space-y-2">
              <p className="text-sm underline lg:text-base">A Developer who</p>
              <h2
                className="text-3xl font-bold lg:text-5xl"
                role="heading"
                aria-level={2}
              >
                Builds solutions
              </h2>
              <p className="text-3xl font-bold lg:text-5xl relative">
                line by
                <span className="relative inline-flex items-center whitespace-nowrap left-3 top-0.5">
                  <img
                    src={elipse}
                    alt="Ellipse"
                    className="absolute z-[3] right-2  w-[150px] h-auto"
                    style={{ objectFit: 'contain' }}
                  />
                  <span className="text-main-purple relative z-10 text-3xl lg:text-5xl">
                    line
                  </span>
                  <span className="text-3xl  lg:text-5xl md:relative md:top-1 md:left-1">
                    ...
                  </span>
                </span>
              </p>
              <p className="text-tiny mt-1 sm:text-sm">
                Because clean code today means scalable systems tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
