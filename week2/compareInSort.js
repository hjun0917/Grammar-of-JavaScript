// customizing sort
let arr = ["b", "c", "a"];

arr.sort((a1, a2) =>
    a1 === a2 ? a1.localeCompare(a2) : a1[0].localeCompare(a2[0])
);

console.log(arr);
