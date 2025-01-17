const Footer = () => {
    return (
        <section className="bg-blue-900 text-white py-12">
  <div className="container mx-auto px-6 text-center md:text-left">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* About Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">អំពីយើង</h3>
        <p className="text-white mb-4">
          CodeKhmerLearning
          ផ្តល់ឱ្យអ្នកនូវវគ្គសិក្សាពិសេសក្នុងការរៀនកូដភាសាខ្មែរ។
          យើងមានក្រុមការងារព្រមមានជំនាញក្នុងការអភិវឌ្ឍកម្មវិធី និងវេបសាយ។
        </p>
        <p className="text-white">
          © 2025 CodeKhmerLearning. All Rights Reserved.
        </p>
      </div>
      {/* Quick Links Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">តំណភ្ជាប់រហ័ស</h3>
        <ul>
          <li>
            <a href="index.html" className="text-white hover:text-white mb-2">
              ផ្ទាំងដើម
            </a>
          </li>
          <li>
            <a href="#courses" className="text-white hover:text-white mb-2">
              វគ្គសិក្សា
            </a>
          </li>
          <li>
            <a href="about.html" className="text-white hover:text-white mb-2">
              អំពីយើង
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-white mb-2">
              ទំនាក់ទំនង
            </a>
          </li>
        </ul>
      </div>
      {/* Contact & Social Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">ទំនាក់ទំនង</h3>
        <p className="text-white mb-4">សូមទំនាក់ទំនងមកកាន់យើងក្តី:</p>
        <p className="text-white mb-4">Email: info@codekhmer.com</p>
        <p className="text-white mb-6">Phone: +855 888 052 812</p>
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="text-blue-600 hover:text-blue-800"
          >
            <i className="fab fa-facebook-f text-2xl" />
          </a>
          <a
            href="https://t.me"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            <i className="fab fa-telegram-plane text-2xl" />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            className="text-black hover:text-gray-700"
          >
            <i className="fab fa-tiktok text-2xl" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="text-red-600 hover:text-red-800"
          >
            <i className="fab fa-youtube text-2xl" />
          </a>
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <p className="text-white text-sm">
        © 2025 CodeKhmerLearning. All rights reserved.
      </p>
    </div>
  </div>
</section>

    )
}

export default Footer;