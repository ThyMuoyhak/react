import React, { useState } from 'react';

const Question = () => {
  const [activeAnswer, setActiveAnswer] = useState(null);

  const toggleAnswer = (index) => {
    setActiveAnswer(activeAnswer === index ? null : index);
  };

  return (
    <section className="py-16" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{ fontFamily: '"Nokora", sans-serif' }}
            data-aos="fade-up"
          >
            សំណួរ និង ចម្លើយ
          </h2>
          <p className="text-xl" data-aos="fade-up" data-aos-delay={100}>
            សំណួរដែលគេឃើញញឹកញាប់សម្រាប់អ្នក
          </p>
        </div>
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white shadow-lg rounded-lg">
            <button
              className="w-full text-left px-6 py-4 text-2xl font-semibold text-gray-800 focus:outline-none"
              data-aos="fade-up"
              data-aos-delay={200}
              onClick={() => toggleAnswer(1)}
            >
              តើបង្កើតវេបសាយនេះដើម្បីអ្វី?
              <svg
                className="w-5 h-5 float-right transform transition-transform duration-300"
                id="arrow1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeAnswer === 1 && (
              <div className="px-6 py-4 text-gray-700 text-xl">
                ពួកយើងចង់បង្កើតវេបសាយនេះដើម្បីអោយអ្នកដែលគ្មានលទ្ធភាពរៀនខាងក្រៅបានរៀន
                ជាពិសេសសិស្សឬនិសិត្សដែលរៀននៅជនបទ ឬទើបតែមករៀននៅទីក្រុងក្ដី
                ក៏អាចរៀនបានដែរ។
              </div>
            )}
          </div>
          {/* Question 2 */}
          <div className="bg-white shadow-lg rounded-lg">
            <button
              className="w-full text-left px-6 py-4 text-2xl font-semibold text-gray-800 focus:outline-none"
              data-aos="fade-up"
              data-aos-delay={400}
              onClick={() => toggleAnswer(2)}
            >
              តើវេបសាយនេះរៀនបង់លុយដែរឬទេ?
              <svg
                className="w-5 h-5 float-right transform transition-transform duration-300"
                id="arrow2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeAnswer === 2 && (
              <div className="px-6 py-4 text-gray-700 text-xl">
                បាទ វេបសាយនេះពួកយើងមិនបង់លុយដើម្បីរៀននោះទេ
                គឺពួកយើងបង្កើតមកដើម្បីរៀនដោយឥតគិតថ្លៃ។
              </div>
            )}
          </div>
          {/* Question 3 */}
          <div className="bg-white shadow-lg rounded-lg">
            <button
              className="w-full text-left px-6 py-4 text-2xl font-semibold text-gray-800 focus:outline-none"
              data-aos="fade-up"
              data-aos-delay={600}
              onClick={() => toggleAnswer(3)}
            >
              មូលហេតុអ្វីបានបង្កើតវេបសាយ CodeKhmerLearning
              <svg
                className="w-5 h-5 float-right transform transition-transform duration-300"
                id="arrow3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeAnswer === 3 && (
              <div className="px-6 py-4 text-gray-700 text-xl">
                មូលហេតុដែលពួកយើងបង្កើតវេបសាយ CodeKhmerLearning
                ដោយសារពួកយើងចង់អោយនិស្សិតដែលស្រឡាញ់ជំនាញកូដ
                មានការងាយស្រួលសិក្សារជាងមុន
                ព្រោះក្នុងវេបសាយនេះពួកយើងបានបកប្រែជាភាសាខ្មែរ
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
