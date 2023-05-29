import type { Answer, Question } from "../src/interfaces";
import * as data from "../src/data"

const keys = Object.keys(data).slice().reverse()

keys.forEach((key,index) => {
    data[key].index = (index+1)
})
const isQuestion = (object: any): object is Question => {
    return 'positive' in object;
}

keys.forEach((key) => {
    if (isQuestion(data[key])){
        console.log(`decision(${data[key].index}, yes, ${data[key].positive.index}, ${isQuestion(data[key].positive)?"cont":"end"}).`)
        console.log(`decision(${data[key].index}, no, ${data[key].negative.index}, ${isQuestion(data[key].negative)?"cont":"end"}).`)
    }
})

keys.forEach((key) => {
    if (!isQuestion(data[key]))
        console.log(`recomendation(${data[key].index}, '${data[key].text}').`)
})

keys.forEach((key) => {
    if (isQuestion(data[key]))
        console.log(`question(${data[key].index}, '${data[key].text}').`)
    
})