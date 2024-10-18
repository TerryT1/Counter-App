// Title: Student Count
let count = 0;
let entries = [];

if (localStorage.getItem("savedCount")) {
  count = parseInt(localStorage.getItem("savedCount"));
  document.getElementById("count-el").textContent = count;
}

if (localStorage.getItem("entries")) {
  entries = JSON.parse(localStorage.getItem("entries"));
  displayEntries();
}

function increment() {
  count++;
  document.getElementById("count-el").textContent = count;
}

function decrement() {
  if (count > 0) {
    count--;
  }
  document.getElementById("count-el").textContent = count;
}

function reset() {
  count = 0;
  document.getElementById("count-el").textContent = count;
  localStorage.removeItem("savedCount"); 
  localStorage.removeItem("entries");    
  entries = [];  
  displayEntries();  
}

function save() {
  localStorage.setItem("savedCount", count);

  entries.push(count);

}
