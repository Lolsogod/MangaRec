import type { Answer, Question } from "./interfaces"


export let pun: Answer = {
    id: "pun",
    text: "Спокойной ночи, Пунпун",
}
export let kag: Answer = {
    id: "kag",
    text: "Госпожа-Кагуя",
}

export let csm: Answer = {
    id: "csm",
    text: "Человек-Бензопила",
}

export let dr: Question = {
    id: "a",
    text: "Вам нравится драмма?",
    positive: pun,
    negative: kag
}

export let start: Question = {
    id: "a",
    text: "Вам нравится экшн?",
    positive: csm,
    negative: dr
}

