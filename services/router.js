import { Router } from 'express';
import {
  createTweet,
  listTweet,
  getTweet,
  deleteTweet,
  updateTweet,
} from '../controllers/tweet-controller';

const router = Router();
// create a new tweet
router.route('/tweets')
  .post(createTweet);
// list tweets
router.route('/tweets')
  .get(listTweet);
// get a tweet by id
router.route('/tweets/:tweetId')
  .get(getTweet);
// update a tweet by id
router.route('/tweets/:tweetId')
  .put(updateTweet);
// delete a tweet by a id
router.route('/tweets/:tweetId')
  .delete(deleteTweet);

export default router;
