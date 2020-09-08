const sendBtn = document.querySelector('#sendBtn'),
    messageIn = document.querySelector('#messageIn'),
    messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);

function sendMsg() {
    let content = messageIn.value;
    if (content === '') {
        alert('Please Enter Valid Value');
    } else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
    
}