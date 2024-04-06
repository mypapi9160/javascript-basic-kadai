const btn = document.getElementById('btn');

const text = document.getElementById('text');


btn.addEventListener('click' , () => {

  const h2 = document.createElement('h2');
  h2.textContent = 'ボタンをクリックしました';
  text.appendChild(h2);
});
