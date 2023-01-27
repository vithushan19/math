import { useMutation, useQuery } from "@apollo/client";
import { transform } from "lodash";
import moment from "moment";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import PageHeader from "../../../components/coding/PageHeader";
import UnitView from "../../../components/coding/studentPortal/UnitView";
import { FETCH_USER_INTRO_NODES } from "../../../graphql/coding/fetchUserIntroNodes";
import {
  INIT_USER_INTRO_NODES,
  objects,
} from "../../../graphql/coding/initUserIntroNodes";
import { UPDATE_USER } from "../../../graphql/updateUser";
import { useAuth } from "../../../lib/authContext";
import { courseSelector } from "../../../redux/courseSlice";
import {
  reactUnits,
  interviewUnits,
  Unit,
} from "../../api/studentPortal/units";

export default function StudentPortalPage() {
  const { user } = useAuth();

  const [updateUser] = useMutation(UPDATE_USER);
  const { data } = useQuery(FETCH_USER_INTRO_NODES, {
    variables: {
      userId: user.uid,
    },
  });
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    setUnits(reactUnits);
  }, [data]);

  useEffect(() => {
    // TODO save profile photos to firebase storage and allow users to edit photos
    updateUser({
      variables: {
        userId: user.uid,
        last_seen: new Date(),
        profile_image: user.photoURL,
      },
    });
  }, [user]);

  return (
    <div className="flex flex-col w-full px-4 pb-4 sm:px-8 sm:pb-8 ">
      <PageHeader
        title={`Let's start learning, ${user.displayName}`}
        description={moment().format("MMM Do YYYY")}
      />
      <div className="grid grid-cols-1 gap-4">
        {units.map((it) => (
          <UnitView data={it} />
        ))}
      </div>
    </div>
  );
}

StudentPortalPage.auth = true;
