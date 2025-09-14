document.addEventListener('DOMContentLoaded', function () {
    console.log("Hello");



    const form = document.getElementById("frm");
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
    const frmNum1 = document.getElementById("num1");
    frmNum1.addEventListener('change', fChangeNum1);
    const frmNum2 = document.getElementById("num2");
    const frmRes = document.getElementById("result");
    frmNum2.addEventListener('change', fChangeNum2);
    const buttonAddition = document.getElementById("bAddition");
    buttonAddition.addEventListener('click', clickAddition);
    const buttonDifference = document.getElementById("bDifference");
    buttonDifference.addEventListener('click', clickDifference);
    const buttonMultiplication = document.getElementById("bMultiplication");
    buttonMultiplication.addEventListener('click', clickMultiplication);
    const buttonDivision = document.getElementById("bDivision");
    buttonDivision.addEventListener('click', clickDivision);
    const buttonResult = document.getElementById("bResult");
    buttonResult.addEventListener('click', clickResult);

    let vOperation = " ";
    let vNumber1 = 0;
    let vNumber2 = 0;
    let vResult = 0;

    /*function frmSubmit() {
        
    }*/

    function fChangeNum1() {
        vNumber1 = Number(this.value);
    }

    function fChangeNum2() {
        vNumber2 = Number(this.value);
    }

    function clickAddition() {
        vOperation = "plus";
    }

    function clickDifference() {
        vOperation = "minus";
    }

    function clickMultiplication() {
        vOperation = "multiply";
    }

    function clickDivision() {
        vOperation = "divide";
    }

    function clickResult() {
        switch (vOperation) {
            case "plus":
                vResult = vNumber1 + vNumber2;
                break
            case "minus":
                vResult = vNumber1 - vNumber2;
                break
            case "multiply":
                vResult = vNumber1 * vNumber2;
                break
            case "divide":
                vResult = vNumber1 / vNumber2;
                break
            default:
                vResult = 0;
                break
        }

        frmRes.value = vResult;
    }
});

