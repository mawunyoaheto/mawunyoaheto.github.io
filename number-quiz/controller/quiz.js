const quiz=[
    {"qid":1, "sequence":"3, 1, 4, 1, 5","answer":9},
    {"qid":2, "sequence":"1, 1, 2, 3, 5","answer":8},
    {"qid":3, "sequence":"1, 4, 9, 16, 25","answer":36},
    {"qid":4, "sequence":"2, 3, 5, 7, 11","answer":13},
    {"qid":5, "sequence":"1, 2, 4, 8, 16","answer":32},
];

function quizQuestions (req, res){
    let ans = parseInt(req.body.txtinput);
    let step = parseInt(req.body.step);
    let score = parseInt(req.body.score);
 
    if (ans === quiz[step].answer)
         score++;
    if(step+1 == quiz.length){
         res.render('result',{score:score,step:step+1});      
     }
    else{    
         step+=1;
         res.render('quiz',{numbers:quiz[step],score:score,step:step});  
    }
}

function renderHomePage(req, res){
   res.render('quiz',{numbers:quiz[0],score:0,step:0});
}

module.exports={
    renderHomePage,
    quizQuestions
};