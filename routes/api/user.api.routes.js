const router = require('express').Router();
const {
   getUsers,
   getSingleUser,
   createUser,
   deleteUser,
   updateUser,
   addFriend,
   removeFriend

} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route('/:userId/friends').post(addFriend);


router.route('/:userId/friends/:friendsId').delete(removeFriend);

module.exports = router;

