let cofoApi1 = 'https://codeforces.com/api/user.info?handles='; /* Get the max or current ratings of one user*/
let cofoApi2 = 'https://codeforces.com/api/user.status?handle='; /* Get the number of the total accepted problem of one user*/

async function cofoRatingFetcher(handle) {
	return fetcher.getJSONData(cofoApi1, handle).then((res)=> {
		console.log(res.status);
		if(res.status !== "OK") {
			return null;
		}
		return res.result[0];
	});
}

async function cofoProblemFetcher(handle) {
	return fetcher.getJSONData(cofoApi2, handle).then((res) => {
		if(res.status !== "OK") {
			return null;
		}
		return res.result;
	})
}

async function cofoRatingAnalyzer(handle) {
	const data = await cofoRatingFetcher(handle);
	if(data === null) return {};
	return data;
}

async function cofoProblemAnalyzer(handle) {
	const data = await cofoProblemFetcher(handle);
	if(data === null) return {};

	let dataObj = {};
	let problemObj = {};
	let verdictObj = {};
	let languageObj = {};
		
	for(let idx in data) {
		let submission = data[idx];
		let problem = submission.problem;
		let problemId = getProblemId(problem);

		if(submission.verdict in verdictObj) {
			verdictObj[submission.verdict] += 1;
		} else {
			verdictObj[submission.verdict] = 1;
		}

		if(submission.programmingLanguage in languageObj) {
			languageObj[submission.programmingLanguage] += 1;
		} else {
			languageObj[submission.programmingLanguage] = 1;
		}
 
		if(submission.verdict !== "OK") {
			if(problemId in problemObj) {
				problemObj[problemId][0]++;
			} else {
				problemObj[problemId] = [1, 0];
			}
		} else {
			if(problemId in problemObj) {
				problemObj[problemId][0]++;
				problemObj[problemId][1]++;
			} else {
				problemObj[problemId] = [1, 1];
			}
		}
	}

	let solvedProblem = 0;
	let totalOK = 0;
	let totalSubmission = 0;
	for(let probId in problemObj) {
		if(probId[1] >= 1) solvedProblem += 1;
		totalOK += problemObj[probId][1];
		totalSubmission += problemObj[probId][0];
	}

	dataObj["totalSubmission"] = totalSubmission;
	dataObj["totalOK"] = totalOK;
	dataObj["sovledProblem"] = solvedProblem;
	dataObj["verdict"] = verdictObj;
	dataObj["language"] = languageObj;

	return dataObj;
}

async function cofoAnalyzer(handle) {
	const ratingData = await cofoRatingAnalyzer(handle);
	const problemData = await cofoProblemAnalyzer(handle);
	console.log(ratingData);
	console.log(problemData);
	for(data in problemData) {
		ratingData[data] = problemData[data];
	}

	return ratingData;
}

function getProblemId(problem) {
	return String(problem.contestId) + problem.index;
}