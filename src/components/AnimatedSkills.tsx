import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function AnimatedSkills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "CSS/Tailwind", level: 80, color: "bg-cyan-500" },
    { name: "Node.js", level: 75, color: "bg-green-500" },
    { name: "TypeScript", level: 70, color: "bg-blue-600" },
  ];

  return (
    <div ref={ref} className="my-8 p-4 bg-base-200 rounded-box">
      <h3 className="text-2xl font-bold text-center mb-6">Technical Skills</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className={`h-2.5 rounded-full ${skill.color}`}
                initial={{ width: 0 }}
                animate={{ width: inView ? `${skill.level}%` : "0%" }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedSkills;
