const categoriesEl = document.querySelectorAll(".item");
console.log('Number of categories:', categoriesEl.length);

categoriesEl.forEach(element => {
    const titleEl = element.firstElementChild;
    const amountLi = element.lastElementChild.children;

    console.log('Category:' , titleEl.textContent);
    console.log('Elements:', amountLi.length);
});


