import html2canvas from "html2canvas";
import React from "react";
import InstagramPost, {
  Post,
} from "../../../components/sales/marketing/InstagramPost";

const MarketingStudioPage = () => {
  const whatIsSkillify: Post[] = [
    {
      title: "What is Skillify?",
      type: "coverPostForCarouselWithBrand",
    },
    {
      title: "We are a community",
      footer: "2/4",
      description:
        "At Skillify we believe in community based learning where we connect our students with peers and mentors to keep each student accountable.",
      type: "postWithTitleBodyAndFooterCentered",
    },
    {
      title: "Our Vision",
      footer: "3/4",
      description:
        "We want to encourage everyone to follow their passions and pursue careers that make them happy and fulfilled. \nSkillify is here to provide personalized education and training to anyone that wants to pursue a career in tech. We make it fun to learn coding with customized projects and a supportive community!",
      type: "postWithTitleBodyAndFooterCentered",
    },
    {
      title: "Why Join Skillify?",
      footer: "4/4",
      description:
        "As a student at Skillify, you will gain hands-on experience by building real projects, networking with industry experts and with other students. \nThe projects that you will build can be great additions to your portfolio to show off your skills.",
      type: "postWithTitleBodyAndFooterCentered",
    },
  ];

  const transformYourCareer: Post[] = [
    {
      title: "Transform your career",
      type: "coverPostForCarouselWithBrand",
    },
  ];

  return (
    // make each column 300px wide
    <div className="flex flex-wrap gap-4">
      {whatIsSkillify.map((post, index) => {
        return (
          <div key={index}>
            <InstagramPost post={post} />
          </div>
        );
      })}

      <button
        onClick={() => {
          Promise.all(
            Array.from(document.querySelectorAll(".capture")).map((it) => {
              return html2canvas(it as HTMLElement, {
                scale: 2,
              }).then((canvas) => {
                document.body.appendChild(canvas);
              });
            })
          );
        }}
      >
        Capture
      </button>
    </div>
  );
};

export default MarketingStudioPage;

MarketingStudioPage.getLayout = function getLayout(page) {
  return <div className="theme-default">{page}</div>;
};

MarketingStudioPage.auth = true;
