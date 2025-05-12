"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/app/providers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, Eye, EyeOff, AlertCircle, Check } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { register, loading } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Clear register error when user changes input
    if (registerError) {
      setRegisterError("");
    }
  };

  // Password strength checker
  const checkPasswordStrength = (password) => {
    const strengthChecks = {
      length: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    const strength = Object.values(strengthChecks).filter(Boolean).length;

    if (strength <= 2) return { score: 1, label: "Lemah" };
    if (strength === 3) return { score: 2, label: "Sedang" };
    if (strength === 4) return { score: 3, label: "Kuat" };
    if (strength === 5) return { score: 4, label: "Sangat Kuat" };

    return { score: 0, label: "Sangat Lemah" };
  };

  const passwordStrength = checkPasswordStrength(formData.password);

  const getPasswordStrengthColor = (score) => {
    if (score === 0) return "bg-slate-200";
    if (score === 1) return "bg-red-500";
    if (score === 2) return "bg-orange-500";
    if (score === 3) return "bg-yellow-500";
    if (score === 4) return "bg-green-500";
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama harus diisi";
    }

    if (!formData.email) {
      newErrors.email = "Email harus diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.password) {
      newErrors.password = "Password harus diisi";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password minimal 8 karakter";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password harus diisi";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Anda harus menyetujui syarat dan ketentuan";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const result = await register(
        formData.name,
        formData.email,
        formData.password
      );

      if (result.success) {
        router.push("/dashboard");
      } else {
        setRegisterError(
          result.error || "Pendaftaran gagal. Silakan coba lagi."
        );
      }
    } catch (error) {
      setRegisterError("Terjadi kesalahan. Silakan coba lagi.");
      console.error("Register error:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <div className="container mx-auto flex flex-1 items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg"
        >
          <div className="text-center">
            <Link
              href="/"
              className="mx-auto inline-flex items-center space-x-2"
            >
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SmartEdu</span>
            </Link>
            <h1 className="mt-6 text-2xl font-bold">Buat Akun Baru</h1>
            <p className="mt-2 text-sm text-slate-600">
              Daftar untuk mulai belajar dengan platform interaktif kami
            </p>
          </div>

          {registerError && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="rounded-md bg-red-50 p-4 text-sm text-red-600"
            >
              <div className="flex items-center">
                <AlertCircle className="mr-2 h-4 w-4" />
                <span>{registerError}</span>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Nama lengkap Anda"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "border-red-500" : ""}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  id="name-error"
                  className="text-xs text-red-500"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="nama@example.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-red-500" : ""}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  id="email-error"
                  className="text-xs text-red-500"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                  aria-invalid={errors.password ? "true" : "false"}
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Sembunyikan password" : "Tampilkan password"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  id="password-error"
                  className="text-xs text-red-500"
                >
                  {errors.password}
                </motion.p>
              )}

              {formData.password && (
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Kekuatan Password:
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        passwordStrength.score <= 1
                          ? "text-red-500"
                          : passwordStrength.score === 2
                          ? "text-orange-500"
                          : passwordStrength.score === 3
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    >
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full ${getPasswordStrengthColor(
                        passwordStrength.score
                      )}`}
                      style={{
                        width: `${(passwordStrength.score / 4) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <ul className="grid grid-cols-2 gap-1 text-xs">
                    <li className="flex items-center">
                      <span
                        className={`mr-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                          formData.password.length >= 8
                            ? "bg-green-500 text-white"
                            : "bg-slate-200"
                        }`}
                      >
                        {formData.password.length >= 8 && (
                          <Check className="h-2.5 w-2.5" />
                        )}
                      </span>
                      Min. 8 karakter
                    </li>
                    <li className="flex items-center">
                      <span
                        className={`mr-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                          /[A-Z]/.test(formData.password)
                            ? "bg-green-500 text-white"
                            : "bg-slate-200"
                        }`}
                      >
                        {/[A-Z]/.test(formData.password) && (
                          <Check className="h-2.5 w-2.5" />
                        )}
                      </span>
                      Huruf besar
                    </li>
                    <li className="flex items-center">
                      <span
                        className={`mr-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                          /[a-z]/.test(formData.password)
                            ? "bg-green-500 text-white"
                            : "bg-slate-200"
                        }`}
                      >
                        {/[a-z]/.test(formData.password) && (
                          <Check className="h-2.5 w-2.5" />
                        )}
                      </span>
                      Huruf kecil
                    </li>
                    <li className="flex items-center">
                      <span
                        className={`mr-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                          /[0-9]/.test(formData.password)
                            ? "bg-green-500 text-white"
                            : "bg-slate-200"
                        }`}
                      >
                        {/[0-9]/.test(formData.password) && (
                          <Check className="h-2.5 w-2.5" />
                        )}
                      </span>
                      Angka
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={
                    errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"
                  }
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                  aria-describedby={
                    errors.confirmPassword
                      ? "confirm-password-error"
                      : undefined
                  }
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword
                      ? "Sembunyikan password"
                      : "Tampilkan password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  id="confirm-password-error"
                  className="text-xs text-red-500"
                >
                  {errors.confirmPassword}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, agreeTerms: checked }))
                  }
                  aria-invalid={errors.agreeTerms ? "true" : "false"}
                  aria-describedby={
                    errors.agreeTerms ? "terms-error" : undefined
                  }
                />
                <Label
                  htmlFor="agreeTerms"
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Saya menyetujui{" "}
                  <Link href="/syarat" className="text-primary hover:underline">
                    syarat dan ketentuan
                  </Link>
                </Label>
              </div>
              {errors.agreeTerms && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  id="terms-error"
                  className="text-xs text-red-500"
                >
                  {errors.agreeTerms}
                </motion.p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Memproses..." : "Daftar"}
            </Button>
          </form>

          <div className="text-center text-sm">
            <p>
              Sudah punya akun?{" "}
              <Link
                href="/login"
                className="font-medium text-primary hover:underline"
              >
                Masuk sekarang
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
