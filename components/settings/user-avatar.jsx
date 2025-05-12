"use client"

import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"

export function UserAvatar({ user }) {
  const { toast } = useToast()

  // Handle avatar upload
  const handleAvatarUpload = () => {
    toast({
      title: "Fitur dalam pengembangan",
      description: "Fitur upload foto akan segera tersedia.",
      variant: "default",
    })
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="h-24 w-24">
        <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
        <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h2 className="text-xl font-semibold">{user?.name}</h2>
        <p className="text-sm text-slate-500">{user?.email}</p>
      </div>
      <Button variant="outline" size="sm" className="w-full" onClick={handleAvatarUpload}>
        <Upload className="mr-2 h-4 w-4" />
        Ubah Foto
      </Button>
    </div>
  )
}
