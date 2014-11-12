(function() {
    var tweets = [
		{
		    "id": 1230,
		    "id_str": "1230",
		    "created_at": "Mon Oct 27, 12:13:14 +0000 2014",
		    "text": "Tiger Blood!",
		    "user": {
		    	"name": "The Sheen Machine",
		    	"screen_name": "CharlieSheen",
		    	"profile_image_url": "images/sheen.jpg"
		    }
		},
		{
		    "id": 1231,
		    "id_str": "1231",
		    "created_at": "Mon Oct 28, 12:13:14 +0000 2014",
		    "text": "I hate winter. It changes me.",
		    "user": {
		    	"name": "Water",
		    	"screen_name": "PhaseChangesRule",
		    	"profile_image_url": "images/water.jpg"
		    }
		},
       {
		    "id": 1232,
		    "id_str": "1232",
		    "created_at": "Mon Oct 29, 12:13:14 +0000 2014",
		    "text": "Bweeeeeeeeee bwee bwaaaaaaaarn nawwwr ran bran a brawwwn bree braw braaaaw naow!",
		    "user": {
		    	"name": "Rock Guitar",
		    	"screen_name": "LemmyIsGod",
		    	"profile_image_url": "images/guitar.jpg"
		    }
		},
		{
		    "id": 1233,
		    "id_str": "1233",
		    "created_at": "Mon Oct 30, 12:13:14 +0000 2014",
		    "text": "Ice Ice Baby",
		    "user": {
		    	"name": "Vanilla Ice",
		    	"screen_name": "FakeVanillaIce",
		    	"profile_image_url": "images/vanilla_ice.jpg"
		    }
		},
	    {
            "id": 1234,
            "id_str": "1234",
            "created_at": "Mon Oct 31, 12:13:14 +0000 2014",
            "text": "This is a sample tweet",
            "user": {
            	"name": "Chris Tankersley",
            	"screen_name": "dragonmantank",
            	"profile_image_url": "images/dragonmantank.jpg"
            }
	    },
	    {
            "id": 1235,
            "id_str": "1235",
            "created_at": "Mon Nov 1, 12:13:14 +0000 2014",
            "text": "This is another sample tweet",
            "user": {
                "name": "Eli White",
                "screen_name": "EliW",
                "profile_image_url": "images/eliw.jpg"
            }
        }
	];
	
    var twitter_app = angular.module('twitterapp', []);
    
    twitter_app.filter('twitterCreatedToUnix', function() {
		return function(input) {
			var date = moment(new Date(input)).format();
			return date;
		}
	});
    
    twitter_app.controller('TwitterStream', function() {
    	this.tweets = tweets;
    	this.tweet = {};
    	this.showTweet = function(tweetData) {
    		this.tweet = tweetData;
    	}
    });
})();