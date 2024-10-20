import Image from "next/image";
const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TypeScript Project */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/images/typescript.png"
              alt="TypeScript"
              width={350}
              height={350}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">TypeScript Project</h3>
            <p className="text-gray-600">
              A project showcasing core TypeScript skills and features.
            </p>
          </div>

          {/* Node.js Project */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
              src="/images/nodejsa.png"
              alt="NodeJS"
              width={350}
              height={350}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Node.js Project</h3>
            <p className="text-gray-600">
              A project highlighting server-side development with Node.js.
            </p>
          </div>

          {/* Next.js Project */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
              src="/images/nextjs.png"
              alt="Next.JS"
              width={350}
              height={350}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Next.js Project</h3>
            <p className="text-gray-600">
              A project demonstrating dynamic page generation with Next.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
