import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CountUpStats() {
  // Using Intersection Observer to detect when stats are visible
  const { ref: statsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Stats data array for easier maintenance and additions
  const stats = [
    {
      title: "Projects Completed",
      value: 42,
      suffix: "",
      description: "Since 2020",
      color: "text-primary",
      icon: "🚀",
      duration: 2.5,
    },
    {
      title: "Years Experience",
      value: 5,
      suffix: "+",
      description: "Professional coding",
      color: "text-secondary",
      icon: "⏳",
      duration: 2,
    },
    {
      title: "GitHub Contributions",
      value: 1250,
      suffix: "",
      description: "This year",
      color: "text-info",
      icon: "📊",
      duration: 3,
    },
    {
      title: "Client Satisfaction",
      value: 98,
      suffix: "%",
      description: "Based on feedback",
      color: "text-accent",
      icon: "⭐",
      duration: 2.5,
    },
    {
      title: "Certifications",
      value: 8,
      suffix: "",
      description: "Industry recognized",
      color: "text-success",
      icon: "🏆",
      duration: 2,
    },
    {
      title: "Coffee Consumed",
      value: 1825,
      suffix: "",
      description: "Cups and counting",
      color: "text-warning",
      icon: "☕",
      duration: 3.5,
    },
    {
      title: "Lines of Code",
      value: 156000,
      suffix: "+",
      description: "And still typing",
      color: "text-error",
      icon: "💻",
      duration: 4,
    },
    {
      title: "Workshops Conducted",
      value: 24,
      suffix: "",
      description: "Tech knowledge shared",
      color: "text-primary",
      icon: "👨‍🏫",
      duration: 2.5,
    },
    {
      title: "Hackathons Won",
      value: 6,
      suffix: "",
      description: "First place finishes",
      color: "text-secondary",
      icon: "🏅",
      duration: 2,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        ref={statsRef}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat bg-base-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <div className="stat-title font-medium">{stat.title}</div>
              <div className="text-2xl">{stat.icon}</div>
            </div>
            <div
              className={`stat-value ${stat.color} text-3xl md:text-4xl font-bold`}
            >
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
            <div className="stat-desc text-sm opacity-75">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountUpStats;
