const btn =document.getElementById('btn');
const text =document.getElementById('text');

btn.addEventListener('click', () =>{
  setTimeout(() => {
    text.textContent ='ボタンをクリックしました';
    text.appendChild(text);  
  },2000);
});
