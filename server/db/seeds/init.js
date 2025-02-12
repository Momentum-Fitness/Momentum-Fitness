const Post = require('../../models/Pos');
const User = require('../../models/User');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');

  // User.create(username, password)
  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');

  await Post.create('Arms:','For arms i started off with Biceps(Curls):Dumbbell curl 50 reps, 2 sets of 25 & Hammer curl 50 reps 2 sets of 25. Then I moved onto Triceps(Lateral): Diamond pushups 50 reps 2 sets of 25 & dips 50 reps 2 sets of 25. Long head: Over head plate extension 50 reps 2 sets of 25. Forearm: Rice Bucket training for 10 min','1')
  await Post.create('Back:','For Back I did Horizontial and Vertical workouts. For Horizontial: Chest supported rows: 50 reps, 2 sets of 25. Seated cable rows: 50 reps 2 sets of 25. For Vertical: Pull down machine 50 reps 2 sets of 25 and Weighted pull up variations: 100 reps 4 sets of 20','2')
  await Post.create('Back:','For Back I did Horizontial and Vertical workouts. For Horizontial: Chest supported rows: 50 reps, 2 sets of 25. Seated cable rows: 50 reps 2 sets of 25. For Vertical: Pull down machine 50 reps 2 sets of 25 and Weighted pull up variations: 100 reps 4 sets of 20','2')

  
};
