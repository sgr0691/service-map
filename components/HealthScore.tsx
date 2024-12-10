import { cn } from "@/lib/utils"

interface HealthScoreProps {
  score: number;
}

export function HealthScore({ score }: HealthScoreProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-2xl font-bold">{score}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <div 
          className={cn(
            "h-2.5 rounded-full",
            score > 90 ? "bg-green-700" :
            score > 70 ? "bg-yellow-400" :
            "bg-red-600"
          )}
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  )
}

