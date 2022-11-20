
      const questionDb = [
        {
            Question: "Q1. JavaScript is the programming language of the _____.      [1/10]",
            a: "Desktop",
            b: "Mobile",
            c: "Web",
            d: "Server",
            ans: "ans3",
          },
        {
          Question: "Q2.  Which of the following method is used to access Html elements using javascript .        [2/10]",
          a: "getElementbyId()",
          b: "getElementsByClassName()",
          c: "Both A and B",
          d: "None Of Above",
          ans: "ans3",
        },

        {
          Question: "Q3. Which symbol is used separate JavaScript statements?      [3/10]",
          a: "Comma (,)",
          b: "Colon (:)",
          c: "Hyphen (_)",
          d: "Semicolon (;)",
          ans: "ans4",
        },

        {
          Question: "Q4.  JavaScript ignores?     [4/10]",
          a: "newlines",
          b: "tabs",
          c: "spaces",
          d: "All of the above",
          ans: "ans4",
        },
        {
          Question:" Q5 Which JavaScript method is used to write HTML output?    [5/10]",
          a: "document.write()",
          b: "document.output()",
          c: "console.log()",
          d: "document.writeHTML()",
          ans: "ans1",
        },
        {
          Question: "Q6.  Which JavaScript method is used to write into an alert box? [6/10]",
          a: "window.alertHTML()",
          b: "window.alert()",
          c: "window.alertBox()",
          d: "window.alertContent()",
          ans: "ans2",
        },
        {
            Question: "Q7.  In JavaScript, single line comment begins with ___. [7/10]",
            a: "#",
            b: "/*",
            c: "*",
            d: "//",
            ans: "ans4",
          },
          {
            Question: "Q8.  Which JavaScript keyword is used to declare a variable? [8/10]",
            a: "Var",
            b: "var",
            c: "Let",
            d: "All of avove",
            ans: "ans2",
          },
          {
            Question: "Q9. What is the default value of an uninitialized variable? [9/10]",
            a: "0",
            b: "undefined",
            c: "NaN",
            d: "null",
            ans: "ans2",
          },
          {
            Question: "Q10.  Which is the exponentiation operator in JavaScript? [10/10]",
            a: "exp()",
            b: "^",
            c: "**",
            d: "pow()",
            ans: "ans3",
          }
      ];

      const question = document.querySelector("#question");
      const option1 = document.querySelector("#opt1");
      const option2 = document.querySelector("#opt2");
      const option3 = document.querySelector("#opt3");
      const option4 = document.querySelector("#opt4");
      const submit = document.querySelector("#submit");
      const answers = document.querySelectorAll(".answer");
      const container = document.querySelector("#container");
      let questionLength = 0;
      let score = 0;
      function load() {
        question.innerText = questionDb[questionLength].Question;
        option1.innerText = questionDb[questionLength].a;
        option2.innerText = questionDb[questionLength].b;
        option3.innerText = questionDb[questionLength].c;
        option4.innerText = questionDb[questionLength].d;
      }

      function getAnswer() {
        let ans;

        for (let i = 0; i < answers.length; i++) {
          if (answers[i].checked) {
            ans = answers[i].id;
          }
        }
        return ans;
      }

      function removeChecked() {
        for (let i = 0; i < answers.length; i++) {
          if (answers[i].checked) {
            answers[i].checked = false;
          }
        }
      }
      load();
      submit.addEventListener("click", () => {
        let currentAnswer = getAnswer();

        if (currentAnswer == questionDb[questionLength].ans) {
          score++;
        }
        questionLength++;
        removeChecked();

        if (questionLength < questionDb.length) {
          load();
        } else {
          container.innerHTML = `
          
          <h1 id="ResultHeading">Result </h1>
          <h3 id="marks">You Obtained ${score}/10</h3>
          <button id="again-test" onclick=location.reload()>Give Again</button>
          
          `;
        }
      });
    