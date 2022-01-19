window.onload=function(){
    var btnCreateAccount=document.getElementById("create");
    btnCreateAccount.onclick=onAddAccountClicked;
};

const accountInfoList = [];
var newAccountModule = (function () {
    var account = {
        accountName: "",
        deposit: 0
    };
    var createAccount=function(name, amount) {
       
        var newAccount = Object.create(account);
        newAccount.accountName=name;
        newAccount.deposit=amount;
        return newAccount;
    };
    return {createAccount:createAccount};
})();

function onAddAccountClicked(){
    let accountNameElement=document.getElementById("accout_name");
    let depositeElement=document.getElementById("deposit");
    const accountName=accountNameElement.value.trim();
    const deposit=depositeElement.value.trim();

    if(accountName===""||deposit===""){
        alert("Please enter account name and deposit");
        return;
    }
    var newAcc=newAccountModule.createAccount(accountName,deposit);
    accountInfoList.push(newAcc);
    let mytextarea=document.getElementById("txtOutput");
    mytextarea.value="";
    accountNameElement.value="";
    depositeElement.value="";

    for(let i=0;i<accountInfoList.length;i++){
        mytextarea.value +="Account name: "+accountInfoList[i].accountName +" Balance: "+accountInfoList[i].deposit+"\n";
    }

}
