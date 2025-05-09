const checkStatusStyle = (title: string) => {
  switch (title) {
    case "pending":
      return "warning";
    case "approve":
      return "success";
    case "decline":
      return "danger";
    default:
      return "";
  }
};

export default checkStatusStyle;
