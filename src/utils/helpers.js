export const getInitials = (name) => {
  return name
    .split(" ")
    .filter((word) => word.length > 0)
    .map((name) => name[0])
    .join("");
};
