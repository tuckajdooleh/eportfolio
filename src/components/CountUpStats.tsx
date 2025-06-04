import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CERTIFICATIONS, EDUCATIONS, PROJECTS } from "../../utils/constants";
import { getYearsSinceDate, getDaysSinceDate } from "../../utils/utils";

function CountUpStats() {
  const { ref: statsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      title: "Projects Completed",
      value: PROJECTS.length,
      suffix: "",
      description: "Personal/Professional",
      color: "text-primary",
      icon: "🚀",
      duration: 2.5,
    },
    {
      title: "Years Experience",
      value: getYearsSinceDate(new Date(EDUCATIONS[0].endDate)),
      suffix: "+",
      description: "Professional Coding",
      color: "text-secondary",
      icon: "⏳",
      duration: 2,
    },
    {
      title: "Commits",
      value: 579,
      suffix: "",
      description: "In Personal Repos",
      color: "text-info",
      icon: "📊",
      duration: 3,
    },

    {
      title: "Certifications",
      value: CERTIFICATIONS.length,
      suffix: "",
      description: "Industry recognized",
      color: "text-success",
      icon: "🏆",
      duration: 2,
    },
    {
      title: "Coffee Consumed",
      value: getDaysSinceDate(new Date(EDUCATIONS[0].endDate)) * 2,
      suffix: "",
      description: "Cups and counting",
      color: "text-warning",
      icon: "☕",
      duration: 3.5,
    },
    {
      title: "Lines of Code",
      value: 1563512,
      suffix: "+",
      description: "Maybe?",
      color: "text-error",
      icon: "💻",
      duration: 4,
    },
  ];

  return (
    <div className="container mx-auto">
      <div
        ref={statsRef}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 bg-base-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full"
          >
            <div className="flex items-center justify-between w-full mb-2">
              <div className="font-medium text-base-content">{stat.title}</div>
              <div className="text-2xl flex items-center justify-center w-8 h-8">
                {stat.icon}
              </div>
            </div>
            <div className={`${stat.color} text-3xl md:text-4xl font-bold`}>
              {inView ? (
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={stat.duration}
                />
              ) : (
                "0" + stat.suffix
              )}
            </div>
            <div className="text-sm opacity-75 mt-1">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountUpStats;
