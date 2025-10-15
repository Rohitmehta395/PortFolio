import { motion } from "framer-motion";
import ClickSpark from "../components/ClickSpark";
import ShinyText from "../components/ShinyText";
import GradientText from "../components/GradientText";

const About = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={8}
              showBorder={false}
              className="text-[3rem] md:text-[8rem] lg:text-[13rem] font-black text-white leading-none mb-8"
            >
              <h1 className="font-bold font-poppins">ABOUT ME</h1>
            </GradientText>

            <ShinyText
              text="MERN Stack Developer"
              disabled={false}
              speed={3}
              className="text-2xl md:text-3xl text-gray-400 font-light tracking-wider"
            />
          </motion.div>
        </section>
      </div>
    </ClickSpark>
  );
};

export default About;
