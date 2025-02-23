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

const toDateLabel = (dateString) => {
  const date = new Date(dateString);
  return [
    `${date.getFullYear()}`,
    `${new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    )} ${String(date.getDate()).padStart(2, "0")}`
  ];
};

const toMarkerLabel = (data) => {
  const { x, y } = data;
  const date = new Date(x);
  return [
    `${String(date.getMonth() + 1).padStart(2, "0")}/${String(
      date.getDate()
    ).padStart(2, "0")}`,
    `${y}회`
  ];
};

export { unitToString, toDateLabel, toMarkerLabel };
