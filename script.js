
const CART_KEY='thirdbrainlk_cart_v1';
const getCart=()=>JSON.parse(localStorage.getItem(CART_KEY)||'[]');
const saveCart=c=>{localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartCount();renderCart();};
function updateCartCount(){const c=getCart();document.querySelectorAll('[data-cart-count]').forEach(x=>x.textContent=c.length)}
function addToCart(name,price){const c=getCart();c.push({name,price});saveCart(c);openCart();}
function removeCart(i){const c=getCart();c.splice(i,1);saveCart(c)}
function openCart(){document.querySelector('#cartDrawer')?.classList.add('open');document.querySelector('#overlay')?.classList.add('show');renderCart()}
function closeCart(){document.querySelector('#cartDrawer')?.classList.remove('open');document.querySelector('#overlay')?.classList.remove('show')}
function renderCart(){const box=document.querySelector('#cartItems');if(!box)return;const c=getCart();box.innerHTML=c.length?c.map((x,i)=>`<div class="cart-item"><div><b>${x.name}</b><div class="meta">${x.price}</div></div><button class="icon-btn" onclick="removeCart(${i})">×</button></div>`).join(''):'<p class="meta">Your demo cart is empty.</p>';}
document.addEventListener('DOMContentLoaded',()=>{updateCartCount();renderCart();document.querySelectorAll('[data-add]').forEach(b=>b.addEventListener('click',()=>addToCart(b.dataset.name,b.dataset.price)));document.querySelectorAll('[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Demo form only — connect a real email or backend before publishing.')}));});
