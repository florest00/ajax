
// 디비에 있는 Member 테이블 데이터 조회


// 쿼리스트링에 nick 추가 하면 닉네임 그걸로 바꾸기
// queryString?
// const url = "https://3wphap52cgoisea6bs2h26wss40nudgw.lambda-url.us-east-1.on.aws/";
// const url = "https://3wphap52cgoisea6bs2h26wss40nudgw.lambda-url.us-east-1.on.aws/?nick=abc";
const url = " https://pngwdv4mvgmegshcyonpmu6b3e0trmpw.lambda-url.us-east-1.on.aws/?bno=99999999999";

function loadMemberVo() {
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.userId);
            console.log(data.userPwd);
            console.log(data.userNick);


            const h2userId = document.createElement('h2');
            h2userId.innerHTML = data.userId;

            const h2userPwd = document.createElement('h2');
            h2userPwd.innerHTML = data.userPwd;

            const h2userNick = document.createElement('h2');
            h2userNick.innerHTML = data.userNick;

            const body = document.querySelector("body");
            body.appendChild(h2userId);
            body.appendChild(h2userPwd);
            body.appendChild(h2userNick);
        })
        ;
}


function loadBoardVo() {
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);

        })
}




// 아이디 나오게

// 비번 나오게

// 닉네임 나오게........
// 응답은 JSON 형식으로



// 화면에 인풋 태그 만들어서 붙여서 .. 해당 닉네임에 대한 값을 가져올 수 있는,,,