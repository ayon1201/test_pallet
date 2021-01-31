let QnA=[
    {
        id:"1",
        question:"Question 1?",
        answers:[
            {id:1, text:"Answer 1", correct:true},
            {id:2, text:"Answer 2", correct:false}
        ],
        answer_selected:-1
    },
    {
        id:"2",
        question:"Question 2?",
        answers:[
            {id:1, text:"Answer 1", correct:true},
            {id:2, text:"Answer 2", correct:false}
        ],
        answer_selected:-1
    },
    {
        id:"2",
        question:"Question 3?",
        answers:[
            {id:1, text:"Answer 1", correct:false},
            {id:2, text:"Answer 2", correct:true},
            {id:3, text:"Answer 3", correct:false}
        ],
        answer_selected:-1
    }
]

let q_no=0;

window.onload=()=>{

    let nextButton=document.getElementById("btnNextQue");
    let backButton=document.getElementById("btnPrevQue");
    let QuestionPalette=document.getElementById("test-questions");
    let saveBtn=document.getElementById("saveAndNext")
    let paletteHtml=""
    let selectedAnswer=-1;

    for(i=1;i<=90;i++){
        paletteHtml+=`<li class="" data-seq="1"><a id="question-no${i}" class="test-ques que-not-attempted"
        href="javascript:void(0);" data-href="page${i}">${i}</a></li>`
    }

    QuestionPalette.innerHTML=paletteHtml;

    let selectAnswer=(answer_no)=>{
        selectedAnswer=answer_no;
    }

    displayQuestion=()=>{
        selectedAnswer=-1;
        document.getElementById("question-text").innerHTML=QnA[q_no].question;

        ansHtml=""
        QnA[q_no].answers.forEach((answer,id)=>{
            ansHtml += `<td><input id=${id+1} type="radio" name="radiospage01" value=${id+1}>${answer.text}<br>`
        })
        document.getElementById('answer-options').innerHTML = ansHtml;
        QnA[q_no].answers.forEach((answer,id)=>{
            document.getElementById(`${id+1}`).addEventListener('click',()=>selectAnswer(id+1))
        })
        
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

    save=()=>{
        QnA[q_no].answer_selected=selectedAnswer;
    }

    saveAndNext=()=>{
        save()
        if(QnA[q_no].answer_selected!=-1)
        document.getElementById(`question-no${q_no+1}`).style.backgroundColor="green";
        nextQuestion()
    }

    displayQuestion();
    nextButton.addEventListener('click',nextQuestion)
    backButton.addEventListener('click',prevQuestion)
    saveBtn.addEventListener('click',saveAndNext)
}


