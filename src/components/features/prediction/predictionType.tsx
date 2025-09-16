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