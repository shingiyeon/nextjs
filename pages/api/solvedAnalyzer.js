let solvedApi = `https://api.solved.ac/v2/users/show.json?id=`;

async function solvedFetcher(handle) {
	return fetcher.getJSONData(solvedApi, handle).then((res)=> {
		if(res.success === false) {
			return null;
		}
		return res.result.user[0];
	});
}

async function solvedAnalyzer(handle) {
	const data = await solvedFetcher(handle);
	if(data === null) return {};
	let dataObj = {}
	for(let val in data) {
		dataObj[val] = data[val];
	}
	dataObj.imgUrl = `https://static.solved.ac/tier_small/${dataObj["level"]}.svg`;
	console.log(dataObj);
	return dataObj;
}
