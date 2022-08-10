const tempData = {
  login: "j471n",
  id: 55713505,
  node_id: "MDQ6VXNlcjU1NzEzNTA1",
  avatar_url: "https://avatars.githubusercontent.com/u/55713505?v=4",
  gravatar_id: "",
  url: "https://github.com/cuitlazotlac",
  html_url: "https://github.com/cuitlazotlac",
  followers_url: "https://api.github.com/users/cuitlazotlac/followers",
  following_url:
    "https://api.github.com/users/cuitlazotlac/following{/other_user}",
  gists_url: "https://api.github.com/users/cuitlazotlac/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/cuitlazotlac/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/cuitlazotlac/subscriptions",
  organizations_url: "https://api.github.com/users/cuitlazotlac/orgs",
  repos_url: "https://api.github.com/users/cuitlazotlac/repos",
  events_url: "https://api.github.com/users/cuitlazotlac/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/cuitlazotlac/received_events",
  type: "User",
  site_admin: false,
  name: "Hayssem Vazquez-Elsayed",
  company: null,
  blog: "heyhayssem.dev",
  location: "Canada",
  email: null,
  hireable: true,
  bio: "Product Manager",
  twitter_username: "none",
  public_repos: 31,
  public_gists: 10,
  followers: 8,
  following: 1,
  created_at: "2019-09-23T18:37:14Z",
  updated_at: "2022-07-02T03:07:58Z",
};

// its for /api/stats/github
export async function fetchGithub() {
  const fake = false;
  if (fake) return tempData;
  return fetch("https://api.github.com/users/cuitlazotlac").then((res) =>
    res.json()
  );
}

// its for getting temporary old data
export function getOldStats() {
  return tempData;
}
