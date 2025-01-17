const Contact = () => {
    return(
        <>
  {/* Contact Section */}
  <section className="py-16 " id="contact">
    <div className="container mx-auto px-6 text-center">
      <h2
        className="text-4xl font-extrabold mb-4"
        style={{ fontFamily: '"Nokora", sans-serif' }}
      >
        ទំនាក់ទំនង
      </h2>
      <p className="text-xl mb-8">សូមទំនាក់ទំនងមកកាន់យើងក្តី</p>
      <div className="flex justify-center space-x-8">
        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="text-blue-600 hover:text-blue-800"
        >
          <i className="fab fa-facebook-f text-3xl" />
        </a>
        {/* Telegram Icon */}
        <a
          href="https://codekhmerlearning"
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          <i className="fab fa-telegram-plane text-3xl" />
        </a>
        {/* TikTok Icon */}
        <a
          href="https://www.tiktok.com"
          target="_blank"
          className="text-black hover:text-gray-800"
        >
          <i className="fab fa-tiktok text-3xl" />
        </a>
        {/* YouTube Icon */}
        <a
          href="https://www.youtube.com"
          target="_blank"
          className="text-red-600 hover:text-red-800"
        >
          <i className="fab fa-youtube text-3xl" />
        </a>
      </div>
    </div>
  </section>
</>

    )
}

export default Contact;