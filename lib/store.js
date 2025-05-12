"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialData } from "./db";

// Buat store dengan Zustand
export const useStore = create(
  persist(
    (set, get) => ({
      // State awal dari database
      users: initialData.users,
      materials: initialData.materials,
      quizzes: initialData.quizzes,
      discussions: initialData.discussions,
      helpData: {
        categories: [
          {
            id: 1,
            title: "Panduan Pengguna",
            description: "Panduan dasar menggunakan platform pembelajaran",
            icon: "Book",
            articles: 12,
          },
          {
            id: 2,
            title: "FAQ",
            description: "Pertanyaan yang sering diajukan",
            icon: "FileQuestion",
            articles: 24,
          },
          {
            id: 3,
            title: "Pengaturan Akun",
            description: "Bantuan untuk mengatur akun Anda",
            icon: "Settings",
            articles: 8,
          },
          {
            id: 4,
            title: "Komunitas",
            description: "Bantuan terkait forum dan diskusi",
            icon: "Users",
            articles: 6,
          },
          {
            id: 5,
            title: "Dukungan Teknis",
            description: "Bantuan untuk masalah teknis",
            icon: "Settings",
            articles: 15,
          },
          {
            id: 6,
            title: "Kontak",
            description: "Cara menghubungi kami",
            icon: "MessageSquare",
            articles: 4,
          },
        ],
        faqs: [
          {
            id: 1,
            question: "Bagaimana cara mengubah password?",
            answer:
              "Anda dapat mengubah password melalui halaman Pengaturan > Keamanan. Masukkan password lama Anda, kemudian masukkan dan konfirmasi password baru.",
            category: "Akun",
          },
          {
            id: 2,
            question: "Bagaimana cara mengakses materi?",
            answer:
              "Anda dapat mengakses materi melalui menu Materi di sidebar. Pilih kategori materi yang ingin Anda pelajari, kemudian pilih materi spesifik.",
            category: "Materi",
          },
          {
            id: 3,
            question: "Bagaimana cara mengikuti kuis?",
            answer:
              "Untuk mengikuti kuis, buka menu Kuis di sidebar. Pilih kuis yang ingin Anda ikuti dan klik tombol 'Mulai Kuis'.",
            category: "Kuis",
          },
          {
            id: 4,
            question: "Bagaimana cara bergabung dengan forum diskusi?",
            answer:
              "Untuk bergabung dengan forum diskusi, buka menu Forum di sidebar. Anda dapat melihat diskusi yang ada atau membuat diskusi baru.",
            category: "Forum",
          },
          {
            id: 5,
            question: "Bagaimana cara mendapatkan sertifikat?",
            answer:
              "Sertifikat akan diberikan setelah Anda menyelesaikan semua materi dan lulus kuis dengan nilai minimal 70.",
            category: "Sertifikat",
          },
          {
            id: 6,
            question: "Bagaimana jika saya lupa password?",
            answer:
              "Jika Anda lupa password, klik 'Lupa Password' di halaman login. Ikuti instruksi untuk mereset password Anda melalui email.",
            category: "Akun",
          },
          {
            id: 7,
            question: "Apakah saya bisa mengakses materi secara offline?",
            answer:
              "Saat ini, materi hanya dapat diakses secara online. Namun, Anda dapat mengunduh beberapa materi dalam format PDF untuk dibaca offline.",
            category: "Materi",
          },
          {
            id: 8,
            question: "Bagaimana cara menghubungi dukungan teknis?",
            answer:
              "Anda dapat menghubungi dukungan teknis melalui halaman Bantuan > Kontak. Isi formulir kontak atau gunakan metode kontak lain yang tersedia.",
            category: "Dukungan",
          },
        ],
        popularArticles: [
          {
            id: 1,
            title: "Cara Memulai Belajar di Platform",
            category: "Panduan Pengguna",
            views: 1245,
          },
          {
            id: 2,
            title: "Mengatur Notifikasi Pembelajaran",
            category: "Pengaturan Akun",
            views: 982,
          },
          {
            id: 3,
            title: "Tips Mengerjakan Kuis dengan Efektif",
            category: "FAQ",
            views: 876,
          },
          {
            id: 4,
            title: "Cara Mendapatkan Sertifikat",
            category: "Panduan Pengguna",
            views: 754,
          },
          {
            id: 5,
            title: "Mengatasi Masalah Teknis Umum",
            category: "Dukungan Teknis",
            views: 621,
          },
        ],
        contactMethods: [
          {
            id: 1,
            title: "Email",
            description: "Kirim email kepada tim dukungan kami",
            icon: "Mail",
            value: "support@learningplatform.com",
            responseTime: "24 jam",
          },
          {
            id: 2,
            title: "Telepon",
            description: "Hubungi hotline dukungan kami",
            icon: "Phone",
            value: "(021) 1234-5678",
            responseTime: "Langsung",
            availableTime: "08:00 - 17:00",
          },
          {
            id: 3,
            title: "Live Chat",
            description: "Chat langsung dengan tim dukungan",
            icon: "MessageSquare",
            responseTime: "5 menit",
            availableTime: "08:00 - 20:00",
          },
          {
            id: 4,
            title: "Video Call",
            description: "Jadwalkan sesi video call untuk bantuan lebih lanjut",
            icon: "Video",
            responseTime: "By appointment",
            availableTime: "10:00 - 16:00",
          },
        ],
      },
      categories: initialData.categories,
      levels: initialData.levels,
      userStats: initialData.userStats,
      events: initialData.events,

      // State untuk user yang sedang login
      currentUser: null,
      isAuthenticated: false,

      // Actions untuk autentikasi
      login: (email, password) => {
        const user = initialData.users.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          set({ currentUser: user, isAuthenticated: true });
          return { success: true };
        }

        return { success: false, error: "Email atau password salah" };
      },

      logout: () => {
        set({ currentUser: null, isAuthenticated: false });
      },

      register: (name, email, password) => {
        const existingUser = get().users.find((user) => user.email === email);

        if (existingUser) {
          return { success: false, error: "Email sudah terdaftar" };
        }

        const newUser = {
          id: String(get().users.length + 1),
          name,
          email,
          password,
          avatar: "/placeholder.svg?height=40&width=40",
          role: "student",
          createdAt: new Date().toISOString(),
          progress: {
            completedMaterials: 0,
            totalMaterials: initialData.materials.length,
            completedQuizzes: 0,
            totalQuizzes: initialData.quizzes.length,
            totalPoints: 0,
            streak: 0,
          },
        };

        set((state) => ({
          users: [...state.users, newUser],
          currentUser: newUser,
          isAuthenticated: true,
        }));

        return { success: true };
      },

      // Actions untuk materi
      getMaterials: () => {
        return get().materials;
      },

      getMaterialById: (id) => {
        return get().materials.find((material) => material.id === Number(id));
      },

      updateMaterialProgress: (materialId, progress) => {
        set((state) => ({
          materials: state.materials.map((material) =>
            material.id === Number(materialId)
              ? { ...material, progress }
              : material
          ),
        }));
      },

      // Actions untuk kuis
      getQuizzes: () => {
        return get().quizzes;
      },

      getQuizById: (id) => {
        return get().quizzes.find((quiz) => quiz.id === Number(id));
      },

      updateQuizProgress: (quizId, progress) => {
        set((state) => ({
          quizzes: state.quizzes.map((quiz) =>
            quiz.id === Number(quizId)
              ? {
                  ...quiz,
                  progress,
                  status: progress === 100 ? "completed" : "in_progress",
                }
              : quiz
          ),
        }));
      },

      submitQuiz: (quizId, score) => {
        set((state) => ({
          quizzes: state.quizzes.map((quiz) =>
            quiz.id === Number(quizId)
              ? { ...quiz, score, status: "completed", progress: 100 }
              : quiz
          ),
        }));
      },

      // Actions untuk forum diskusi
      getDiscussions: () => {
        return get().discussions;
      },

      getDiscussionById: (id) => {
        return get().discussions.find(
          (discussion) => discussion.id === Number(id)
        );
      },

      createDiscussion: (discussion) => {
        const newDiscussion = {
          id: get().discussions.length + 1,
          ...discussion,
          createdAt: new Date().toISOString(),
          views: 0,
          likes: 0,
          replies: [],
          isLiked: false,
          isPinned: false,
          isResolved: false,
        };

        set((state) => ({
          discussions: [newDiscussion, ...state.discussions],
        }));

        return newDiscussion;
      },

      addReply: (discussionId, reply) => {
        const newReply = {
          id: Date.now(),
          ...reply,
          createdAt: new Date().toISOString(),
          likes: 0,
          isLiked: false,
        };

        set((state) => ({
          discussions: state.discussions.map((discussion) =>
            discussion.id === Number(discussionId)
              ? { ...discussion, replies: [...discussion.replies, newReply] }
              : discussion
          ),
        }));

        return newReply;
      },

      toggleLikeDiscussion: (discussionId) => {
        set((state) => ({
          discussions: state.discussions.map((discussion) =>
            discussion.id === Number(discussionId)
              ? {
                  ...discussion,
                  likes: discussion.isLiked
                    ? discussion.likes - 1
                    : discussion.likes + 1,
                  isLiked: !discussion.isLiked,
                }
              : discussion
          ),
        }));
      },

      toggleResolveDiscussion: (discussionId) => {
        set((state) => ({
          discussions: state.discussions.map((discussion) =>
            discussion.id === Number(discussionId)
              ? { ...discussion, isResolved: !discussion.isResolved }
              : discussion
          ),
        }));
      },

      // Actions untuk bantuan
      getHelpData: () => {
        return get().helpData;
      },

      // Actions untuk kategori
      getCategories: () => {
        return get().categories;
      },

      // Actions untuk tingkat kesulitan
      getLevels: () => {
        return get().levels;
      },

      // Actions untuk statistik pengguna
      getUserStats: () => {
        return get().userStats;
      },

      // Actions untuk jadwal
      getEvents: () => {
        return get().events;
      },
    }),
    {
      name: "SmartEdu-storage", // Nama untuk localStorage
      version: 1, // Tambahkan versi untuk migrasi jika diperlukan
      partialize: (state) => ({
        // Hanya simpan data yang diperlukan di localStorage
        currentUser: state.currentUser,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
