var User = /** @class */ (function () {
    function User(_name, _surname, _charge, _numberCall) {
        this.name = _name;
        this.surname = _surname;
        this.charge = _charge;
        this.numberCall = _numberCall;
    }
    User.prototype.recharge = function (amountRecharge) {
        this.charge += amountRecharge;
    };
    User.prototype.call = function (minutes) {
        this.charge -= minutes * 0.2;
        this.numberCall++;
    };
    User.prototype.number404 = function () {
        return this.charge;
    };
    User.prototype.getNumberCalls = function () {
        return this.numberCall;
    };
    User.prototype.resetCalls = function () {
        this.numberCall = 0;
    };
    return User;
}());
var firstUser = new User("Dario", "Bianchi", 50, 0);
var secondUser = new User("Dan", "Rossi", 20, 2);
var thirdUser = new User("Zak", "Verdi", 40, 5);
console.log("User: ".concat(firstUser.name, " ").concat(firstUser.surname, "\nCarica: ").concat(firstUser.charge, "\u20AC\nNumero Chiamate: ").concat(firstUser.numberCall, "\n"));
console.log("User: ".concat(secondUser.name, " ").concat(secondUser.surname, "\nCarica: ").concat(secondUser.charge, "\u20AC\nNumero Chiamate: ").concat(secondUser.numberCall, "\n"));
console.log("User: ".concat(thirdUser.name, " ").concat(thirdUser.surname, "\nCarica: ").concat(thirdUser.charge, "\u20AC\nNumero Chiamate: ").concat(thirdUser.numberCall, "\n"));
console.log("");
firstUser.recharge(20);
console.log("".concat(firstUser.name, " ").concat(firstUser.surname, " ha ricaricato 20\u20AC"));
firstUser.call(10);
console.log("".concat(firstUser.name, " ").concat(firstUser.surname, " ha fatto una chiamata da 10 minuti"));
console.log("A ".concat(firstUser.name, " ").concat(firstUser.surname, " sono rimasti ").concat(firstUser.number404(), "\u20AC dopo la chiamata e ha fatto ").concat(firstUser.getNumberCalls(), " call"));
console.log("");
secondUser.recharge(20);
console.log("".concat(secondUser.name, " ").concat(secondUser.surname, " ha ricaricato 20\u20AC"));
secondUser.call(20);
console.log("".concat(secondUser.name, " ").concat(secondUser.surname, " ha fatto una chiamata da 20 minuti"));
console.log("A ".concat(secondUser.name, " ").concat(secondUser.surname, " sono rimasti ").concat(secondUser.number404(), "\u20AC dopo la chiamata e ha fatto ").concat(secondUser.getNumberCalls(), " call"));
console.log("");
thirdUser.recharge(20);
console.log("".concat(thirdUser.name, " ").concat(thirdUser.surname, " ha ricaricato 20\u20AC"));
thirdUser.call(8);
console.log("".concat(thirdUser.name, " ").concat(thirdUser.surname, " ha fatto una chiamata da 8 minuti"));
console.log("A ".concat(thirdUser.name, " ").concat(thirdUser.surname, " sono rimasti ").concat(thirdUser.number404(), "\u20AC dopo la chiamata e ha fatto ").concat(thirdUser.getNumberCalls(), " call"));
console.log("");
thirdUser.resetCalls();
console.log("".concat(thirdUser.name, " ").concat(thirdUser.surname, " ha resettato il numero chiamate"));
console.log("");
console.log("User: ".concat(firstUser.name, " ").concat(firstUser.surname, "\nCarica: ").concat(firstUser.charge, "\u20AC\nNumero Chiamate: ").concat(firstUser.numberCall, "\n"));
console.log("User: ".concat(secondUser.name, " ").concat(secondUser.surname, "\nCarica: ").concat(secondUser.charge, "\u20AC\nNumero Chiamate: ").concat(secondUser.numberCall, "\n"));
console.log("User: ".concat(thirdUser.name, " ").concat(thirdUser.surname, "\nCarica: ").concat(thirdUser.charge, "\u20AC\nNumero Chiamate: ").concat(thirdUser.numberCall, "\n"));
// UI DA FINIRE
var renderUserNameNav = document.getElementById("user-name-nav");
var renderCharge = document.getElementById("charge");
var numberCallInput = document.getElementById("number-call");
var rechargeBtn = document.getElementById("recharge-btn");
var rechargeInput = document.getElementById("recharge-input");
var callContainer = document.getElementById("call-container");
var numberInput = document.getElementById("number-input");
var callBtn = document.getElementById("call-btn");
var resetCallsBtn = document.getElementById("btn-reset-calls");
resetCallsBtn.addEventListener("click", function () {
    firstUser.resetCalls();
    numberCallInput.innerText = firstUser.numberCall;
});
rechargeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var rechargeValue = parseInt(rechargeInput.value);
    rechargeInput.value = "";
    firstUser.recharge(rechargeValue);
    renderCharge.innerText = firstUser.charge;
});
callBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var numberInputValue = numberInput.value;
    callContainer.classList =
        "px-2 mt-2 border border-1 rounded-3 d-flex flex-column align-items-center";
    callContainer.innerHTML = "\n  <p class=\"fw-bold text-white m-0 mt-3\">".concat(numberInputValue, "</p>\n  <p class=\"fs-7 text-white m-0 mt-1\">Calling...</p>\n  <button\n    type=\"button\"\n    id=\"close-call\"\n    class=\"btn btn-close-call mt-3 mb-3\"\n  >\n    <i class=\"bi bi-telephone-x-fill\"></i>\n  </button>\n");
    var closeCallBtn = document.getElementById("close-call");
    closeCallBtn.addEventListener("click", function () {
        callContainer.innerHTML = "";
        callContainer.classList = "";
    });
});
window.onload = function () {
    renderCharge.innerText = firstUser.charge;
    renderUserNameNav.innerText = firstUser.name;
    numberCallInput.innerText = firstUser.getNumberCalls();
};
// DA RAGIONARE PROSSIMAMENTE
// const userName = document.getElementById("user-name") as HTMLButtonElement;
// const userSurname = document.getElementById(
//   "user-surname"
// ) as HTMLButtonElement;
// const userRecharge = document.getElementById(
//   "user-recharge"
// ) as HTMLButtonElement;
// const signUpBtn = document.getElementById("sign-up-btn") as HTMLButtonElement;
// let userID:number = 0;
// const createUser = function (
//   name: string,
//   surname: string,
//   initRecharge: number
// ): void {
//   const user = new User(name, surname, initRecharge, 0)
//   localStorage.setItem(`user${userID++}`, user)
// };
// signUpBtn.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const userNameInput: string = userName.value;
//   const userSurnameINput: string = userSurname.value;
//   const userInitRecharge: number = parseInt(userRecharge.value);
//   createUser(userNameInput, userSurnameINput, userInitRecharge);
// });
