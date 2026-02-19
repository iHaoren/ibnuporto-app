const contactLinks = [
  {
    id: 1,
    icon: "ri-mail-line",
    label: "Email",
    value: "ibnuharun@email.com",
    href: "mailto:ibnuharun@email.com",
    color: "group-hover:text-amber-400",
    delay: "100",
  },
  {
    id: 2,
    icon: "ri-whatsapp-line",
    label: "WhatsApp",
    value: "+62 859-1806-95624",
    href: "https://wa.me/0859180695624",
    color: "group-hover:text-emerald-400",
    delay: "200",
  },
  {
    id: 3,
    icon: "ri-linkedin-box-line",
    label: "LinkedIn",
    value: "Ibnu Harun",
    href: "https://linkedin.com/in/harunal",
    color: "group-hover:text-sky-400",
    delay: "300",
  },
  {
    id: 4,
    icon: "ri-github-line",
    label: "GitHub",
    value: "iHaoren",
    href: "https://github.com/ihaoren",
    color: "group-hover:text-stone-200",
    delay: "400",
  },
  {
    id: 5,
    icon: "ri-instagram-line",
    label: "Instagram",
    value: "@iharun_al",
    href: "https://instagram.com/iharun_al",
    color: "group-hover:text-rose-400",
    delay: "500",
  },
];

const Contact = () => {
  return (
    <section className="py-16" id="contact">
      <h2
        className="text-2xl md:text-3xl text-center font-bold mb-3 bg-linear-to-r from-[#F59E0B] to-[#F43F5E] text-transparent bg-clip-text"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Get In Touch
      </h2>
      <p
        className="text-center text-stone-400 mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Let&apos;s connect and build something great together
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {contactLinks.map((contact) => (
          <a
            key={contact.id}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-stone-800/50 rounded-2xl border border-stone-700/40 p-6 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/5 overflow-hidden block"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={contact.delay}
          >
            {/* Warm hover glow */}
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/0 to-rose-500/0 group-hover:from-amber-500/5 group-hover:to-rose-500/5 transition-all duration-500 rounded-2xl"></div>

            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-stone-700/50 flex items-center justify-center group-hover:bg-stone-700/80 transition-colors duration-300 shrink-0">
                <i
                  className={`${contact.icon} text-2xl text-stone-400 ${contact.color} transition-colors duration-300`}
                ></i>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-0.5">
                  {contact.label}
                </p>
                <p className="text-stone-200 font-medium truncate">
                  {contact.value}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
