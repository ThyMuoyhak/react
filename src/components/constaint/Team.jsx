const Team = () => {
    return (
        <section className="py-16" id="team">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2
        className="text-4xl font-extrabold mb-4"
        style={{ fontFamily: '"Nokora", sans-serif' }}
        data-aos="fade-up"
      >
        ក្រុមការងាររបស់យើង
      </h2>
      <p className="text-xl" data-aos="fade-up" data-aos-delay={100}>
        សូមស្វាគមន៍មកកាន់ក្រុមការងាររបស់យើង!
        យើងមានក្រុមអ្នកជំនាញដែលប្រឹងប្រែងដើម្បីផ្តល់ការបណ្តុះបណ្តាលល្អបំផុត។
      </p>
    </div>
    <div className="flex flex-wrap justify-center space-x-8">
      {/* Team Member 1 */}
      <div
        className="w-full md:w-1/3 text-center mb-8"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <img
          src="https://www.codekhmerlearning.online/img/mean.png"
          alt="Team Member"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">
          ញ៉ែម សុមាន | និសិត្សឆ្នាំទី២
        </h3>
        <p className="mb-4">អ្នកបណ្តុះបណ្តាលកូដ</p>
        <p>
          ញ៉ែម សុមាន គឺជាអ្នកអភិវឌ្ឍន៍វេបប្រចាំក្រុមយើង
          ដែលមានជំនាញកាន់តែច្រើនក្នុងការអភិវឌ្ឍន៍វេបសាយ និងការបណ្ដុះបណ្ដាល។
        </p>
      </div>
      {/* Team Member 2 */}
      <div
        className="w-full md:w-1/3 text-center mb-8"
        data-aos="fade-up"
        data-aos-delay={400}
      >
        <img
          src="https://www.codekhmerlearning.online/img/daro.jpg"
          alt="Team Member"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">
          ជឿន ដារ៉ូ | និសិត្សឆ្នាំទី២
        </h3>
        <p className="mb-4">អ្នកបណ្តុះបណ្តាលស្ថាបត្យករវេប</p>
        <p>
          ជឿន ដារ៉ូ ជាអ្នកជំនាញក្នុងការស្ថាបត្យកម្មវេប
          ដែលនាំមុខក្នុងការអភិវឌ្ឍន៍រចនាបទសម្រាប់គម្រោងយើង។
        </p>
      </div>
      {/* Team Member 3 */}
      <div
        className="w-full md:w-1/3 text-center mb-8"
        data-aos="fade-up"
        data-aos-delay={600}
      >
        <img
          src="https://www.codekhmerlearning.online/img/hak.jpg"
          alt="Team Member"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">
          ធី មួយហាក់ | និសិត្សឆ្នាំទី២
        </h3>
        <p className="mb-4">អ្នកបណ្តុះបណ្តាលកូដវេប</p>
        <p>
          ធី មួយហាក់
          គឺជាអ្នកជំនាញក្នុងការសរសេរកូដវេបដែលមានបទពិសោធន៍ជាច្រើនក្នុងការអភិវឌ្ឍកម្មវិធី។
        </p>
      </div>
      {/* Team Member 4 */}
      <div
        className="w-full md:w-1/3 text-center mb-8"
        data-aos="fade-up"
        data-aos-delay={800}
      >
        <img
          src="https://www.codekhmerlearning.online/img/vit.jpg"
          alt="Team Member"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">
          សារ៉ារី ដេវីដ | និសិត្សឆ្នាំទី២
        </h3>
        <p className="mb-4">អ្នកគ្រប់គ្រងគម្រោង</p>
        <p>
          សារ៉ារី ដេវីដ ជាអ្នកគ្រប់គ្រងគម្រោងដែលមានការចេះដឹងច្បាស់លាស់
          និងសមត្ថភាពក្នុងការគ្រប់គ្រងការងារជាក្រុម។
        </p>
      </div>
      {/* Team Member 5 */}
      <div
        className="w-full md:w-1/3 text-center mb-8"
        data-aos="fade-up"
        data-aos-delay={400}
      >
        <img
          src="https://www.codekhmerlearning.online/img/naput.jpg"
          alt="Team Member"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">
          រ៉េត ណាភុត | និសិត្សឆ្នាំទី២
        </h3>
        <p className="mb-4">អ្នកបណ្តុះបណ្តាលបច្ចេកវិទ្យា</p>
        <p>
          រ៉េត ណាភុត មានជំនាញក្នុងការបណ្តុះបណ្តាលផ្នែកបច្ចេកវិទ្យា
          ដោយមានសមត្ថភាពអភិវឌ្ឍន៍យ៉ាងមានប្រសិទ្ធភាព។
        </p>
      </div>
    </div>
  </div>
</section>

    )
}

export default Team;