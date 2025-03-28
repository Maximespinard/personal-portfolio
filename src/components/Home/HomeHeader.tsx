import Arrow from '../../assets/icons/arrow.svg';
import meIcon from '../../assets/icons/me-icon.png';
import elipse from '../../assets/ui/elipse.png';

const HomeHeader = () => {
  return (
    <div className="container">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="mt-12 md:ml-8 relative flex flex-col items-center order-last sm:order-first">
          <img
            src={meIcon}
            alt="Maxime Spinard"
            className="w-[175px] sm:w-[250px]"
          />
          <span className="absolute collapse sm:-top-8 sm:-right-4 sm:visible">
            <Arrow />
          </span>
        </div>
        <div className="sm:ml-8 sm:relative mt-5">
          <div className="flex flex-col ">
            <span className="text-base sm:absolute sm:-top-8 md:-top-12 lg:-top-16 ">
              Hello! I am
              <span className="text-main-purple"> Maxime Spinard</span>
            </span>
            <div className="mt-5 sm:mt-10 sm:space-y-2">
              <p className="text-sm  md:text-base">A Developer who</p>
              <p
                className="text-2xl font-bold md:text-4xl whitespace-nowrap"
                role="heading"
                aria-level={2}
              >
                Builds solutions
              </p>
              <p className="text-2xl font-bold md:text-4xl relative">
                line by
                <span className="relative inline-flex items-center whitespace-nowrap left-3 top-0.5">
                  <img
                    src={elipse}
                    alt="Ellipse"
                    className="absolute z-[3] right-2  w-[150px] h-auto"
                    style={{ objectFit: 'contain' }}
                  />
                  <span className="text-main-purple relative z-10 text-2xl md:text-4xl">
                    line
                  </span>
                  <span className="text-2xl  md:text-4xl md:relative md:top-1 md:left-1">
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
