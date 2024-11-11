import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#36393f] text-gray-200 flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Welcome to <span className="text-violet-400">Nexus</span>
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Nexus is your one-stop platform where freelancers around the world can communicate through our Community Forum section and enhance their skills with the help of our Mentorship feature.
        </p>
        <div className="flex flex-wrap justify-center">
          <button
            className="px-8 py-3 m-2 text-lg font-bold rounded bg-violet-600 text-gray-50"
            onClick={() => navigate('/login')}
          >
            Get started
          </button>
          <button
            className="px-8 py-3 m-2 text-lg border rounded text-gray-200 border-gray-300"
            onClick={() => navigate('/register')}
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
