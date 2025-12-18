  const topics = [
    "Foundations of Computational Intelligence",
    "Machine Learning and Deep Learning Architectures",
    "Neural Networks, Hybrid Intelligent Systems, and Neuro-Symbolic AI",
    "Evolutionary Computation, Swarm Intelligence, and Bio-Inspired Algorithms",
    "Fuzzy Systems, Soft Computing, and Uncertainty Modeling",
    "Intelligent Optimization and Metaheuristic Techniques",
    "Explainable, Trustworthy, and Responsible Computational Intelligence",
    "Computational Intelligence for Data-Driven Decision Making and Intelligent Control",
    "CI for Edge, Embedded, and Resource-Constrained Systems",
    "Computational Intelligence for Healthcare, Agriculture, Smart Cities, and Industry 4.0",
    "Hybrid CI for Big Data Analytics and Intelligent Systems",
  ];

export default function CallForPaper() {
  return (
    <div className="container text-white min-h-screen flex flex-col justify-start py-8">
      <h2 className="text-3xl font-black text-gold pt-5">
        THE ICERCS 26 WELCOMES ORIGINAL WORKS IN AREAS SUCH AS
      </h2>
      <p className="pt-2 text-lg">
        The research scope of computational science can be viewed as follows but
        is not limited to:
      </p>
      <ul className="list-disc pt-5 pl-8 text-sm space-y-2">
        {topics.map((topic, idx) => (
          <li key={idx}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}
