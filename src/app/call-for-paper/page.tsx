const topics = [
  "Big data analytics, multimedia analytics, cloud computing, edge computing, fog computing, etc.",
  "Real-time applications using artificial intelligence, machine learning, deep learning, etc.",
  "Novel application schemes and design tools for medical analysis and management",
  "Intelligent ideas and frameworks in power electronics & embedded system",
  "Computational intelligence in communication networks and industrial implementations",
  "Evolutionary algorithms, fuzzy systems, swarm intelligence in medical, industrial, scientific, power electronics, and digital electronics",
  "Protocols and frameworks for next-generation cellular systems",
  "Technological intervention in semiconductor devices, analog circuits, digital electronics",
  "Microwave and millimeter-wave techniques and their applications",
  "Wireless Sensor Networks and Wireless Optical Communications, WIFI. Internet of Things (loT), Narrow-Band loT",
  "Signal Processing, Image Scanning and Analysis, Biomedical Optics and Technologies. Medical Electronics and Neural Networks",
  "Technical Ideas in device performance, reliability, privacy, and security",
  "Trends in bioinformatics, bio-inspired methods, biological and biomedical computations",
  "Recent innovations in combinatorial scientific computing, optimization",
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
