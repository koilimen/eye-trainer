import $ from "jquery";
import {
	utils
} from "./utils"

(function() {
	const $viewport = $("#viewport").get(0);
	let ctx = $viewport.getContext('2d');
	let number = utils.getRandomInt(9) + "";
	let fontSize = 24; //px
	let reactionTimes = [];
	let reactionStart;
	let reactionEnd;
	drawDigit();

	$("html").on('keydown', (e) => {
		if (e.key.match(/\d/) == null) return; //nothin but digits
		reactionEnd = new Date();
		reactionTimes.push(reactionEnd.getTime() - reactionStart.getTime());
		$("#averageReactionTime").text(averageReactionTime(reactionTimes)+" milliseconds");
		if (e.key === number) {
			ctx.fillStyle = "green";
		} else {
			ctx.fillStyle = "red";
		}
		ctx.fillRect(0, 0, $viewport.width, $viewport.height);

		setTimeout(() => {
			ctx.clearRect(0, 0, $viewport.width, $viewport.height);
			drawDigit();
		}, 500)
	});

	setInterval(() => {
		const ts = utils.timeSpent();
		$("#countdown").text(ts);
	}, 1000);

	function drawDigit() {
		reactionStart = new Date();
		ctx.fillStyle = 'black';
		number = utils.getRandomInt(9) + "";
		let x = utils.getRandomInt($viewport.width, fontSize);
		let y = utils.getRandomInt($viewport.height, fontSize);
		ctx.font = fontSize + "px serif";
		ctx.fillText(number, x, y);
	}

	function averageReactionTime(reactionTimes){
		return Math.ceil(reactionTimes.reduce((sum, each) => {
			return sum+each;
		}, 0) / reactionTimes.length);
	}


})();