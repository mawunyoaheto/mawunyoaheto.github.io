const router  = require('express').Router();
const quiz = require('../controller/quiz');

router.get('/',quiz.renderHomePage);
router.post('/',quiz.quizQuestions);

module.exports = router;