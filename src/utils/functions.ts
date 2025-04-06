export const scrollToSection = (sectionId: string): void => {
  const section = document.querySelector(`#${sectionId}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
