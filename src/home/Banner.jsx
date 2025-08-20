import { motion } from "framer-motion";
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";

const Banner = () => {
  const MotionImg = motion.img;
  return (
    <div className="hero bg-base-100 min-h-[400px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <MotionImg
            src={team1}
            className="max-w-96 rounded-t-4xl rounded-br-4xl border-l-4 border-b-8 border-[#3C65F5] border-solid shadow-2xl"
            animate={{ y: [50, 100, 50] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <MotionImg
            src={team2}
            className="max-w-80 rounded-t-4xl rounded-br-4xl border-l-4 border-b-8 border-[#3C65F5] border-solid shadow-2xl"
            animate={{ x: [100, 200, 100] }}
            transition={{
              duration: 10,
              delay: 5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-6xl font-bold">
            The <span className="text-blue-600">Easiest Way</span>
            <br /> to Get Your New <br /> Job
          </h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
