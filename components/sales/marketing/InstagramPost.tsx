import React from "react";

import CoverPostForCarouselWithBrand from "./CoverPostForCarouselWithBrand";
import PostWithTitleBodyAndFooterCentered from "./PostWithTitleBodyAndFooterCentered";
import PostWithTitleBodyAndFooterSpread from "./PostWithTitleBodyAndFooterCenteredSpread";

export type InstagramPostProps = {
  post: Post;
};

export type Post =
  | {
      type: "coverPostForCarouselWithBrand";
      title: string;
    }
  | {
      type: "postWithTitleBodyAndFooterCentered";
      title: string;
      description: string;
      footer: string;
    }
  | {
      type: "postWithTitleBodyAndFooterSpread";
      title: string;
      description: string;
      footer: string;
    };

const InstagramPost = ({ post }: InstagramPostProps) => {
  return (
    <div>
      {post.type === "coverPostForCarouselWithBrand" ? (
        <CoverPostForCarouselWithBrand title={post.title} />
      ) : post.type === "postWithTitleBodyAndFooterCentered" ? (
        <PostWithTitleBodyAndFooterCentered
          title={post.title}
          description={post.description}
          footer={post.footer}
        />
      ) : post.type === "postWithTitleBodyAndFooterSpread" ? (
        <PostWithTitleBodyAndFooterSpread
          title={post.title}
          description={post.description}
          footer={post.footer}
        />
      ) : null}
    </div>
  );
};

export default InstagramPost;
