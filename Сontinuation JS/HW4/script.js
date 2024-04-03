
const img = JSON.parse(dataInfo);
console.log(img);
const container = document.querySelector('.container');
const imgCreate = (e) => {
    const i = document.createElement('img');
    i.id = e.id;
    i.src = e.url;
    i.width = e.width;
    i.height = e.height;
    return i;
};
img.map((e) => {
    container.appendChild(imgCreate(e));
});
