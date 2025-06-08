let container=document.querySelector('.container')

let inputfield=document.querySelector('.input')
let btn=document.createElement('button');
let label=document.createElement('label');
let textContent=document.createTextNode('Enter number:');
let input=document.createElement('input');
btn.textContent='submit'
btn.style.margin='20px'

for(let i=0; i<32; i++) {
    let item=document.createElement('div');
    item.className='item';
    item.textContent='Item ';
    container.appendChild(item);
  }

inputfield.appendChild(label);
label.appendChild(textContent); 
label.appendChild(input);
inputfield.appendChild(btn);
btn.addEventListener('click',()=>{
    let number=parseInt(input.value);
    if (isNaN(number) || number <= 0) {
        alert('Please enter a valid positive number');
        return;
    }
    container.innerHTML = ''; // Clear previous items
    for (let i = 0; i < number; i++) {
        let item = document.createElement('div');
        item.className = 'item';
        item.textContent = 'Item ';
        container.appendChild(item);
        let div=document.querySelector('div')
        let items=document.querySelectorAll('.item');
        div.style.display='flex';
        div.style.flexWrap='wrap';
        div.style.gap='10px';
        items.forEach((item) => {
            item.style.border='1px solid black';
            item.style.padding='30px';
            item.addEventListener('mouseenter',()=>{
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                
            })
        });

    }
});
let items=document.querySelectorAll('.item');


container.style.border="1px solid black"
container.style.padding="16px"
container.style.margin="20px"
container.style.display='flex';
container.style.justifyContent='flex-start'
container.style.flexWrap='wrap';
container.style.gap='10px';
items.forEach((item) => {
    item.style.border='1px solid black';
    item.style.padding='30px';
    item.addEventListener('mouseenter',()=>{
        const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })
});



