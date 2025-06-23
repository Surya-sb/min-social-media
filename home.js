    const carousel = document.getElementById('carousel');
    const itemWidth = carousel.offsetWidth;
    
    function scrollCarousel(direction) {
        carousel.scrollLeft += direction * itemWidth;
    }
    
    
    
    // data fetch for stories
    
    fetch("log.json").then((get)=> get.json()).then((got)=>{
        got.stories.map((i)=>{
            
            carousel.innerHTML += `
            <div class="carousel-div">
                <div class="carousel-item-info" style="background-image: url('${i.img}')"></div>
                <p class="carousel-user" style="text-align: center;">${i.name}</p>
                </div>`;
                
            })
        })
        