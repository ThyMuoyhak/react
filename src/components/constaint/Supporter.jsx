const Supporter = () => {
    return(
        <section
  className="py-16 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"
  id="supporter"
>
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2
        className="text-5xl font-extrabold text-white mb-4"
        style={{ fontFamily: '"Nokora", sans-serif' }}
        data-aos="fade-up"
      >
        អ្នកគាំទ្ររបស់យើង
      </h2>
      <p
        className="text-xl text-white opacity-80"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        យើងអាចសម្រេចគោលដៅត្រឹមត្រូវបានដោយសារការគាំទ្ររបស់អ្នកគាំទ្រដែលមានតម្លៃ។
      </p>
    </div>
    <div className="flex justify-center items-center mb-8">
      {/* Single Supporter */}
      <div
        className="w-48 h-48 bg-white shadow-lg rounded-full flex justify-center items-center overflow-hidden transform transition-all hover:scale-105"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <img
          src="https://www.codekhmerlearning.online/img/lengbora.jpg"
          alt="Supporter Logo"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
    <h2
      className="text-3xl font-extrabold text-white mb-4 text-center"
      style={{ fontFamily: '"Nokora", sans-serif' }}
      data-aos="fade-up"
    >
      លោកគ្រូ ឡេង បូរ៉ា
    </h2>
  </div>
</section>

    )
}

export default Supporter;