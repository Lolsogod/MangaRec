export interface Question{
    text: string;
    positive: Question | Answer;
    negative: Question | Answer;
    mark_p?: boolean
    mark_n?: boolean
}

export interface Answer{
    text: string;
}
