
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const nextBtn = $('.container-slider__btn-1')
const preBtn = $('.container-slider__btn')

const img = $('.img-grap')
const img1 = $('.img-grap1')
const numberRun = $$('.popular-tours__contain')

var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
 
var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

const app = {
    sliderIndex : 0,
    slider : [
        {
            img: './assets/img/img1.jpg',
            img1: './assets/img/img1-2.jpg'
        },
        {
            img: './assets/img/img2.jpg',
            img1: './assets/img/img2-2.jpg'
        },
        {
            img: './assets/img/img3.jpg',
            img1: './assets/img/img3-2.jpg'
        }
    ],

    handleEvent : function(){
        _this = this

        // xử lý nút next trong slider
        nextBtn.addEventListener('click', function(){         
            _this.nextSlider()
            img.innerHTML = `<img src="${_this.slider[_this.sliderIndex].img}" alt="" class="container-slider__img">`
            img1.innerHTML = `<img src="${_this.slider[_this.sliderIndex].img1}" alt="" class="container-slider__img container-slider__img-mb"></img>`
        })
        // xử lý nút pre trong slider

        preBtn.addEventListener('click', function(){         
            _this.preSlider()
            img.innerHTML = `<img src="${_this.slider[_this.sliderIndex].img}" alt="" class="container-slider__img">`
            img1.innerHTML = `<img src="${_this.slider[_this.sliderIndex].img1}" alt="" class="container-slider__img container-slider__img-mb"></img>`
        })

        let dem = 0

        // Xử lý thanh ngang chạy slider
        document.onscroll = function(){
            if(dem == 0 && window.scrollY >= window.scrollY + document.querySelector('.position-js').getBoundingClientRect().top - height*4/5)
            { 
                // lấy data
                dem++
                numberRun.forEach(function(number,index)
                {
                    number.style.width = `${Number(number.getAttribute('data'))}%`
                    
                })

            }
        }
        
    },

    nextSlider: function()
    {     
        this.sliderIndex++
        if(this.sliderIndex >= this.slider.length)
        {
            this.sliderIndex = 0
        }
    },

    preSlider: function()
    {
        this.sliderIndex--
        if(this.sliderIndex < 0)
        {
            this.sliderIndex = this.slider.length - 1
        }
    },

    viewport: function(){
        
    },


    start : function(){

        this.handleEvent()

        console.log(this.sliderIndex)

    }
}

app.start()

