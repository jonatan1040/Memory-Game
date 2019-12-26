class Board {
    constructor() {
        //images for cards
        this.image1 = './images/ca1.jpg';
        this.image2 = './images/ca2.jpg';
        this.image3 = './images/ca3.jpg';
        this.image4 = './images/ca4.jpg';
        this.image5 = './images/ca5.jpg';
        this.image6 = './images/ca6.jpg';
        this.image7 = './images/ca7.jpg';
        this.image8 = './images/ca8.jpg';
        this.image9 = './images/ca9.jpg';
        this.image10 = './images/ca10.jpg';
        this.image11 = ' ';
        this.image12 = ' ';
        this.image13 = ' ';
        this.image14 = ' ';
        this.image15 = ' ';
        this.image16 = ' ';
        this.image17 = ' ';
        this.image18 = ' ';
        this.image19 = ' ';
        this.image20 = ' ';
        this.image21 = ' ';
        this.image22 = ' ';
        this.image23 = ' ';
        this.image24 = ' ';
        this.images_arr = [];
    }

    //inseart all images variables into an array
    images_into_array() {
        for (let i = 1; i < 25; i++) {
            let image = eval('this.image' + i);
            this.images_arr.unshift(image);
            console.log(this.images_arr);
            if (this.images_arr[0].startsWith('./images/ca') === false) {
                this.images_arr.splice(0, 1);
            }
        }
    }

    // shafull the images order inside the array
    shafull_images() {
        let length = this.images_arr.length;
        while (length > 0) {
            let index = Math.floor(Math.random() * length);
            length -= 1;
            let temp = this.images_arr[length];
            this.images_arr[length] = this.images_arr[index];
            this.images_arr[index] = temp;
        }
    }

    //place images_arr to cards
    attach_image_to_card() {
        let cols = $('.col-3');
        for (let i = 0; i < this.images_arr.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', this.images_arr[i]);
            let col = cols[i];
            col.append(img);
        }
    }
}
let board = new Board();

board.images_into_array();
board.shafull_images();
board.attach_image_to_card();