import type { Answer, Question } from "./interfaces"

//-----------others-------------
export const stories: Answer = {
    text: "Рассказы",
    author: "Тацуки Фудзимото",
    img: "https://s1.livelib.ru/boocover/1007062681/o/58d3/Tatsuki_Fujimoto__%E8%97%A4%E6%9C%AC%E3%82%BF%E3%83%84%E3%82%AD%E7%9F%AD%E7%B7%A8%E9%9B%86_22%EF%BC%8D26__Fujimoto_Tatsuki_Tanpenshuu_2226.jpeg"
}
export const hide: Answer = {
    text: "Укрытие",
    author: "Масасуми Какидзаки",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Hideout_by_Masasumi_Kakizaki_cover.jpg/220px-Hideout_by_Masasumi_Kakizaki_cover.jpg"
}
export const spir: Answer = {
    text: "Спираль",
    author: "Дзюндзи Ито",
    img: "https://m.media-amazon.com/images/I/51Q3mSHOWxL._AC_SY780_.jpg"
}
export const drag: Answer = {
    text: "Дракон Рури",
    author: "Масаоки Синдо",
    img: "https://i.ebayimg.com/images/g/kdwAAOSwmN9jQXP0/s-l1600.jpg"
}
export const kag: Answer = {
    text: "Госпожа Кагуя",
    author: "Ака Акасака",
    img: "https://static.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/0/0e/Volume_1.png"
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
    text: "Вам нравится повседневность?",
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
    text: "Cпокойной ночи, Пунпун",
    author: "Инио Асано",
    img: "https://m.media-amazon.com/images/I/61ZhKGTODUL._AC_SY780_.jpg"
}
export const eri: Answer = {
    text: "Прощай, Эри",
    author: "Тацуки Фудзимото",
    img: "https://pbs.twimg.com/media/FVn5xU4XoAAZN0z.jpg"
}
export const solan: Answer = {
    text: "Соланин",
    author: "Инио Асано",
    img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421523217/solanin-9781421523217_hr.jpg"
}
export const lb: Answer = {
    text: "Оглянись",
    author: "Тацуки Фудзимото",
    img: "https://m.media-amazon.com/images/P/B09SP1QXZK.01._SCLZZZZZZZ_SX500_.jpg"
}
export const oshi: Answer = {
    text: "Звёздное дитя",
    author: "Ака Акасака",
    img: "https://static.wikia.nocookie.net/oshi_no_ko/images/1/15/Volume_5.jpg"
}
export const biblio: Answer = {
    text: "Библиомания",
    author: "Oobaru",
    img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx126135-63wqdasXoXsD.jpg"
}
export const kanojo: Answer = {
    text: "Девочка из Чужеземья",
    author: "Nagabe",
    img: "https://static.wikia.nocookie.net/totsukuninoshoujo/images/0/0e/Volume_1.png/"
}
export const tako: Answer = {
    text: "Первородный грех Такопи",
    author: "Taizan 5",
    img: "https://www.animenewsnetwork.com/images/encyc/A25549-3601762630.1649809604.jpg"
}
export const tenK: Answer = {
    text: "Я распродал свою жизнь по 10000 иен за год",
    author: "Сугару Миаки",
    img: "https://mangalib.me/uploads/cover/jumyou-wo-kaitotte-moratta-ichinen-ni-tsuki-ichimanen-de/cover/Gd7FeJOY4p3p_250x350.jpg"
}
export const hours: Answer = {
    text: "Часы нашего счастья",
    author: "Сумомо Юмэка",
    img: "https://mangalib.me/uploads/cover/watashitachi-no-shiawase-na-jikan/cover/E28DKN9N2kbL_250x350.jpg"
}
export const oneDay: Answer = {
    text: "Эта горилла умрёт через 1 день",
    author: "Суи Исида",
    img: "https://lib.social/uploads/cover/this-gorilla-will-die-in-1-day/cover/L6cyhX8q3C0D_250x350.jpg"
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
    text: "Слэм данк",
    author: "Такэхико Иноуэ",
    img: "https://static.wikia.nocookie.net/slamdunk/images/6/6a/Volume_21_%28English%29.jpg"
}
export const baki: Answer = {
    text: "Боец Баки",
    author: "Кэйсукэ Итагаки",
    img: "http://img1.ak.crunchyroll.com/i/spire2/ff3379f9223bb086ac3d03f79669f8bd1399428460_full.jpg"
}
export const vinland: Answer = {
    text: "Сага о Винланде",
    author: "Макото Юкимура",
    img: "https://static.wikia.nocookie.net/vinlandsaga/images/b/b1/Volume_1.jpg"
}
export const vaga: Answer = {
    text: "Бродяга",
    author: "Такэхико Иноуэ",
    img: "https://static.wikia.nocookie.net/vagabond/images/a/a9/Vagabond_-_Volume_37.png"
}
export const breaker: Answer = {
    text: "Крушитель",
    author: "Чинхван Пак",
    img: "https://images-na.ssl-images-amazon.com/images/I/71a-XzsgINL._AC_UL900_SR615,900_.jpg"
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
    author: "Наоки Урасава",
    img: "https://static.wikia.nocookie.net/astroboy/images/1/18/Pluto1.jpg"
}
export const boku: Answer = {
    text: "Наше",
    author: "Мохиро Кито",
    img: "https://pictures.abebooks.com/isbn/9781421533612-us.jpg"
}
export const dai: Answer = {
    text: "Великая тьма",
    author: "Кю Хаясида",
    img: "https://static.wikia.nocookie.net/daidark/images/0/0f/Volume_01.png"
}
export const sus: Answer = {
    text: "Among us",
    author: "Berabou",
    img: "https://amongusmanga.com/wp-content/uploads/2022/04/Among-Us-Manga.webp"
}
export const gantz: Answer = {
    text: "Ганц",
    author: "Хироя Оку",
    img: "https://upload.wikimedia.org/wikipedia/en/1/10/Gantz_vol._1.png"
}
export const tera: Answer = {
    text: "Терраформирование",
    author: "Ю Сасуга",
    img: "https://m.media-amazon.com/images/I/51NVX7fdseL._AC_SY780_.jpg"
}
export const k8: Answer = {
    text: "Кайдзю номер 8",
    author: "Наоя Мацумото",
    img: "https://upload.wikimedia.org/wikipedia/en/c/cd/Kaiju_No_8.jpg"
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
    author: "Кю Хаясида",
    img: "https://static.wikia.nocookie.net/dorohedoro/images/0/0f/Volume_01.png"
}
export const tg: Answer = {
    text: "Токийский гуль",
    author: "Суи Исида",
    img: "https://i.imgur.com/Di1dQAU.jpeg"
}
export const aot: Answer = {
    text: "Атака титанов",
    author: "Хадзимэ Исаяма",
    img: "https://static.wikia.nocookie.net/shingekinokyojin/images/d/db/Volume_1_Cover.png"
}
export const jigoku: Answer = {
    text: "Адский рай",
    author: "Юдзи Каку",
    img: "https://static.wikia.nocookie.net/jigokuraku/images/0/0f/Volume_01.png"
}
export const berk: Answer = {
    text: "Берсерк",
    author: "Кэнтаро Миура",
    img: "https://static.wikia.nocookie.net/berserk/images/2/25/Manga_V12_Cover.png"
}
export const op: Answer = {
    text: "Ван-Пис",
    author: "Эйитиро Ода",
    img: "https://static.wikia.nocookie.net/onepiece/images/5/57/Volume_97.png"
}
export const hxh: Answer = {
    text: "Охотник х Охотник",
    author: "Ёсихиро Тогаси",
    img: "https://static.wikia.nocookie.net/hunterxhunter/images/8/8e/Volume1cover.jpg"
}
export const bleach: Answer = {
    text: "Блич",
    author: "Тайто Кубо",
    img: "https://static.wikia.nocookie.net/bleach/images/d/d5/MangaVolume73Cover.png"
}
export const lol: Answer = {
    text: "Страна самоцветов",
    author: "Харуко Итикава",
    img: "https://static.wikia.nocookie.net/houseki-no-kuni/images/4/43/Book_1.jpeg"
}
export const gachi: Answer = {
    text: "Гатиакута",
    author: "Кэй Урана",
    img: "https://static.wikia.nocookie.net/gachiakuta/images/0/0f/Volume_01.png"
}
export const solo: Answer = {
    text: "Поднятие уровня в одиночку",
    author: "Сонрак Чан",
    img: "https://m.media-amazon.com/images/I/51iDXM7mJIL._AC_SY780_.jpg"
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
    text: "Вам нравится городское фэнтези?",
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
    text: "Вам нравятся постапокалиптические миры?",
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
    author: "Тацуки Фудзимото",
    img: "https://static.wikia.nocookie.net/chainsaw-man/images/0/0f/Volume_01.png"
}
export const jojo: Answer = {
    text: "Невероятные приключения ДжоДжо",
    author: "Хирохико Араки",
    img: "https://static.wikia.nocookie.net/jjba/images/9/9f/Volume_129.jpg"
}
export const fp: Answer = {
    text: "Огненный удар",
    author: "Тацуки Фудзимото",
    img: "https://static.wikia.nocookie.net/fire_punch/images/0/0f/Volume_01.png"
}
export const dog: Answer = {
    text: "Dog-ningen",
    author: "DH Animations",
    img: "https://dthezntil550i.cloudfront.net/xb/current/xb2005061537310810014241408/5c1b163d-aa1e-4a92-a5bc-8af44d398c05_m.jpg"
}
export const dan: Answer = {
    text: "Дандадан",
    author: "Юкинобу Тацу",
    img: "https://static.wikia.nocookie.net/dandadan/images/0/0e/Volume_1.png"
}
export const opm: Answer = {
    text: "Ванпанчмен",
    author: "Юсукэ Мурата",
    img: "https://static.wikia.nocookie.net/onepunchman/images/4/48/Volume_23_Cover.png"
}
export const opm_web: Answer = {
    text: "Ванапанчмен (веб)",
    author: "ONE",
    img: "https://static.wikia.nocookie.net/onepunchman/images/8/89/ONE_Website_2019_2-2020_1.jpg"
}
export const ajin: Answer = {
    text: "Нелюдь",
    author: "Гамон Сакураи",
    img: "https://static.wikia.nocookie.net/ajin/images/7/7c/Volume_15.jpg"
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