import DataImage from "../data";

const About = () => {
  return (
    <section className="py-8" id="about">
      <div
        className="grid md:grid-cols-2 gap-12 items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div
          className="relative group"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-[#F59E0B] to-[#F43F5E] rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
          <img
            src={DataImage.AboutImage}
            alt="Tentang Ibnu"
            className="relative rounded-2xl w-full h-[400px] object-cover"
          />
        </div>

        <div
          className="space-y-6"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#F59E0B] to-[#F43F5E] text-transparent bg-clip-text">
            Tentang Saya
          </h2>
          <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700/40">
            <p className="text-stone-300 leading-relaxed">
              Saya lulusan baru dari SMK jurusan Teknik Elektronika. Saat ini,
              saya sedang mengalihkan fokus karier ke bidang Python Development.
              Latar belakang di Teknik Elektronika sudah melatih saya untuk
              berpikir sistematis, logis, dan menyelesaikan masalah. Sekarang,
              saya menerapkan pola pikir yang sama ke dunia pemrograman, data,
              dan produk digital.
              <br />
              Saya aktif mengembangkan kemampuan di bidang pemrograman dan
              kecerdasan buatan. Saya belajar dasar-dasar bahasa Python lewat
              YouTube dan program beasiswa Dicoding Indonesia. Saya juga aktif
              mengikuti pelatihan yang diselenggarakan Dicoding Indonesia,
              seperti program IDCamp 2025, Coding Camp 2026, Microsoft Elevate
              Training Center, dan AWS Back-End Academy.
              <br />
              Saya tertarik dengan bagaimana kecerdasan buatan bisa
              menyelesaikan masalah nyata. Misalnya, saya belajar bagaimana
              aplikasi mengotomatisasi tugas sehari-hari dan bagaimana data
              mendukung pengambilan keputusan di bidang penjualan, operasional,
              dan desain produk. Saya bercita-cita untuk mengembangkan
              stabilitas ekonomi dan membantu UMKM di Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
