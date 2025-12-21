
export default function SearchDays() {
  return (
    <div className="w-53.75 border rounded-lg p-1 items-center justify-center border-white/10">
      <div className="flex gap-1items-center">
        <span className="text-gray-mintix text-xs font-medium text-center p-2">1D</span>
        <span className="text-white-mintix text-xs font-medium bg-linear-to-r from-white/10 to-white/5 p-2 rounded-md border text-center border-white/10">7D</span>
        <span className="text-gray-mintix text-xs font-medium text-center p-2">1M</span>
        <span className="text-gray-mintix text-xs font-medium text-center p-2">3M</span>
        <span className="text-gray-mintix text-xs font-medium text-center p-2">Custom</span>
      </div>
    </div>
  )
}
