function Contact() {
  return (
    <section className="bg-[#fdfbf5] py-16">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-6xl font-light mb-12">
          Contact
        </h1>

        <form className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 rounded-xl px-6 py-4 outline-none focus:border-pink-500"
            />

            <input
              type="email"
              placeholder="Email *"
              className="border border-gray-400 rounded-xl px-6 py-4 outline-none focus:border-pink-500"
            />

          </div>

          <input
            type="tel"
            placeholder="Phone number"
            className="w-full border border-gray-400 rounded-xl px-6 py-4 outline-none focus:border-pink-500"
          />

          <textarea
            rows="5"
            placeholder="Comment"
            className="w-full border border-gray-400 rounded-xl px-6 py-4 outline-none resize-none focus:border-pink-500"
          ></textarea>

          <button
            type="submit"
            className="bg-white shadow-lg rounded-xl px-12 py-4 hover:bg-pink-500 hover:text-white transition duration-300"
          >
            Submit
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;