
const api = "https://jsonplaceholder.typicode.com/todos";

//show data button
 !(async function () {
  let data = await fetch(api)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });

  function buildTable(labels, objects, container) {
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    var theadTr = document.createElement("tr");
    for (var i = 0; i < labels.length; i++) {
      var theadTh = document.createElement("th");
      theadTh.innerHTML = labels[i];
      theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    table.appendChild(thead);

    for (j = 0; j < objects.length; j++) {
      var tbodyTr = document.createElement("tr");
      for (k = 0; k < labels.length; k++) {
        var tbodyTd = document.createElement("td");
        tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
        tbodyTr.appendChild(tbodyTd);
      }
      tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);

    container.appendChild(table);
  }

  buildTable(['Id', 'Title', 'Completed'], data, document.getElementById('tableApi'));

  function table_sort() {
const styleSheet = document.createElement('style')
styleSheet.innerHTML = `
  .order-inactive span {
  visibility:hidden;
  }
  .order-inactive:hover span {
  visibility:visible;
  }
  .order-active span {
  visibility: visible;
  }
  `
document.head.appendChild(styleSheet)

  
document.querySelectorAll('th').forEach(th_elem => {
  let asc = true
  const span_elem = document.createElement('span')
  span_elem.style = "font-size:15px; margin-left:0"
  span_elem.innerHTML = "▼"
  th_elem.appendChild(span_elem)
  th_elem.classList.add('order-inactive')
  
  const index = Array.from(th_elem.parentNode.children).indexOf(th_elem)
  th_elem.addEventListener('click', (e) => {
document.querySelectorAll('th').forEach(elem => {
  elem.classList.remove('order-active')
  elem.classList.add('order-inactive')
})
th_elem.classList.remove('order-inactive')
th_elem.classList.add('order-active')

if (!asc) {
  th_elem.querySelector('span').innerHTML = '▲'
} else {
  th_elem.querySelector('span').innerHTML = '▼'
}
const arr = Array.from(th_elem.closest("table").querySelectorAll('tbody tr'))
arr.sort((a, b) => {
  const a_val = a.children[index].innerText
  const b_val = b.children[index].innerText
  return (asc) ? a_val.localeCompare(b_val) : b_val.localeCompare(a_val)
})
arr.forEach(elem => {
  th_elem.closest("table").querySelector("tbody").appendChild(elem)
})
asc = !asc
  })
})
  }
  
  table_sort()
})();
