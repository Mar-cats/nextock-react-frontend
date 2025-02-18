const unitToString = (unit) => {
  switch (unit) {
    case "day":
      return "일";
    case "week":
      return "주";
    case "month":
      return "월";
    case "year":
      return "연";
    default:
      return "";
  }
};

export { unitToString };
