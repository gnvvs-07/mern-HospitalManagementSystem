export const formatDate = (
  dateString,
  config = { day: "numeric", month: "long", year: "numeric" }
) => {
  const [day, month, year] = dateString.split("-");
  const date = new Date(`${year}-${month}-${day}`);
  return date.toLocaleDateString("en-US", config);
};
