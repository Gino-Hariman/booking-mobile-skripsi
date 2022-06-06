const changeFieldText = (text: string) => {
  switch (text) {
    case "pending":
      return "Processing";
    case "approve":
      return "Accepted";
    case "decline":
      return "Decline";
    default:
      return "";
  }
};

export default changeFieldText;
