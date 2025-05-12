"use client"

import { Separator } from "@/components/ui/separator"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Toaster } from "@/components/ui/toaster"
import { SuccessAlert } from "@/components/ui/success-alert"
import { ProfileForm } from "@/components/settings/profile-form"
import { PasswordForm } from "@/components/settings/password-form"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { PrivacySettings } from "@/components/settings/privacy-settings"
import { DisplaySettings } from "@/components/settings/display-settings"
import { SessionList } from "@/components/settings/session-list"
import { UserAvatar } from "@/components/settings/user-avatar"
import { SettingsTabs } from "@/components/settings/settings-tabs"
import { useSettings } from "@/hooks/use-settings"

export default function PengaturanPage() {
  const [activeTab, setActiveTab] = useState("profil")
  const {
    user,
    isLoading,
    notificationSettings,
    privacySettings,
    displaySettings,
    activeSessions,
    errors,
    successMessage,
    updateProfile,
    updatePassword,
    updateNotificationSettings,
    updatePrivacySettings,
    updateDisplaySettings,
    handleRemoveSession,
    handleRemoveAllSessions,
    handleLogout,
    clearError,
  } = useSettings()

  // Render loading skeleton
  const renderSkeleton = () => (
    <div className="animate-pulse space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="space-y-2">
          <div className="h-4 w-24 rounded bg-slate-200"></div>
          <div className="h-10 w-full rounded bg-slate-200"></div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="space-y-8">
      <Toaster />

      {/* Page header */}
      <div className="rounded-xl bg-gradient-to-r from-primary to-blue-600 p-6 text-white shadow-lg md:p-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold md:text-3xl">Pengaturan</h1>
          <p className="mt-2 text-blue-100">
            Kelola profil, keamanan, notifikasi, dan preferensi lainnya untuk menyesuaikan pengalaman belajar Anda.
          </p>
        </div>
      </div>

      {/* Success message */}
      <SuccessAlert message={successMessage} />

      {/* Tabs */}
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
        <aside className="lg:w-1/4">
          <Card>
            <CardContent className="p-6">
              {isLoading ? (
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-24 w-24 animate-pulse rounded-full bg-slate-200"></div>
                  <div className="h-6 w-32 animate-pulse rounded bg-slate-200"></div>
                  <div className="h-4 w-48 animate-pulse rounded bg-slate-200"></div>
                </div>
              ) : (
                <UserAvatar user={user} />
              )}

              <Separator className="my-6" />

              <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} onLogout={handleLogout} />
            </CardContent>
          </Card>
        </aside>

        <div className="flex-1">
          {/* Profil Tab */}
          {activeTab === "profil" && (
            <Card>
              <CardHeader>
                <CardTitle>Informasi Profil</CardTitle>
                <CardDescription>
                  Perbarui informasi profil Anda untuk mempersonalisasi pengalaman belajar.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  renderSkeleton()
                ) : (
                  <ProfileForm user={user} errors={errors} onSubmit={updateProfile} onFieldChange={clearError} />
                )}
              </CardContent>
            </Card>
          )}

          {/* Keamanan Tab */}
          {activeTab === "keamanan" && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Keamanan Akun</CardTitle>
                  <CardDescription>
                    Perbarui password dan pengaturan keamanan lainnya untuk melindungi akun Anda.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    renderSkeleton()
                  ) : (
                    <PasswordForm errors={errors} onSubmit={updatePassword} onFieldChange={clearError} />
                  )}
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Sesi Aktif</CardTitle>
                  <CardDescription>Kelola perangkat dan sesi yang saat ini masuk ke akun Anda.</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-4">
                      {Array.from({ length: 2 }).map((_, index) => (
                        <div key={index} className="h-16 w-full animate-pulse rounded bg-slate-200"></div>
                      ))}
                    </div>
                  ) : (
                    <SessionList
                      sessions={activeSessions}
                      onRemoveSession={handleRemoveSession}
                      onRemoveAllSessions={handleRemoveAllSessions}
                    />
                  )}
                </CardContent>
              </Card>
            </>
          )}

          {/* Notifikasi Tab */}
          {activeTab === "notifikasi" && (
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Notifikasi</CardTitle>
                <CardDescription>
                  Kelola preferensi notifikasi untuk mengontrol informasi yang Anda terima.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-6">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="h-5 w-32 animate-pulse rounded bg-slate-200"></div>
                          <div className="h-4 w-48 animate-pulse rounded bg-slate-200"></div>
                        </div>
                        <div className="h-6 w-10 animate-pulse rounded bg-slate-200"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <NotificationSettings
                    settings={notificationSettings}
                    onUpdate={updateNotificationSettings}
                    onSave={updateNotificationSettings}
                  />
                )}
              </CardContent>
            </Card>
          )}

          {/* Privasi Tab */}
          {activeTab === "privasi" && (
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Privasi</CardTitle>
                <CardDescription>
                  Kelola pengaturan privasi untuk mengontrol siapa yang dapat melihat informasi Anda.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="space-y-2">
                        <div className="h-5 w-32 animate-pulse rounded bg-slate-200"></div>
                        <div className="h-4 w-48 animate-pulse rounded bg-slate-200"></div>
                        <div className="h-10 w-full animate-pulse rounded bg-slate-200"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <PrivacySettings
                    settings={privacySettings}
                    onUpdate={updatePrivacySettings}
                    onSave={updatePrivacySettings}
                  />
                )}
              </CardContent>
            </Card>
          )}

          {/* Tampilan Tab */}
          {activeTab === "tampilan" && (
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Tampilan</CardTitle>
                <CardDescription>Sesuaikan tampilan aplikasi sesuai preferensi Anda.</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="h-5 w-32 animate-pulse rounded bg-slate-200"></div>
                          <div className="h-4 w-48 animate-pulse rounded bg-slate-200"></div>
                        </div>
                        <div className="h-6 w-10 animate-pulse rounded bg-slate-200"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <DisplaySettings
                    settings={displaySettings}
                    onUpdate={updateDisplaySettings}
                    onSave={updateDisplaySettings}
                  />
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
