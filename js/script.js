const {createApp} = Vue;

createApp({
    data() {
        return {

            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
            sliderPosition: 0,
            autoPlay: "",
            mouseHover: false
        }
    }, 
    methods: {
        sliderUp() {
            if(this.sliderPosition > 0)
            this.sliderPosition--
            else {
                this.sliderPosition = 4
            }
        },
        sliderDown() {
            if(this.sliderPosition < this.slides.length - 1) {
                this.sliderPosition++
            } else {
                this.sliderPosition = 0
            }
        },
        onThumbsClick(clickedIndex) {
            this.sliderPosition = clickedIndex
        },


    },
    created: function () {
        
        if (this.mouseHover === false) {
            this.autoPlay = setInterval(() => {

                if(this.sliderPosition < this.slides.length - 1) {
                    this.sliderPosition++
                } else {
                    this.sliderPosition = 0
                }
            }, 3000); 
        } else {
             clearInterval(this.autoPlay);
        }
    }
    
}).mount("#app")