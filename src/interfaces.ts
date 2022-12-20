export interface Question{
    id: string;
    text: string;
    positive: Question | Answer;
    negative: Question | Answer;
}

export interface Answer{
    id: string;
    text: string;
}
