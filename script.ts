interface Smartphone {
  charge: number;
  numberCall: number;
}

class User implements Smartphone {
  name: string;
  surname: string;
  charge: number;
  numberCall: number;

  constructor(
    _name: string,
    _surname: string,
    _charge: number,
    _numberCall: number
  ) {
    this.name = _name;
    this.surname = _surname;
    this.charge = _charge;
    this.numberCall = _numberCall;
  }

  public recharge(amountRecharge: number): void {
    this.charge += amountRecharge;
  }

  public call(minutes: number): void {
    this.charge -= minutes * 0.2;
    this.numberCall++;
  }

  public number404(): number {
    return this.charge;
  }

  public getNumberCalls(): number {
    return this.numberCall;
  }

  public resetCalls(): void {
    this.numberCall = 0;
  }
}

const firstUser = new User("Dario", "Bianchi", 50, 0);
const secondUser = new User("Dan", "Rossi", 20, 2);
const thirdUser = new User("Zak", "Verdi", 40, 5);

console.log(`User: ${firstUser.name} ${firstUser.surname}
Carica: ${firstUser.charge}€
Numero Chiamate: ${firstUser.numberCall}
`);

console.log(`User: ${secondUser.name} ${secondUser.surname}
Carica: ${secondUser.charge}€
Numero Chiamate: ${secondUser.numberCall}
`);

console.log(`User: ${thirdUser.name} ${thirdUser.surname}
Carica: ${thirdUser.charge}€
Numero Chiamate: ${thirdUser.numberCall}
`);

console.log("");

firstUser.recharge(20);
console.log(`${firstUser.name} ${firstUser.surname} ha ricaricato 20€`);

firstUser.call(10);
console.log(
  `${firstUser.name} ${firstUser.surname} ha fatto una chiamata da 10 minuti`
);

console.log(
  `A ${firstUser.name} ${
    firstUser.surname
  } sono rimasti ${firstUser.number404()}€ dopo la chiamata e ha fatto ${firstUser.getNumberCalls()} call`
);

console.log("");

secondUser.recharge(20);
console.log(`${secondUser.name} ${secondUser.surname} ha ricaricato 20€`);

secondUser.call(20);
console.log(
  `${secondUser.name} ${secondUser.surname} ha fatto una chiamata da 20 minuti`
);

console.log(
  `A ${secondUser.name} ${
    secondUser.surname
  } sono rimasti ${secondUser.number404()}€ dopo la chiamata e ha fatto ${secondUser.getNumberCalls()} call`
);

console.log("");

thirdUser.recharge(20);
console.log(`${thirdUser.name} ${thirdUser.surname} ha ricaricato 20€`);

thirdUser.call(8);
console.log(
  `${thirdUser.name} ${thirdUser.surname} ha fatto una chiamata da 8 minuti`
);

console.log(
  `A ${thirdUser.name} ${
    thirdUser.surname
  } sono rimasti ${thirdUser.number404()}€ dopo la chiamata e ha fatto ${thirdUser.getNumberCalls()} call`
);

console.log("");

thirdUser.resetCalls();
console.log(
  `${thirdUser.name} ${thirdUser.surname} ha resettato il numero chiamate`
);

console.log("");

console.log(`User: ${firstUser.name} ${firstUser.surname}
Carica: ${firstUser.charge}€
Numero Chiamate: ${firstUser.numberCall}
`);

console.log(`User: ${secondUser.name} ${secondUser.surname}
Carica: ${secondUser.charge}€
Numero Chiamate: ${secondUser.numberCall}
`);

console.log(`User: ${thirdUser.name} ${thirdUser.surname}
Carica: ${thirdUser.charge}€
Numero Chiamate: ${thirdUser.numberCall}
`);

// UI DA FINIRE

const renderUserNameNav: any = document.getElementById(
  "user-name-nav"
) as HTMLSpanElement;

const renderCharge: any = document.getElementById("charge") as HTMLSpanElement;

const numberCallInput: any = document.getElementById(
  "number-call"
) as HTMLSpanElement;

const rechargeBtn = document.getElementById(
  "recharge-btn"
) as HTMLButtonElement;

const rechargeInput = document.getElementById(
  "recharge-input"
) as HTMLButtonElement;

const callContainer: any = document.getElementById(
  "call-container"
) as HTMLDivElement;

const numberInput: any = document.getElementById(
  "number-input"
) as HTMLInputElement;

const callBtn = document.getElementById("call-btn") as HTMLButtonElement;

const resetCallsBtn = document.getElementById(
  "btn-reset-calls"
) as HTMLButtonElement;

resetCallsBtn.addEventListener("click", function () {
  firstUser.resetCalls();
  numberCallInput.innerText = firstUser.numberCall;
});

rechargeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const rechargeValue: number = parseInt(rechargeInput.value);
  rechargeInput.value = "";
  firstUser.recharge(rechargeValue);
  renderCharge.innerText = firstUser.charge;
});

callBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const numberInputValue: string = numberInput.value;
  callContainer.classList =
    "px-2 mt-2 border border-1 rounded-3 d-flex flex-column align-items-center";
  callContainer.innerHTML = `
  <p class="fw-bold text-white m-0 mt-3">${numberInputValue}</p>
  <p class="fs-7 text-white m-0 mt-1">Calling...</p>
  <button
    type="button"
    id="close-call"
    class="btn btn-close-call mt-3 mb-3"
  >
    <i class="bi bi-telephone-x-fill"></i>
  </button>
`;

  const closeCallBtn = document.getElementById(
    "close-call"
  ) as HTMLButtonElement;

  closeCallBtn.addEventListener("click", function () {
    callContainer.innerHTML = "";
    callContainer.classList = "";
    firstUser.numberCall++;
    numberCallInput.innerText = firstUser.numberCall;
  });
});

window.onload = (): void => {
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
