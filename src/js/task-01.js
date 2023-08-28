const categories = document.querySelector("#categories");
console.log("Number of categories: ", categories.children.length);

const categoriesItems = document.querySelectorAll(".item");
categoriesItems.forEach(item => {
    const itemTitle = item.firstElementChild.textContent;
    console.log("Category: ", itemTitle);

    const itemLength = item.lastElementChild.children.length;
    console.log("Elements: ", itemLength);
});