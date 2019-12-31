import {Backbone} from "backbone";

let InfoModel = Bacbone.Model.extend({
	defaults: () => {
		return {
			averageReactionTime: 0,
			timeSpent: 0
		};
	}
	
});