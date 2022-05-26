const changeProfileLable = (label: string) => {
  switch (label) {
    case "nim":
      return "Student ID";
    case "nama":
      return "Name";
    case "kelas":
      return "Class";
    case "program_name":
      return "Program";
    default:
      return label;
  }
};

export default changeProfileLable;
