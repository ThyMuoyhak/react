const Purpose = () => {
    return (
        <section className="bg-gray-100 py-16" id="purpose">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2
        className="text-4xl font-extrabold text-gray-800 mb-4"
        style={{ fontFamily: '"Nokora", sans-serif' }}
      >
        គោលបំណងនៃការបង្កើតវេបសាយនេះ
      </h2>
      <p className="text-xl text-gray-600">
        វេបសាយនេះត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ឱកាសសម្រាប់ការរៀនកូដ
        និងជួយបង្កើតការយល់ដឹងពីភាសាកូដនានាជាភាសាខ្មែរ។
      </p>
    </div>
    <div className="flex flex-wrap justify-center space-x-8">
      {/* Purpose Point 1 */}
      <div className="w-full md:w-1/3 text-center mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ការអភិវឌ្ឍជំនាញកូដ
          </h3>
          <p className="text-gray-600">
            យើងបង្កើតវេបសាយនេះដើម្បីជួយអ្នករៀនបង្កើតកម្មវិធីនិងកូដផ្ទាល់ខ្លួនឲ្យមានការយល់ដឹងនិងជំនាញជាមួយភាសាកូដដែលមានប្រយោជន៍។
          </p>
        </div>
      </div>
      {/* Purpose Point 2 */}
      <div className="w-full md:w-1/3 text-center mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ការបង្កើតសហគមន៍អ្នកសិក្សា
          </h3>
          <p className="text-gray-600">
            យើងចង់បង្កើតសហគមន៍មួយសម្រាប់អ្នកសិក្សាដើម្បីអាចចែករំលែកគ្នានូវបទពិសោធន៍និងបច្ចេកវិទ្យា
            ក្នុងការអភិវឌ្ឍន៍វេបសាយ។
          </p>
        </div>
      </div>
      {/* Purpose Point 3 */}
      <div className="w-full md:w-1/3 text-center mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ការលើកស្ទួយកម្រិតជំនាញ
          </h3>
          <p className="text-gray-600">
            វេបសាយនេះក៏មានគោលបំណងលើកស្ទួយកម្រិតជំនាញកូដរបស់អ្នកដោយផ្តល់ឱកាសរៀនពីគម្រោងជាក់ស្តែងនិងវគ្គសិក្សាថ្មីៗ។
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Purpose;