import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ForumGuidelines() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Panduan Forum</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span>Gunakan bahasa yang sopan dan menghormati</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span>Berikan judul yang jelas dan deskriptif</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span>Jelaskan masalah Anda secara detail</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span>Gunakan tag yang relevan dengan topik</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span>Tandai jawaban yang membantu sebagai solusi</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
