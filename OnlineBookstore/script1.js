let items = [
  {
    id: 1,
    title: "Architecture",
    author: "P. V. Deshpande",
    price: 540,
    quantity: 42,
    date: "3.7.2020",
  },
  {
    id: 2,
    title: "Accountant",
    author: "Sawant",
    price: 1200,
    quantity: 33,
    date: "25.4.1982",
  },
  {
    id: 3,
    title: "Science",
    author: "Vaidehi",
    price: 260,
    quantity: 12,
    date: "16.2.2014",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const price = document.getElementById("price");
  const qty = document.getElementById("qty");

  const container = document.querySelector(".tbody");

  const addBookButton = document.getElementById("Add");
  const addItem = document.getElementById("addItem");

  const updateBookButton = document.getElementById("Update");
  const updateItem = document.getElementById("updateItem");

//   updateBookButton.addEventListener("click", () => {
//     addItem.style.display = "none";
//     updateItem.style.display = "block";
//   });

//   addBookButton.addEventListener("click", () => {
//     addItem.style.display = "block";
//     updateItem.style.display = "none";
//   });

  fetchItems();

  // add items to the table
  addItem.addEventListener("click", () => {
    const newId =
      items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;

    let date = new Date().toLocaleDateString("de-DE");

    let bookData = {
      id: newId,
      title: title.value,
      author: author.value,
      price: price.value,
      quantity: qty.value,
      date: date,
    };
    items.push(bookData);
   
    fetchItems();
  });

  function fetchItems() {
    container.innerHTML = ""; // Clear existing table rows
    items.forEach((item) => {
      const tableData = document.createElement("tr");
      tableData.innerHTML = `  
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.date}</td>
          `;
      container.appendChild(tableData);
    });
  }
});
