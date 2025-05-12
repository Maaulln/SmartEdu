// Data pengaturan default
export const settings = {
  notification: {
    email: true,
    push: true,
    reminders: true,
    updates: false,
    marketing: false,
  },
  privacy: {
    profileVisibility: "public",
    activityVisibility: "friends",
    showOnlineStatus: true,
    allowMessages: true,
  },
  display: {
    darkMode: false,
    language: "id",
    fontSize: "medium",
    colorTheme: "default",
  },
  activeSessions: [
    {
      id: "session-1",
      device: "Current Device",
      deviceType: "desktop",
      lastActive: new Date().toISOString(),
      location: "Jakarta, Indonesia",
      isCurrent: true,
    },
    {
      id: "session-2",
      device: "Mobile Phone",
      deviceType: "mobile",
      lastActive: new Date(Date.now() - 86400000).toISOString(),
      location: "Bandung, Indonesia",
      isCurrent: false,
    },
  ],
}
