class Game {
    constructor() {
        this.board = new Board();
        this.new_game();
        $('.btn-outline-primary').click(() => this.new_game());
        this.card1;
        this.card2;
        this.firstevent;
        this.image = $('img');
        this.cards_event();
    }

    //creats clean board ready to play
    new_game() {
        this.card_counter = 0;
        this.match_pair = 0;
        this.board.clear_board();
    }

    //add eventlistener to all cards
    cards_event() {
        for (let i = 0; i < this.board.cols.length; i++) {
            this.board.cols[i].addEventListener('click', (e) => {
                this.flip_card_to_img(e);
            });
        }
    }

    //check if 2 card flipped are a match or not
    check_flipped_cards(event) {
        this.card_counter++; //count how many cards flipped (start from zero)
        //first card flipped
        if (this.card_counter < 2) {
            this.card1 = event.target.src.slice(event.target.src.search('s/') + 2).replace(/\d+/, ''); //take from terget src name of image (clean path till after images folder + remove numbers)
            this.firstevent = event; //save the first event of first card flipped
            //secound time flipped
        } else {
            this.card2 = event.target.src.slice(event.target.src.search('s/') + 2).replace(/\d+/, ''); //take from terget src name of image (clean path till after images folder + remove numbers)
            //check cards do match
            if (this.card1 == this.card2) {
                this.check_match_won();
                //cards not match
            } else {
                for (let i = 0; i < this.board.cols.length; i++) {
                    this.board.cols[i].classList.add('not_clickable');
                }
                setTimeout(() => {
                    this.flip_img_to_card(event);
                    this.flip_img_to_card(this.firstevent)
                }, 2000);
            }
            this.card_counter = 0; //reset counter how many times i flipped a card
        }
    }

    check_match_won() {
        this.match_pair++; //count how many times i had paires that match
        if (this.match_pair === this.board.images_arr.length / 2) {
            $('.modal').modal(focus);
            // console.log($('close'));
            // $('close').addEventListener('click', (e) => {
            //     this.flip_card_to_img(e);
            // });
        }
    }

    flip_card_to_img(event) {
        event.target.classList.replace('not_flipped', 'flipped');
        this.check_flipped_cards(event);
    }

    flip_img_to_card(event) {
        event.target.classList.replace('flipped', 'not_flipped');
        for (let i = 0; i < this.image.length; i++) {
            this.board.cols[i].classList.remove('not_clickable');
        }
    }
}

class Board {
    constructor() {
        //images for cards
        this.image1 = './images/bibi1.jpg';
        this.image2 = './images/bibi2.jpg';
        this.image3 = './images/bogi1.jpg';
        this.image4 = './images/bogi2.jpg';
        this.image5 = './images/ganz1.jpg';
        this.image6 = './images/ganz2.jpg';
        this.image7 = './images/liberman1.jpg';
        this.image8 = './images/liberman2.jpg';
        this.image9 = './images/miri1.jpg';
        this.image10 = './images/miri2.jpg';
        this.image11 = './images/yair1.jpg';
        this.image12 = './images/yair2.jpg';
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
        this.cols = $('.col-3');
    }

    //clear board
    clear_board() {
        if (this.images_arr.length !== 0) {
            this.images_arr = [];
            this.cols.empty();
        }
        this.images_into_array();
    }

    //inseart all images variables into an array
    images_into_array() {
        for (let i = 1; i < 25; i++) {
            let image = eval('this.image' + i);
            this.images_arr.unshift(image);
            if (this.images_arr[0].startsWith('./images/') === false) {
                this.images_arr.splice(0, 1);
            }
        }
        this.shafull_images();
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
        this.attach_image_to_card();
    }

    //place images_arr to cards
    attach_image_to_card() {
        for (let i = 0; i < this.images_arr.length; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', this.images_arr[i]);
            let col = this.cols[i];
            col.append(img);
            img.classList.add('not_flipped');
            // img.classList.add('clickable');
        }
    }
}
const game = new Game();