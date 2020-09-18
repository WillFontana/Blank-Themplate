// função de animação de icones na tela de login
function animateLogin() {
  var iconContainer = document.getElementById('loginHeadlineIllustration');
  iconContainer.classList.add("-faded");
  let component = document.createElement('i');

  component.innerHTML = `
    <i class="svg-icon">
      <svg>
        <use xlink:href="#login-animate${loginAnimateCounter}"></use>
      </svg>
    </i>
    `;
  setTimeout(() => {
    iconContainer.innerHTML = "";
    iconContainer.appendChild(component);
    iconContainer.classList.remove("-faded");
  }, 1000);

  loginAnimateCounter++;
  if (loginAnimateCounter == 10) {
    loginAnimateCounter = 1;
  }
}

function applyUsed(idInput) {
  let input = document.getElementById(idInput);
  input.value == '' ? input.classList.remove("-used", "-success", "-warning", "-info") : input.classList.add("-used");
}

function validaFormLogar() {
  let error = false;

  let inputAccessVal = inputAccess.value;
  let inputPasswordVal = inputPassword.value;

  inputAccess.classList.remove("-error","-success");
  inputCreateAccess.classList.remove("-error","-success");
  inputConfirmPassword.classList.remove("-error","-success");
  inputPassword.classList.remove("-error","-success");


  if (loginForm.classList.contains("-create")) {
    loginForm.classList.remove("-create");
    signinButton.innerHTML = `
    <p class="text">
      Criar conta
    </p>
    `;
    loginButton.innerHTML = `
    <p class="text">
      Entrar
    </p>
    `;
    labelAcess.innerHTML = `Nome ou Email de login`;
    containerInputCreateAccess.classList.add("-hidden");
    containerInputConfirmPassword.classList.add("-hidden");
    document.getElementById("loginHeadlinePresentation").innerHTML = "Por favor, insira os dados abaixo para acessar a plataforma!";
    return;
  }

  loginButton.removeAttribute("onclick");
  if (inputAccessVal == '') {
    inputAccess.classList.add("-error");
    error = true;
  }
  if (inputPasswordVal == '') {
    inputPassword.classList.add("-error");
    error = true;
  }

  if (error) {
    document.getElementById("loginHeadlinePresentation").innerHTML = "Opa! Parece que temos campos importantes vazios!";
    loginButton.setAttribute("onclick", "validaFormLogar()");
    return;
  }

  inputAccess.classList.add("-success");
  inputPassword.classList.add("-success");
  loginButton.setAttribute("onclick", "validaFormLogar()");

  document.getElementById("loginHeadlinePresentation").innerHTML = "Verificando o usario, aguarde um minutinho!";
  return;
}

function criarCadastro() {
  let error = false;

  let inputAccessVal = inputAccess.value;
  let inputCreateAccessVal = inputAccess.value;
  let inputPasswordVal = inputPassword.value;
  let inputConfirmPassworddVal = inputPassword.value;

  inputAccess.classList.remove("-error","-success");
  inputCreateAccess.classList.remove("-error","-success");
  inputConfirmPassword.classList.remove("-error","-success");
  inputPassword.classList.remove("-error","-success");

  if (!loginForm.classList.contains("-create")) {
    loginForm.classList.add("-create");
    signinButton.innerHTML = `
    <p class="text">
      Cadastrar
    </p>`;

    loginButton.innerHTML = `
    <p class="text">
      Lembrei meu acesso
    </p>
    `;
    labelAcess.innerHTML = `Nome da conta`;
    containerInputCreateAccess.classList.remove("-hidden");
    containerInputConfirmPassword.classList.remove("-hidden");
    document.getElementById("loginHeadlinePresentation").innerHTML = "Por favor, insira os dados abaixo para criar a conta!";
    return;
  }

  signinButton.removeAttribute("onclick");

  if (inputAccessVal == '') {
    inputAccess.classList.add("-error");
    error = true;
  }
  if (inputCreateAccessVal == '') {
    inputCreateAccess.classList.add("-error");
    error = true;
  }
  if (inputPasswordVal == '') {
    inputPassword.classList.add("-error");
    error = true;
  }
  if (inputConfirmPassworddVal == '') {
    inputConfirmPassword.classList.add("-error");
    error = true;
  }

  if (error) {
    document.getElementById("loginHeadlinePresentation").innerHTML = "Opa! Parece que temos campos importantes vazios!";
    signinButton.setAttribute("onclick", "criarCadastro()");
    return;
  }

  inputAccess.classList.add("-success");
  inputCreateAccess.classList.add("-success");
  inputConfirmPassword.classList.add("-success");
  inputPassword.classList.add("-success");

  document.getElementById("loginHeadlinePresentation").innerHTML = "Criando o perfil, aguarde um minutinho!";
  return;
}
