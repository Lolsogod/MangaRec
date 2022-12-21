import type { Answer, Question } from "../src/interfaces";
import * as data from "../src/data"

const {start}  = data;
let head: Question | Answer = start;
const isQuestion = (object: any): object is Question => {
    return 'positive' in object;
}

const pretty_output = (inp: string, answ: string, next: string) =>{
    return `Eсли «${inp.slice(0, -1)}» = «${answ}», то перейти к «${next}»;`
}
let res: string[] = []

const generate = () =>  {
    while(true){
        if(isQuestion(head) && !(head.mark_p && head.mark_n)){
            if(!head.mark_p){
                if(!isQuestion(head.positive) ||
                (head.positive.mark_p && head.positive.mark_n))
                    head.mark_p = true;
                if (!res.includes(pretty_output(head.text, "Да", head.positive.text)))
                    res.push(pretty_output(head.text, "Да", head.positive.text))
                head = head.positive
            }
            else if(!head.mark_n){
                if(!isQuestion(head.negative) ||
                (head.negative.mark_p && head.negative.mark_n))
                    head.mark_n = true;
                if (!res.includes(pretty_output(head.text, "Нет", head.negative.text)))
                    res.push(pretty_output(head.text, "Нет", head.negative.text))
                head = head.negative
            }
        } else {
            head = data.start
            break 
        } 
    }
}
    
while(!data.start.mark_p || !data.start.mark_n) generate();

res.forEach(r => {
    console.log(r)
});
console.log(res.length)
