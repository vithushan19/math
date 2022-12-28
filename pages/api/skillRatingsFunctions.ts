import { SkillsAndRatings } from "../../graphql/fetchSkillsAndRatings";
import { UserSkillsRatings } from "../../graphql/fetchUserSkillsRatings";
import { SkillRatingsRow } from "../../redux/skillRatingsSlice";



export const initializeSkillRating = (skillIds: string[], userId: string) => {
    const newSkillRatings = skillIds.map((skillId) => {
      return {
        skillId: skillId,
        userId: userId,
        studentRating: 0,
      };
    });
  
    return newSkillRatings;
  };

  export const transformSkillRating = (skillRatings: UserSkillsRatings[]) => {
    // map to redux type
    const mappedSkillRating: SkillRatingsRow[] = skillRatings.map((row) => {
      return {
        userSkillId: row.id,
        skillId: row.intro_course_skill["id"],
        skillName: row.intro_course_skill["name"],
        unitName: row.intro_course_skill["intro_course_unit"]["title"],
        studentRating: parseInt(row.studentRating),
      };
    });

    return mappedSkillRating;
  };

  export const transformSkillsAndRatings = (skillRatings: SkillsAndRatings[]) => {
    // map to redux type
    const mappedSkillRating: SkillRatingsRow[] = skillRatings.map((row) => {
      return {
        userSkillId: row.intro_course_skills_users.id["intro_course_skills_users"]["id"],
        skillId: row.id,
        skillName: row.name["name"],
        unitName: row.intro_course_unit.unitTitle["intro_course_unit"]["unitTitle"],
        studentRating: parseInt(row.intro_course_skills_users_aggregate.studentRating)["intro_course_skills_users_aggregate"]["studentRating"],
        
      };
    });

    return mappedSkillRating;
  };