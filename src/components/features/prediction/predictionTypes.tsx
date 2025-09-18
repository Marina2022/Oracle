export type PredictionType =
  {
    id: string,
    title: string,
    category: string,
    content: string,
    consensus: number,
    timeline: string,
    participantsNumber: number,
    growing: boolean,
    models: {
      title: string,
      precision: number,
    } []
  }


export type ModelForDetailedPrediction = {
  modelTab: string,
  modelTitle: string,
  answerIsPositive: boolean,
  confidence: number,
  historicPrecision: number,
  sources: string[],
  reasonings: { title: string, text: string }[],
  detailedAnalysis: string,
  resume: string
}

type CommentForDetailedPrediction = {
  sendingTime: string,  // потом будет timestamp - number
  sender: { name: string, level: number },
  message: string,
  likes: number
}

export type PredictionDetailed =
  {
    id: string,
    title: string,
    category: string,
    description: string,
    models: ModelForDetailedPrediction[],
    voting: {
      positive: {percent: number, peopleNumber: number},
      negative: {percent: number, peopleNumber: number},
    }
    comments: CommentForDetailedPrediction[]
  }