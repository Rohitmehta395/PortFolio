import React from "react";
import ShinyText from "../components/ShinyText";
import ClickSpark from "../components/ClickSpark";

const Home = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <ShinyText
        text="Just some shiny text!"
        disabled={false}
        speed={3}
        className="custom-class"
      />
    </ClickSpark>
  );
};

export default Home;
