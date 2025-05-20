// Change the text in intro paragraph
document.getElementById("change-text-btn").addEventListener("click", () => {
    const intro = document.getElementById("intro-text");
    intro.textContent = "🎉 You just changed this text with JavaScript!";
  });
  
  // Change the style of heading
  document.getElementById("change-style-btn").addEventListener("click", () => {
    const heading = document.getElementById("main-heading");
    heading.style.color = "purple";
    heading.style.fontSize = "2.5rem";
    heading.style.textTransform = "uppercase";
  });
  
  // Add a new item to list
  document.getElementById("add-item-btn").addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New item added!";
    document.getElementById("item-list").appendChild(newItem);
  });
  
  // Remove the last item from list
  document.getElementById("remove-item-btn").addEventListener("click", () => {
    const list = document.getElementById("item-list");
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    } else {
      alert("No more items to remove!");
    }
  });
  