import React from "react";
import { animated, useSpring } from "react-spring";

export const QuizTransition: React.FC<{
  triggerAnimation: boolean;
  children: React.ReactNode;
}> = ({ triggerAnimation, children }) => {
  const items = React.Children.toArray(children);
  const spring = useSpring({
    config: {
      mass: 1,
      tension: 120,
      friction: 14,
      duration: 200,
      ease: "easeInOut",
    },
    opacity: triggerAnimation ? 1 : 0,
  });
  return (
    <div>
      {items.map((item, index) => (
        <animated.div key={index} style={spring}>
          <animated.div>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default QuizTransition;
