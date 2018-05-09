//store urls
const pages = [];

const shortenUrl = (param, val) => {
	let result = null;

	//validate url, add "http://" for non-prefixed
	if(!/^[\s\S]+?:\/\//.test(val)){
		val = "http://" + val;
	}

	//find url's id
	let find = pages.indexOf(val);
	//add id to host as short url
	if(find === -1){
		pages.push(val);
		result = param.headers.host + "/" + pages.indexOf(val);
	}else{
		result = param.headers.host + "/" + find;
	}
	return result;
};

//return corresponding url by id
const getUrl = id => {
	let url = null;
	url = pages[id];
	return url;
};

module.exports = {shortenUrl, getUrl};
