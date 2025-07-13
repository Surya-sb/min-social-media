const carousel = document.getElementById("carousel");
const itemWidth = carousel.offsetWidth;
const mprofile = document.getElementById("mprofilesec");

function scrollCarousel(direction) {
  carousel.scrollLeft += direction * itemWidth;
}

// data fetch for stories

fetch("log.json")
  .then((get) => get.json())
  .then((got) => {
    got.stories.map((i) => {
      carousel.innerHTML += `
           <button>
                <div class="carousel-div">
                    <div class="carousel-item-info" style="background-image: url('${i.img}')"></div>
                    <p class="carousel-user" style="text-align: center;">${i.name}</p>
                </div> 
            </button>`;
 
            if( `${i.id}` < 5){

                mprofile.innerHTML += `
                      <button>
                          <div class="profile-div">
                            <div class="profile-info"></div>
                            <p class="puser-name">${i.name}</p>
                            <hr>
                          </div>
                      </button>
                      `;
            }

        
            
    });
  });
