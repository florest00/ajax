

function loadMemberVo(event) {
    event.preventDefault();

    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;

    const url = "https://g7w66k5a56aizbvauh6njeca5e0ozwud.lambda-url.us-east-1.on.aws/";

    fetch(url) 
    .then(resp => resp.json())
    .then(data => {
        console.log(data.bmi);
        console.log(data.status);

        const resultDiv = document.querySelector('#result');
        resultDiv.innerHTML = `
            <h2>BMI: ${data.bmi}</h2>
            <h2>판정: ${data.status}</h2>
            `;  
    })
    .catch(err => {
        alert("API 호출 중 오류 발생");
        console.error(err);
    });
}
// function loadMemberVo() {
//     fetch(url) 
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data.userHeight);
//         console.log(data.userWeight);

//         const h2userHeight = document.createElement('h2');
//         h2userHeight.innerHTML = data.userHeight;
       
//         const h2userWeight = document.createElement('h2');
//         h2userWeight.innerHTML = data.userWeight;

//         const body = document.querySelector("body");
//         body.appendChild(h2userHeight);
//         body.appendChild(h2userWeight);
//         body.appendChild(h2userHeight/(h2userWeight*h2userWeight));
        
//     })
// }