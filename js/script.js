const app = new Vue({
    el: '#app',
    data: {
        autoPlay: null,
        activeIndex: 0,
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

    },
    methods: {

        functionNext: function () {
            console.log("next");
            if (this.activeIndex === this.slides.length - 1){
                this.activeIndex = 0;
            }else{
                this.activeIndex++;
            }
        },
        functionPrev: function () {
            console.log("prev");
            if (this.activeIndex === 0){
                this.activeIndex = this.slides.length - 1;
            }else{
                this.activeIndex--;
            }
        },
        functionChangeImgActiveTo: function(indexToBeChanged){
            this.activeIndex = indexToBeChanged;
        },
        functionStartAutoplay: function(){
            // ! la funzione anonima ci ha dato problemi, il this.function next riporta al window
            // ? soluzioni? >= oppure creare una const che eredita il this precedente e usare tale const
            const thisByMe = this;
            this.autoPlay = setInterval(() => {
                thisByMe.functionNext();
            }, 1000);
        },
        functionStopAutoplay: function(){
            clearInterval(this.autoPlay);
            this.autoPlay = null;
        },
    },

    created(){
        // ! viene eseguito una volta solo dopo il reload
        this.functionStartAutoplay()
    },
})