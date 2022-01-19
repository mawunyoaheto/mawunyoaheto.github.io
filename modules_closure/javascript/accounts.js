window.onload = function () {
    var btnCreateAccount = document.getElementById("create");
    btnCreateAccount.onclick = onAddAccountClicked;
};

function onAddAccountClicked() {
    let accountNameElement = document.getElementById("accout_name");
    let depositeElement = document.getElementById("deposit");
    const accountName = accountNameElement.value.trim();
    const deposit = depositeElement.value.trim();

    if (accountName === "" || deposit === "") {
        alert("Please enter account name and deposit");
        return;
    }
    createAccount.createAccount(accountName, deposit);
    let mytextarea = document.getElementById("txtOutput");
    mytextarea.value = "";
    accountNameElement.value = "";
    depositeElement.value = "";

    mytextarea.value = createAccount.getDetails();
}


let createAccount = (function () {
    let accountsInfoList = [];
    let account = {
        accountType: '',
        amount: 0
    };

    let newAccount = (accType, depositAmount) => {
        var acct = Object.create(account);
        acct.accType = accType;
        acct.depositAmount = depositAmount;
        accountsInfoList.push(acct);
        console.log(accountsInfoList);
    };

    let getAccountInfo = () => {
        let details = "";
        for (let obj of accountsInfoList)
            details += "Account type: " + Object.values(obj)[0] + " " + "Balance: " + Object.values(obj)[1] + "\n";
        return details;
    };

    return {
        createAccount: newAccount,
        getDetails: getAccountInfo
    };
})();
