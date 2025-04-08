export const scrollToSection = (sectionId: string): void => {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const handleNavLinks = (e: React.MouseEvent, sectionId: string) => {
  e.preventDefault();

  if (sectionId === 'home') {
    scrollToTop();
  } else if (sectionId) {
    scrollToSection(sectionId);
  }
};

export const handleScrollLeft = (
  scrollContainerRef: React.RefObject<HTMLDivElement>
): void => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }
};

export const handleScrollRight = (
  scrollContainerRef: React.RefObject<HTMLDivElement>
): void => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }
};
