export const getStarsRating = (rating) => {
  if (rating >= 1 && rating < 4) return "⭐";
  if (rating >= 4 && rating < 6) return "⭐⭐";
  if (rating >= 6 && rating < 7) return "⭐⭐⭐";
  if (rating >= 7 && rating < 8.5) return "⭐⭐⭐⭐";
  if (rating >= 8.5) return "⭐⭐⭐⭐⭐";

  return "";
};
