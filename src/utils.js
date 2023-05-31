export const getStarsRating = (rating) => {
  if (rating >= 1 && rating < 4) return "⭐";
  if (rating >= 4 && rating < 6) return "⭐⭐";
  if (rating >= 6 && rating < 7) return "⭐⭐⭐";
  if (rating >= 7 && rating < 8.5) return "⭐⭐⭐⭐";
  if (rating >= 8.5) return "⭐⭐⭐⭐⭐";

  return "";
};

export const getAlphabeticalSections = (shows) => {
  const sections = [];
  shows.forEach((show) => {
    const sectionTitle = show.name[0].toUpperCase();
    const foundIndex = sections.findIndex((i) => i.title === sectionTitle);
    if (foundIndex >= 0) {
      sections[foundIndex].data.push(show);
    } else {
      sections.push({ title: sectionTitle, data: [show] });
    }
  });

  return sections;
};
