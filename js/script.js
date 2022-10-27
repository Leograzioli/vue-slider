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
            sliderPosition: 0, // initial position 
            autoPlay: "", 
            isAutoPlayDown: true,
            intervalTime: 3000
        }
    }, 
    methods: {

        //to set down the slider position
        sliderUp() {
            if(this.sliderPosition > 0)
            this.sliderPosition--
            else {
                this.sliderPosition = (this.slides.length - 1)
            }
        },

        //to set up the slider position
        sliderDown() {
            if(this.sliderPosition < this.slides.length - 1) {
                this.sliderPosition++
            } else {
                this.sliderPosition = 0
            }
        },

        //set slider position on click
        onThumbsClick(clickedIndex) {
            this.sliderPosition = clickedIndex
        },

        //to decide the direction os autoplay
        setAutoPlayDirection() {

            if (this.isAutoPlayDown) {

                this.autoPlay = setInterval(this.sliderDown, this.intervalTime); 
                
            } else if (this.isAutoPlayDown === false) {
    
                this.autoPlay = setInterval(this.sliderUp, this.intervalTime)
            } 
        },

        //to stop autoplay on mouse hover
        clearInt() {
            clearInterval(this.autoPlay)
        },

        //to revert autoplay direction
        revertAutoPlay() {
            clearInterval(this.autoPlay)
            this.isAutoPlayDown = !this.isAutoPlayDown
            this.setAutoPlayDirection()
        }

    },
    created: function() {
        this.setAutoPlayDirection()
    }

}).mount("#app")