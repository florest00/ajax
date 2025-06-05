function calcBmi() {

    const h = document.querySelector("#h").value;
    const w = document.querySelector("#w").value;
    const url = `https://g7w66k5a56aizbvauh6njeca5e0ozwud.lambda-url.us-east-1.on.aws/?height=${h}&weight=${w}`;

    fetch(url)
        .then(async resp => {
            if (!resp.ok) {
                // 바디에 있는 데이터 읽어와서 콘솔로그 출력
                const result = await resp.json();
                console.log(result);

                // resp.json()
                //     .then(data => {
                //         console.log(data);
                //     })
                throw new Error("뭔가 잘못됨,,,");
            }
            return resp.json()
        })
        .then((data) => {
            console.log("두번째 then ... ");

            console.log(data);

            // if (data.error) {
            //     throw new Error("쿼리스트링 없는듯 ㅠㅠ");
            // }

            document.querySelector("#bmi").innerText = data.bmi;
            document.querySelector("#category").innerText = data.category;

        })
        ;


}