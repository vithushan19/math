export const imageSrc = (completed, locked, type) => {
    if (completed) {
      return "/images/studentPortal/checkmark.svg";
    } else if (locked && type === "lesson") {
      return "/images/studentPortal/lesson_inactive.svg";
    } else if (locked && type === "quiz") {
      return "/images/studentPortal/quiz_inactive.svg";
    } else if (locked && type === "assignment") {
      return "/images/studentPortal/assignment_inactive.svg";
    } else if (type === "lesson") {
      return "/images/studentPortal/lesson_active.svg";
    } else if (type === "quiz") {
      return "/images/studentPortal/quiz_active.svg";
    } else if (type === "assignment") {
      return "/images/studentPortal/assignment_active.svg";
    }
    return "";
  };

  export const freemiumImageSrc = (completed, description, locked, type, freemiumMessage) => {
    if (description === "") {
        return "/images/studentPortal/lesson_inactive.svg";
    } else if (freemiumMessage) {
        return "../../images/logo-2.png";
    } else {
        return imageSrc(completed, locked, type);
    }
};
