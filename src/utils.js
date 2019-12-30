import moment from 'moment';
const utils = {
	loadDate: new Date(),
	timeSpent: function(){
		const now = new Date();
		const diff = now.getTime() - this.loadDate.getTime();
		const dur = moment.duration(diff,'milliseconds');
		return dur.hours()+":"+dur.minutes()+":"+dur.seconds();
	},
	getRandomInt:  (max, padding) => {
		let num = Math.floor(Math.random() * Math.floor(max));
		if(padding && num < padding) return padding;
		if(padding && max - num < padding) return max - padding;
		return num;
	}


}

export {utils}