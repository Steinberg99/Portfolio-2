const baseUrl = "https://api.github.com";

const getUserData = async (username) => {
  const url = `${baseUrl}/users/${username}`;
  const rawUserData = await fetchData(url);

  if (rawUserData.message) return null;

  const followers = parseFollowerData(await fetchData(rawUserData.followers_url));
  const followingUrl = `${baseUrl}/users/${username}/following`;
  const following = parseFollowerData(await fetchData(followingUrl));
  const repos = parseRepoData(await fetchData(rawUserData.repos_url));

  const userData = {
    followers,
    following,
    repos,
    user: {
      avatar: rawUserData.avatar_url,
      bio: rawUserData.bio ? rawUserData.bio : "",
      gitHubUrl: rawUserData.html_url,
      username,
    },
  };

  return userData;
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

const parseFollowerData = (followers) => {
  return followers.map((follower) => ({
    avatar: follower.avatar_url,
    gitHubUrl: follower.html_url,
    username: follower.login,
  }));
};

const parseRepoData = (repos) => {
  return repos.map((repo) => ({
    createdAt: repo.created_at,
    description: repo.description ? repo.description : "",
    language: repo.language,
    name: repo.name,
    topics: repo.topics,
    url: repo.html_url,
    updatedAt: repo.updated_at,
  }));
};

export { getUserData };
