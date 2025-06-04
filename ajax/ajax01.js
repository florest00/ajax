// 문법 : fetch(요청URL [, 옵션객체]);

const url = "https://3wphap52cgoisea6bs2h26wss40nudgw.lambda-url.us-east-1.on.aws/";

fetch(url)
    .then((resp) => {
        return resp.json(); //stream 통해서 데이터를 text 형식으로 읽어들이기
    })
    .then((data) => {
        console.log(data);

    })
    ;

//비동기통신(ajax) : fetch, 제이쿼리, ???
//promise

/*
new Object
new Promise( 함수 );
*/

/*

const p = new Promise(f01);
p
    .then(good)
    .then((() => { console.log("인생..."); }))
    .catch(bad)
    ;

function f01(a, b) { // a => 성공, b => 실패
    console.log("f01 called ~~~");
    // b(); // 뭔가를 넣어주면서 호출.. b호출하는데, catch에 있는 bad를 실행시켜주는데
    a(200);
    // proㅁmise 상태값을 잘됐다, 안됐다로 바꿔줘야함
    // changeStatusOk();
}

function good(temp) {
    console.log("gooood~~~~");
    console.log(temp);
}

function bad(temp) {
    console.log("baaaaaaad.......");
    console.log(temp);

}

*/