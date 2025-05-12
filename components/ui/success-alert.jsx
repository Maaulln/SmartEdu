import { Check } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function SuccessAlert({ message }) {
  if (!message) return null

  return (
    <Alert className="bg-green-50 border-green-200 text-green-800">
      <Check className="h-4 w-4 text-green-600" />
      <AlertTitle>Berhasil!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
