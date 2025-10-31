const checkButton = document.getElementById("check");
const signButton = document.getElementById('sign');
const image = document.getElementById('photo');
const findMe = document.getElementById('find-me')

checkButton.addEventListener('click', () => {
    checkButton.innerHTML = 'Read Below!';
    setTimeout(() => {
        checkButton.innerHTML = 'Check!'
    }, 2400)
})

signButton.addEventListener('click', () => {
    alert('Вы хотите войти в аккаунт?');
    signButton.innerHTML = 'Signing...';
    setTimeout(() => {
        signButton.innerHTML = 'Sign In';
        alert('Произошла ошибка, попробуйте позже!');
    }, 5000)
})

image.addEventListener('mouseover', () => {
    findMe.style.display = 'block';
})
image.addEventListener('mouseout', () => {
    findMe.style.display = 'none';
})
document.querySelectorAll('button').forEach(btn => {
  btn.style.transition = 'all 0.3s ease';
});