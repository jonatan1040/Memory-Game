//images for cards
const image1 = './images/ca1.jpg';
const image2 = './images/ca2.jpg';
const image3 = './images/ca3.jpg';
const image4 = './images/ca4.jpg';
const image5 = './images/ca5.jpg';
const image6 = './images/ca6.jpg';
const image7 = './images/ca7.jpg';
const image8 = './images/ca8.jpg';
const image9 = './images/ca9.jpg';
const image10 = './images/ca10.jpg';
const image11 = ' ';
const image12 = ' ';
const image13 = ' ';
const image14 = ' ';
const image15 = ' ';
const image16 = ' ';
const image17 = ' ';
const image18 = ' ';
const image19 = ' ';
const image20 = ' ';
const image21 = ' ';
const image22 = ' ';
const image23 = ' ';
const image24 = ' ';

let images_arr = [];

//inseart all images variables into an array
for (i = 1; i < 25; i++) {
    image = eval('image' + i);
    images_arr.unshift(image);
    if (images_arr[0].startsWith('./images/ca') === false) {
        images_arr.splice(0, 1);
    }
}

// shafull the images order inside the array
let length = images_arr.length;
while (length > 0) {
    let index = Math.floor(Math.random() * length);
    length -= 1;
    let temp = images_arr[length];
    images_arr[length] = images_arr[index];
    images_arr[index] = temp;
}

//place images_arr to board
class Board {
    constructor() {
        let cols = $('.col-3');
        for (let i = 0; i < images_arr.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', images_arr[i]);
            let col = cols[i];
            col.append(img);
        }
    }
}

const board = new Board();