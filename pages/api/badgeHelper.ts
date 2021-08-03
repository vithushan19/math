export const getBadgeId = (slug: string, currentLevel: number) => {
  if (slug != null) {
    if (slug.toLowerCase() == "numbers") {
      switch (currentLevel) {
        case 1:
          return 40;
        case 2:
          return 41;
        case 3:
          return 42;
      }
    } else if (slug.toLowerCase() == "addition") {
      switch (currentLevel) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 3;
        case 4:
          return 43;
        case 5:
          return 47;
      }
    } else if (slug.toLowerCase() == "subtraction") {
      switch (currentLevel) {
        case 1:
          return 4;
        case 2:
          return 6;
        case 3:
          return 7;
        case 4:
          return 46;
        case 5:
          return 48;
      }
    } else if (slug.toLowerCase() == "multiplication") {
      switch (currentLevel) {
        case 1:
          return 8;
        case 2:
          return 9;
        case 3:
          return 10;
        case 4:
          return 44;
        case 5:
          return 49;
      }
    } else if (slug.toLowerCase() == "division") {
      switch (currentLevel) {
        case 1:
          return 11;
        case 2:
          return 12;
        case 3:
          return 13;
        case 4:
          return 45;
        case 5:
          return 50;
      }
    }
  }
  return 0;
};
