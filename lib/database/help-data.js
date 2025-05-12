// Data bantuan
export const helpData = {
  categories: [
    {
      id: 1,
      title: "Materi Pembelajaran",
      icon: "Book",
      description: "Bantuan terkait akses dan penggunaan materi pembelajaran",
      articles: 15,
    },
    {
      id: 2,
      title: "Kuis & Ujian",
      icon: "FileQuestion",
      description: "Bantuan terkait pengerjaan kuis dan ujian",
      articles: 12,
    },
    {
      id: 3,
      title: "Akun & Pengaturan",
      icon: "Settings",
      description: "Bantuan terkait pengaturan akun dan profil",
      articles: 10,
    },
    {
      id: 4,
      title: "Kelas & Tutor",
      icon: "Users",
      description: "Bantuan terkait kelas dan interaksi dengan tutor",
      articles: 8,
    },
    {
      id: 5,
      title: "Forum Diskusi",
      icon: "MessageSquare",
      description: "Bantuan terkait penggunaan forum diskusi",
      articles: 9,
    },
    {
      id: 6,
      title: "Sertifikat & Pencapaian",
      icon: "Award",
      description: "Bantuan terkait sertifikat dan pencapaian",
      articles: 7,
    },
  ],
  popularArticles: [
    {
      id: 101,
      title: "Cara mengakses materi pembelajaran offline",
      category: "Materi Pembelajaran",
      views: 1250,
    },
    {
      id: 102,
      title: "Bagaimana cara mengerjakan kuis dengan batas waktu",
      category: "Kuis & Ujian",
      views: 980,
    },
    {
      id: 103,
      title: "Cara mengubah password akun",
      category: "Akun & Pengaturan",
      views: 850,
    },
    {
      id: 104,
      title: "Cara mendapatkan sertifikat penyelesaian",
      category: "Sertifikat & Pencapaian",
      views: 720,
    },
    {
      id: 105,
      title: "Cara menghubungi tutor untuk konsultasi",
      category: "Kelas & Tutor",
      views: 680,
    },
  ],
  faqs: [
    {
      id: 1,
      question: "Bagaimana cara mengakses materi pembelajaran?",
      answer:
        "Anda dapat mengakses materi pembelajaran melalui menu 'Materi' di dashboard. Pilih kategori materi yang ingin dipelajari, kemudian klik pada judul materi untuk mulai belajar. Materi dapat diakses secara online, dan beberapa materi juga dapat diunduh untuk akses offline.",
      category: "Materi Pembelajaran",
    },
    {
      id: 2,
      question: "Apakah saya bisa mengulang kuis yang sudah dikerjakan?",
      answer:
        "Ya, Anda dapat mengulang kuis yang sudah dikerjakan dengan mengklik tombol 'Ulangi Kuis' pada halaman hasil kuis. Namun, perlu diperhatikan bahwa beberapa kuis mungkin memiliki batasan jumlah pengulangan, terutama untuk kuis yang bersifat ujian.",
      category: "Kuis & Ujian",
    },
    {
      id: 3,
      question: "Bagaimana cara mendapatkan sertifikat?",
      answer:
        "Untuk mendapatkan sertifikat, Anda perlu menyelesaikan seluruh materi dan lulus ujian akhir dengan nilai minimal 70%. Setelah memenuhi persyaratan tersebut, sertifikat akan otomatis diterbitkan dan dapat diakses melalui menu 'Sertifikat' di profil Anda.",
      category: "Sertifikat & Pencapaian",
    },
    {
      id: 4,
      question: "Bagaimana cara mengubah informasi profil?",
      answer:
        "Untuk mengubah informasi profil, klik pada avatar Anda di pojok kanan atas, kemudian pilih 'Profil'. Pada halaman profil, klik tombol 'Edit Profil' untuk mengubah informasi seperti nama, foto profil, dan biodata.",
      category: "Akun & Pengaturan",
    },
    {
      id: 5,
      question: "Apakah saya bisa belajar secara offline?",
      answer:
        "Ya, Anda dapat belajar secara offline dengan mengunduh materi terlebih dahulu. Klik tombol 'Unduh' pada halaman materi yang ingin diakses secara offline. Materi yang sudah diunduh dapat diakses melalui aplikasi mobile kami tanpa koneksi internet.",
      category: "Materi Pembelajaran",
    },
    {
      id: 6,
      question: "Bagaimana cara bertanya kepada tutor?",
      answer:
        "Anda dapat bertanya kepada tutor melalui beberapa cara: 1) Melalui forum diskusi dengan membuat topik baru, 2) Melalui fitur komentar pada materi pembelajaran, atau 3) Melalui fitur chat langsung dengan tutor yang tersedia pada jam kerja (08.00-20.00 WIB).",
      category: "Kelas & Tutor",
    },
    {
      id: 7,
      question: "Berapa lama waktu akses materi setelah berlangganan?",
      answer:
        "Waktu akses materi tergantung pada paket berlangganan yang Anda pilih. Paket Bulanan memberikan akses selama 30 hari, Paket Semester memberikan akses selama 6 bulan, dan Paket Tahunan memberikan akses selama 12 bulan. Setelah masa berlangganan habis, Anda perlu memperpanjang untuk tetap dapat mengakses materi.",
      category: "Materi Pembelajaran",
    },
    {
      id: 8,
      question:
        "Apakah saya bisa mengakses platform dari perangkat yang berbeda?",
      answer:
        "Ya, Anda dapat mengakses platform dari berbagai perangkat seperti komputer, tablet, atau smartphone. Sistem kami akan menyinkronkan progres belajar Anda di semua perangkat selama Anda login dengan akun yang sama.",
      category: "Akun & Pengaturan",
    },
  ],
  contactMethods: [
    {
      id: 1,
      title: "Email",
      icon: "Mail",
      description: "Kirim pertanyaan Anda melalui email",
      value: "support@SmartEdu.id",
      responseTime: "24 jam",
    },
    {
      id: 2,
      title: "Telepon",
      icon: "Phone",
      description: "Hubungi tim dukungan kami",
      value: "+62 21 1234 5678",
      responseTime: "Langsung",
      availableTime: "08.00 - 20.00 WIB",
    },
    {
      id: 3,
      title: "Live Chat",
      icon: "MessageSquare",
      description: "Chat langsung dengan tim dukungan",
      responseTime: "5 menit",
      availableTime: "08.00 - 22.00 WIB",
    },
    {
      id: 4,
      title: "Video Call",
      icon: "Video",
      description: "Konsultasi melalui video call",
      responseTime: "Dengan janji",
      availableTime: "09.00 - 17.00 WIB",
    },
  ],
};
