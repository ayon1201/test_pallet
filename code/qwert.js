let QnA=[
    {
        id:"1",
        question:"Question 1?",
        answers:[
            {text:"Answer 1", correct:true},
            {text:"Answer 2", correct:false}
        ]
    },
    {
        id:"2",
        question:"Question 2?",
        answers:[
            {text:"Answer 1", correct:true},
            {text:"Answer 2", correct:false}
        ]
    },
    {
        id:"2",
        question:"Question 3?",
        answers:[
            {text:"Answer 1", correct:false},
            {text:"Answer 2", correct:true},
            {text:"Answer 3", correct:false}
        ]
    }
]

let q_no=0;

window.onload=()=>{

    let nextButton=document.getElementById("btnNextQue");
    let backButton=document.getElementById("btnPrevQue");

    displayQuestion=()=>{
        document.getElementById("question-text").innerHTML=QnA[q_no].question;

        ansHtml=""
        QnA[q_no].answers.forEach((answer,id)=>{
            ansHtml += `<td><input type="radio" name="radiospage01" value=${id}>${answer.text}<br>`
        })

        document.getElementById('answer-options').innerHTML = ansHtml;
        
        if(q_no==0)
        backButton.style.display='none';
        else
        backButton.style.display='inline';
       
        if(q_no==QnA.length-1)
        nextButton.style.display='none';
        else
        nextButton.style.display='inline';
    }
    
    nextQuestion=()=>{
        q_no++;
        displayQuestion();
    }
    
    prevQuestion=()=>{
        q_no--;
        displayQuestion();
    }

    displayQuestion();
    nextButton.addEventListener('click',nextQuestion);
    backButton.addEventListener('click',prevQuestion);
}


