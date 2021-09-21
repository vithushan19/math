import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      session.user.id = token.sub;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/practice";
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      userSync(token);
      return token;
    },
  },
});

const userSync = async (token) => {
  const userId = token.sub;
  const nickname = token.name;
  const url = "https://talented-duckling-40.hasura.app/v1/graphql";
  const upsertUserQuery = `
  
  mutation initializeUser ($userId: String!, $name:String){
    insert_users(objects: [{ id: $userId, name:$name }], on_conflict: { constraint: users_pkey, update_columns: [] }) {
      affected_rows
  }
   insert_user_badges(
      objects: [
        { userId: $userId, locked: true, badgeId: 1 }
        { userId: $userId, locked: true, badgeId: 2 }
        { userId: $userId, locked: true, badgeId: 3 }
        { userId: $userId, locked: true, badgeId: 4 }
        { userId: $userId, locked: true, badgeId: 6 }
        { userId: $userId, locked: true, badgeId: 7 }
        { userId: $userId, locked: true, badgeId: 8 }
        { userId: $userId, locked: true, badgeId: 9 }
        { userId: $userId, locked: true, badgeId: 10 }
        { userId: $userId, locked: true, badgeId: 11 }
        { userId: $userId, locked: true, badgeId: 12 }
        { userId: $userId, locked: true, badgeId: 13 }
        { userId: $userId, locked: true, badgeId: 40 }
        { userId: $userId, locked: true, badgeId: 41 }
        { userId: $userId, locked: true, badgeId: 42 }
        { userId: $userId, locked: true, badgeId: 43 }
        { userId: $userId, locked: true, badgeId: 44 }
        { userId: $userId, locked: true, badgeId: 45 }
        { userId: $userId, locked: true, badgeId: 46 }
        { userId: $userId, locked: true, badgeId: 47 }
        { userId: $userId, locked: true, badgeId: 48 }
        { userId: $userId, locked: true, badgeId: 49 }
        { userId: $userId, locked: true, badgeId: 50 }
        { userId: $userId, locked: true, badgeId: 51 }
        { userId: $userId, locked: true, badgeId: 52 }
        { userId: $userId, locked: true, badgeId: 53 }
        { userId: $userId, locked: true, badgeId: 54 }
      ]
    ) {
      returning {
        badgeId
      }
    }
  insert_user_skills(
    objects: [
      { user_id: $userId, skill_id: 1, emoji: null }
      { user_id: $userId, skill_id: 2, emoji: null }
      { user_id: $userId, skill_id: 3, emoji: null }
      { user_id: $userId,  skill_id: 4, emoji: null }
      { user_id: $userId, skill_id: 34, emoji: null }
      { user_id: $userId, skill_id: 35, emoji: null }
      { user_id: $userId,  skill_id: 36, emoji: null }
      { user_id: $userId,  skill_id: 37, emoji: null }
      { user_id: $userId,  skill_id: 38, emoji: null }
      { user_id: $userId, skill_id: 39, emoji: null }
      { user_id: $userId,  skill_id: 40, emoji: null }
      { user_id: $userId, skill_id: 41, emoji: null }  
      { user_id: $userId, skill_id: 42, emoji: null } 
      { user_id: $userId, skill_id: 43, emoji: null }
      { user_id: $userId, skill_id: 44, emoji: null }
      { user_id: $userId,  skill_id: 45, emoji: null }
      { user_id: $userId,  skill_id: 46, emoji: null }
      { user_id: $userId,  skill_id: 47, emoji: null }
      { user_id: $userId, skill_id: 48, emoji: null }
      { user_id: $userId,  skill_id: 49, emoji: null }
      { user_id: $userId, skill_id: 50, emoji: null }  
      { user_id: $userId, skill_id: 51, emoji: null }    
      { user_id: $userId, skill_id: 52, emoji: null }  
      { user_id: $userId, skill_id: 53, emoji: null }
      { user_id: $userId,  skill_id: 54, emoji: null }
      { user_id: $userId,  skill_id: 55, emoji: null }
      { user_id: $userId,  skill_id: 56, emoji: null }
      { user_id: $userId, skill_id: 57, emoji: null }
      { user_id: $userId,  skill_id: 58, emoji: null }
      { user_id: $userId, skill_id: 59, emoji: null }  
      { user_id: $userId, skill_id: 60, emoji: null }    
      { user_id: $userId, skill_id: 61, emoji: null } 
      { user_id: $userId, skill_id: 62, emoji: null } 
      { user_id: $userId, skill_id: 63, emoji: null }  
      { user_id: $userId, skill_id: 64, emoji: null }    
      { user_id: $userId, skill_id: 65, emoji: null } 
      { user_id: $userId, skill_id: 66, emoji: null }
    ]
  ) {
    returning {
      skill_id
    }
  }
}
`;
  // TODO if user was already in the user table, then update the last seen column
  // If the user was newly added to the user table, then initialize their skills, and badges
  const graphqlReq = {
    query: upsertUserQuery,
    variables: { userId: userId, name: nickname },
  };

  await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
    },
    body: JSON.stringify(graphqlReq),
  });
};
