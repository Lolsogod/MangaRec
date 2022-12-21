import type { Answer, Question } from "./interfaces"

//-----------others-------------
export const stories: Answer = {
    text: "Расказы"
}
export const hide: Answer = {
    text: "Укрытие"
}
export const spir: Answer = {
    text: "Спираль"
}
export const drag: Answer = {
    text: "Дракон Рури"
}
export const kag: Answer = {
    text: "Госпожа Кагуя"
}
export const otLC: Question = {
    text: "Вам нравится Лавкрафтовские ужасы?",
    positive: spir,
    negative: hide
}
export const otHor: Question = {
    text: "Вам нравится хоррор?",
    positive: otLC,
    negative: stories
}
export const otSol: Question = {
    text: "Вам нравится повседневность",
    positive: drag,
    negative: otHor
}
export const otStart: Question = {
    text: "Вам нравятся романтические комедии ?",
    positive: kag,
    negative: otSol
}

//-----------drama--------------
export const pun: Answer = {
    text: "Cпокойной ночи, Пунпун"
}
export const eri: Answer = {
    text: "Прощай, Эри"
}
export const solan: Answer = {
    text: "Соланин"
}
export const lb: Answer = {
    text: "Оглянись"
}
export const oshi: Answer = {
    text: "Звёздное дитя"
}
export const biblio: Answer = {
    text: "Библиомания"
}
export const kanojo: Answer = {
    text: "Девочка из Чужеземья"
}
export const tako: Answer = {
    text: "Первородный грех Такопи"
}
export const tenK: Answer = {
    text: "Я распродал свою жизнь по 10000 иен за год"
}
export const hours: Answer = {
    text: "Часы нашего счастья"
}
export const oneDay: Answer = {
    text: "Эта горилла умрёт через 1 день "
}

export const drSup: Question = {
    text: "Вам нравятся сверхъестественные истории?",
    positive: tenK,
    negative: hours
}
export const drPost: Question = {
    text: "Вам нравится пост-апокалипсис?",
    positive: biblio,
    negative: kanojo
}
export const drMusic: Question = {
    text: "Вам нравятся истории про музыкантов?",
    positive: solan,
    negative: lb
}
export const drKino: Question = {
    text: "Вам нравятся истории про кино?",
    positive: eri,
    negative: drMusic
}
export const drSpecArt: Question = {
    text: "Хотите историю про  конкретный вид искусства?",
    positive: drKino,
    negative: oshi
}
export const drRom: Question = {
    text: "Вам нравится романтика?",
    positive: drSup,
    negative: oneDay
}
export const drSf: Question = {
    text: "Вам нравятся фантастические истории?",
    positive: tako,
    negative: drRom
}
export const drFan: Question = {
    text: "Вам нравится фэнтезийные истории?",
    positive: drPost,
    negative: drSf
}
export const drArt: Question = {
    text: "Вам нравятся истории про творчество?",
    positive: drSpecArt,
    negative: drFan
}
export const drDepr: Question = {
    text: "Хотите депрессивную историю?",
    positive: pun,
    negative: drArt
}
export const drStart: Question = {
    text: "Вам нравится драма/трагедия?",
    positive: drDepr,
    negative: otStart
}

//-----------real---------------
export const slam: Answer = {
    text: "Слэм данк"
}
export const baki: Answer = {
    text: "Боец Баки"
}
export const vinland: Answer = {
    text: "Сага о Винланде"
}
export const vaga: Answer = {
    text: "Бродяга"
}
export const breaker: Answer = {
    text: "Крушитель"
}

export const rlReal: Question = {
    text: "Вам нравится реализм?",
    positive: slam,
    negative: baki
}
export const rlWest: Question = {
    text: "Вам нравится западная история?",
    positive: vinland,
    negative: vaga
}
export const rlHist: Question = {
    text: "Вам нравится исторический жанр?",
    positive: rlWest,
    negative: breaker
}
export const rlStart: Question = {
    text: "Вам нравится спорт?",
    positive: rlReal,
    negative: rlHist
}
//----------sci-fi--------------
export const pluto: Answer = {
    text: "Плуто",
}
export const boku: Answer = {
    text: "Наше",
}
export const dai: Answer = {
    text: "Великая тьма",
}
export const sus: Answer = {
    text: "Among us",
}
export const gantz: Answer = {
    text: "Ганц",
}
export const tera: Answer = {
    text: "Терраформирование",
}
export const k8: Answer = {
    text: "Кайдзю номер 8",
}

export const sfDetect: Question = {
    text: "Вам нравияся детективы?",
    positive: pluto,
    negative: boku
}
export const sfSussy: Question = {
    text: "Амогус?",
    positive: sus,
    negative: gantz
}
export const sfDGame: Question = {
    text: "Вам нравятся смертельные игры?",
    positive: sfSussy,
    negative: tera
}
export const sfTravel: Question = {
    text: "Вам нравятся путешествия по космосу?",
    positive: dai,
    negative: sfDGame
}
export const sfAliens: Question = {
    text: "Вам нравятся истории про инопланетян?",
    positive: sfTravel,
    negative: k8
}
export const sfMech: Question = {
    text: "Вам нравится роботы/мехи?",
    positive: sfDetect,
    negative: sfAliens
}
export const sfStart: Question = {
    text: "Вам нравится фантастика?",
    positive: sfMech,
    negative: rlStart
}
//----------fantasy-------------
export const doro: Answer = {
    text: "Дорохедоро",
}
export const tg: Answer = {
    text: "Токийский гуль",
}
export const aot: Answer = {
    text: "Атака титанов",
}
export const jigoku: Answer = {
    text: "Адский рай",
}
export const berk: Answer = {
    text: "Берсерк",
}
export const op: Answer = {
    text: "Ван-Пис",
}
export const hxh: Answer = {
    text: "Охотник х Охотник",
}
export const bleach: Answer = {
    text: "Блич",
}
export const lol: Answer = {
    text: "Страна самоцветов",
}
export const gachi: Answer = {
    text: "Гатиакута",
}
export const solo: Answer = {
    text: "Поднятие уровня в одиночку",
}

export const fanBadEnd: Question = {
    text: "Хотите плохо написанную, не логичную, портящую сюжет и персонажей концовку?",
    positive: aot,
    negative: jigoku
}
export const fanEnd: Question = {
    text: "Хотите законченную историю?",
    positive: fanBadEnd,
    negative: berk
}
export const fanTown: Question = {
    text: "Вам нравится городское фентези?",
    positive: tg,
    negative: fanEnd
}
export const fanPositive: Question = {
    text: "Вам нравятся позитивные истории?",
    positive: doro,
    negative: fanTown
}
export const fanPirates: Question = {
    text: "Вам нравятся пираты?",
    positive: op,
    negative: hxh
}
export const fanTravel: Question = {
    text: "Вам нравятся истории про путешествия по миру?",
    positive: fanPirates,
    negative: bleach
}
export const fanAfterHum: Question = {
    text: "Хотите историю про жизнь после смерти человечества?",
    positive: lol,
    negative: gachi
}
export const fanPost: Question = {
    text: "Вам нравятся пост-апокалиптичные миры?",
    positive: fanAfterHum,
    negative: solo
}
export const fanLong: Question = {
    text: "Вам нравятся длинные истории?",
    positive: fanTravel,
    negative: fanPost
}
export const fanViolent: Question = {
    text: "Вам нравятся истории с большим количеством жестокости?",
    positive: fanPositive,
    negative: fanLong
}
export const fanStart: Question = {
    text: "Вам нравится фэнтэзи?",
    positive: fanViolent,
    negative: sfStart
}
//--------superntural-----------
export const csm: Answer = {
    text: "Человек-Бензопила",
}

export const jojo: Answer = {
    text: "Невероятные приключения ДжоДжо",
}
export const fp: Answer = {
    text: "Огненный удар",
}
export const dog: Answer = {
    text: "Dog-ningen",
}
export const dan: Answer = {
    text: "Дандадан",
}
export const opm: Answer = {
    text: "Ванпанчмен",
}
export const opm_web: Answer = {
    text: "Ванапанчмен (веб)",
}
export const ajin: Answer = {
    text: "Нелюдь",
}

export const supPace: Question = {
    text: "Хотите историю с быстрым темпом повествования?",
    positive: csm,
    negative: jojo
}
export const supTrash: Question = {
    text: "Вам нравится трэш?",
    positive: dog,
    negative: dan
}
export const supDepr: Question = {
    text: "Вам нравятся депрессивные истории?",
    positive: fp,
    negative: supTrash
}

export const supParts: Question = {
    text: "Хотите историю состоящую из нескольких частей с разными протагонистами?",
    positive: supPace,
    negative: supDepr
}

export const supDetailed: Question = {
    text: "Хотите детализированную рисовку?",
    positive: opm,
    negative: opm_web
}
export const supHero: Question = {
    text: "Вам нравятся супергерои?",
    positive: supDetailed,
    negative: ajin
}

export const supWeird: Question = {
    text: "Вам нравится непредсказуемый/странный сюжет?",
    positive: supParts,
    negative: supHero
}

export const supStart: Question = {
    text: "Вам нравится сверхъестественное?",
    positive: supWeird,
    negative: fanStart
}

//-----------start--------------

export const start: Question = {
    text: "Вам нравится экшн?",
    positive: supStart,
    negative: drStart
}