import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ActiveUsers({ users, isLoading }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Pengguna Aktif</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {!isLoading &&
            users.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.name}</span>
                </div>
                <Badge variant="outline">{user.posts} post</Badge>
              </div>
            ))}
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200"></div>
                  <div className="h-4 w-24 animate-pulse rounded bg-slate-200"></div>
                </div>
                <div className="h-6 w-16 animate-pulse rounded-full bg-slate-200"></div>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}
