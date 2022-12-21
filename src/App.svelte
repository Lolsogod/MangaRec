<script lang="ts">
	//export let name: string;
	import * as data from "./data"
    import type { Answer, Question } from "./interfaces";

	const {start}  = data;
	let head: Question | Answer = start;
	let finished = false;

	const isQuestion = (object: any): object is Question => {
    	return 'positive' in object;
	}

	const handle_yes = () => {
		if (isQuestion(head)) head = head.positive
		if (!isQuestion(head)) finished=true
	}

	const handle_no = () => {
		if (isQuestion(head)) head = head.negative
		if (!isQuestion(head)) finished=true
	}
</script>

<main>
	<h1>MangaRec</h1>
	<div class="{`after-${finished}`}">
		<img class="img-cont" src="{head.img}" alt="">
		<p class="question">Вам подойдёт:</p>
	</div>
	<p class="question">{head.text}</p>
	<div class="{`after-${finished}`}">
		<p class="author">Автор: {head.author}</p>
	</div>
	<div class="{`fin-${finished} `}">
		<button on:click={handle_yes}>Да</button>
		<button on:click={handle_no}>Нет</button>
	</div>
</main>

<style>
	.img-cont{
		height: 283px;
		border-radius: 10px;
	}
	.question{
		font-size: 25px;
	}
	.fin-true{
		display: none;
	}
	.after-false{
		display: none;
	}

	.author{
		font-size: larger;
		color: gray;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>