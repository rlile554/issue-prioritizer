import axios from 'axios';

const getHeadersObject = (apiKey) => {
	return {
		headers: {
			Authorization: `bearer ${apiKey}`,
		},
	};
};

export async function getRepos(apiKey) {
	const response = await axios
		.get('https://api.github.com/user/repos', getHeadersObject(apiKey))
		.then((res) => {
			return res.data;
		})
		.catch((e) => {
			console.log(e);
		});
	return await response;
}

export async function validateToken(apiKey) {
	const response = await axios
		.get('https://api.github.com/user', getHeadersObject(apiKey))
		.then((res) => {
			return { validToken: true };
		})
		.catch((e) => {
			if (e.response) throw new Error('Invalid token, please try again');
			throw new Error(
				'Issue connecting with GitHub server. please try again later '
			);
		});
	return await response;
}

export async function getIssuesForRepo(fullName, apiKey) {
	const response = await axios.get(
		`https://api.github.com/repos/${fullName}/issues`,
		getHeadersObject(apiKey)
	)
	.then(res => {
		return res.data;
	})
	.catch((e) => {
		console.log(e);
	});

	return await response;
}
