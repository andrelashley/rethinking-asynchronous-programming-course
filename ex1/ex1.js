function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************
// The old-n-busted callback way
var results = [];

function getFile(file) {
	fakeAjax(file,function(text) {
		var res = {};
		res[file] = text;
		results.push(res);

		if(results.length == 3) {
			results.sort();
			results.forEach((el, idx, arr) => {
				console.log(el);
			});
			console.log("Complete!");
		}
	});
}

// request all files at once in "parallel"
getFile("file1");
getFile("file2");
getFile("file3");
