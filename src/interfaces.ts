export interface Question{
    text: string;
    positive: Question | Answer;
    negative: Question | Answer;
    mark_p?: boolean
    mark_n?: boolean
    img?: string
    author?: string
}

export interface Answer{
    text: string;
    img?: string
    author?: string
}
