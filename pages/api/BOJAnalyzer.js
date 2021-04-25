let BOJApi = 'https://www.acmicpc.net/user/';


async function BOJFetcher(handle) {
	return fetcher.getDataWithHeaders(BOJApi, handle, BOJHeaders).then((res)=> {
        console.log(res);
		if(res.success === false) {
			return null;
		}
		return res.result.user[0];
	});
}