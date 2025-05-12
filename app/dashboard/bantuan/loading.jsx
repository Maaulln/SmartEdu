// Fix the loading component to ensure it works correctly
export default function Loading() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p>Memuat bantuan...</p>
      </div>
    </div>
  )
}
