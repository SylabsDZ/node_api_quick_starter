import uuid from 'uuid';

let tweets = [
  {
    id: '1',
    text: 'tweet 1',
    user: 'user1',
  },
  {
    id: '2',
    text: 'tweet 2',
    user: 'user1',
  },
  {
    id: '3',
    text: 'tweet 3',
    user: 'user2',
  },
];

function createTweet(req, res, next) {
  const { text, user } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'text field is required' });
  }
  if (!user) {
    return res.status(400).json({ error: 'user field is required' });
  }
  const newTweet = {
    text,
    user,
    id: uuid.v4(),
  };
  tweets.push(newTweet);
  return res.json(newTweet);
}

function listTweet(req, res, next) {
  return res.json(tweets);
}

function getTweet(req, res, next) {
  const tweetId = req.params.tweetId;
  const result = tweets.filter(tweet => tweet.id === tweetId);
  if (result.length === 0) {
    return res.status(404).json({ error: 'tweet not found' });
  }
  return res.json(result);
}

function deleteTweet(req, res, next) {
  const tweetId = req.params.tweetId;
  if (!tweetId) {
    return res.status(400).json({ error: 'tweetId field is required' });
  }
  const filteredTweets = tweets.filter(tweet => tweet.id !== tweetId);
  tweets = filteredTweets;
  return res.status(204).json({});
}

function updateTweet(req, res, next) {
  const { id, text, user } = req.body;
  if (!id) {
    return res.status(400).json({ error: 'id field is required' });
  }
  const updatedTweet = { id, text, user };
  const updatedTweets = tweets.map((tweet) => {
    if (tweet.id === id) {
      return updatedTweet;
    }
    return tweet;
  });
  tweets = updatedTweets;
  return res.status(204).json({});
}

export { createTweet, listTweet, getTweet, deleteTweet, updateTweet };

