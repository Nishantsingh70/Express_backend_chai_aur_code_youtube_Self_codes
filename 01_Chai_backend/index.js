require('dotenv').config()

const express = require('express')
const app = express()

const githubData = {
  "login": "Nishantsingh70",
  "id": 64470189,
  "node_id": "MDQ6VXNlcjY0NDcwMTg5",
  "avatar_url": "https://avatars.githubusercontent.com/u/64470189?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Nishantsingh70",
  "html_url": "https://github.com/Nishantsingh70",
  "followers_url": "https://api.github.com/users/Nishantsingh70/followers",
  "following_url": "https://api.github.com/users/Nishantsingh70/following{/other_user}",
  "gists_url": "https://api.github.com/users/Nishantsingh70/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Nishantsingh70/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Nishantsingh70/subscriptions",
  "organizations_url": "https://api.github.com/users/Nishantsingh70/orgs",
  "repos_url": "https://api.github.com/users/Nishantsingh70/repos",
  "events_url": "https://api.github.com/users/Nishantsingh70/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Nishantsingh70/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Nishant Singh",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Life is full of difficulties so we have to prepare ourself for facing these difficulties.",
  "twitter_username": null,
  "public_repos": 112,
  "public_gists": 0,
  "followers": 3,
  "following": 0,
  "created_at": "2020-04-28T10:19:44Z",
  "updated_at": "2024-01-15T14:14:54Z"
}

app.get('/github', (req, res)=> {
  res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
    res.send('nishantsingh.com')
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login at chai aur code. </h1>')    
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
