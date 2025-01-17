import { useState } from 'react';

const Card = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{ fontFamily: '"Nokora", sans-serif' }}
        >
          វគ្គសិក្សារបស់យើង
        </h2>
        <div
          id="courses"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Course Card 1 */}
          <div className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://www.eldemy.co.uk/assets/images/media/pictures/courses/c_programming_for_beginners.jpg"
              alt="កម្មវិធី C"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី C</h3>
              <p className="mb-4">
                សិក្សាពីមូលដ្ឋាននៃកម្មវិធី C ដែលជាភាសាមួយមានអំណាចនិងអាចប្រើប្រាស់បានល្អ។
              </p>
              <a
                href="c_programming"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition duration-300"
              >
                ចុចដើម្បីរៀន
              </a>
              <span className="inline-block mt-2 text-sm font-medium text-green-500">
                មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://img-c.udemycdn.com/course/750x422/1576854_9aeb_2.jpg"
              alt="កម្មវិធី C++"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី C++</h3>
              <p className="mb-4">
                សិក្សា C++ ភាសាមួយដែលមានអស្ចារ្យសម្រាប់ការអភិវឌ្ឍកម្មវិធី។
              </p>
              <a
                href="cpp_programming"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-700 transition duration-300"
              >
                ចុចដើម្បីរៀន
              </a>
              <span className="inline-block mt-2 text-sm font-medium text-green-500">
                មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://kinsta.com/wp-content/uploads/2023/01/Java-logo.png"
              alt="កម្មវិធី Java"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី Java</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា Java ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Other Course Cards... */}
          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://cdn-ckjba.nitrocdn.com/XvHIXtRQMUYzLjoXbfBpiwAcydcSSOVj/assets/images/optimized/rev-81f45bc/www.ciat.edu/wp-content/uploads/2022/12/c-sharp-blog.jpeg"
              alt="កម្មវិធី Java"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី C#</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា C# ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
              alt="កម្មវិធី Java"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី HTML</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា HTML ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"
              alt="កម្មវិធី CSS"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី CSS</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា CSS ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://www.datocms-assets.com/48401/1628644950-javascript.png"
              alt="កម្មវិធី JavaScript"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី JavaScript</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា JavaScript ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://wpdean.com/wp-content/uploads/2024/05/what-is-bootstrap.jpg"
              alt="កម្មវិធី Bootstrap"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី Bootstrap</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា Bootstrap ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"
              alt="កម្មវិធី Tailwindcss"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី Tailwindcss</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា Tailwindcss ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://jaygould.co.uk/static/a540c5d36e6d0b33716ed77fa4a00bc3/c1b63/react.png"
              alt="កម្មវិធី React"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី React</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា React ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*ACR0gj0wbx91V_xgURifWg.png"
              alt="កម្មវិធី VueJs"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី VueJs</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា VueJs ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png"
              alt="កម្មវិធី Angular"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី Angular</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា Angular ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://da-manager.com/blog/wp-content/uploads/2022/12/php-programming-language.jpg"
              alt="កម្មវិធី PHP"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី PHP</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា PHP ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://bif.telkomuniversity.ac.id/sahecar/2024/12/Apa-Itu-MySQL-Pengertian-MySQL-Cara-Kerja-dan-Kelebihannya.png"
              alt="កម្មវិធី MySQL"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី MySQL</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា MySQL ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

          {/* Course Card with No Lesson (Java) */}
          <div
            onClick={toggleModal}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src="https://ik.imagekit.io/olibr/blogimages/Laravel-cover-image.webp"
              alt="កម្មវិធី Laravel"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">កម្មវិធី Laravel</h3>
              <p className="mb-4">
                អភិវឌ្ឍកម្មវិធីដោយប្រើភាសា Laravel ដែលជាភាសាកម្មវិធីពេញនិយមក្នុងពិភពលោក។
              </p>
              <span className="inline-block mt-2 text-sm font-medium text-red-500">
                មិនទាន់មានមេរៀន
              </span>
            </div>
          </div>

        </div>
        
      </div>

      

      

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 max-w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-black">🥺មេរៀនអត់ទាន់បានដាក់ចូល</h3>
            <p className="mb-4 text-black">សូមអភ័យទោស មេរៀននេះមិនទាន់បានដាក់ចូលនៅឡើងទេ។</p>
            <button
              onClick={toggleModal}
              className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
            >
              បិទ
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Card;
