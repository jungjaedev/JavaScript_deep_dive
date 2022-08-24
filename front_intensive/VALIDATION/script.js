let elInptUsername = document.querySelector('#username');
let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');

// 아이디 입력창에 키보드로 입력할 때
elInptUsername.onkeyup = function () {
  console.log(elInptUsername.value);
  if (isMoreThan4Length(elInptUsername.value)) {
    elSuccessMessage.classList.remove('hide');
    elFailureMessage.classList.add('hide');
  } else {
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
  }
};
// 글자 수가 4개 이상이면
function isMoreThan4Length(value) {
  return value.length >= 4;
}

// 비밀번호 맞춰보기
// 폼 작성안하면 회원가입 비활성화
