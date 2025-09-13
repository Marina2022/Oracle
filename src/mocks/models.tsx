import { Brain } from "lucide-react"

const GTPIcon = ()=>{
  return <div className="p-2 bg-red-200/20 flex justify-center items-center"><Brain /></div>
}

export const models = [
  {
    id: "1",
    title: "ChatGPT",
    description: "Самый популярный ИИ в мире",
    predictionNumber: 2847,
    icon: <GTPIcon />
  }
]