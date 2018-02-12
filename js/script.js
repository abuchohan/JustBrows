//putting all javascript in this function so it runs after page elements are loaded. otherwise it returns null
window.onload = function() {

//making window scrol a variable
var scrollPos = window.scrollY;

//getting navigation in a variable
var navigation = document.getElementById("dynamic-wrapper");


//function to add a class
function addClass() {
    navigation.classList.add("dynamic-nav");
}
    
// function to remove class
function removeClass() {
    navigation.classList.remove("dynamic-nav");
}

//event listener on when page is srolled add the class
window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;
        if (scrollpos > 50) {
            addClass();
}       else {
            removeClass();
} } );




function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}

function doScrolling(element, duration) {
  var startingY = window.pageYOffset
  var elementY = getElementY(element)
    // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
  var diff = targetY - startingY
    // Easing function: easeInOutCubic
    // From: https://gist.github.com/gre/1650294
  var easing = function(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }
  var start

  if (!diff) return

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
      // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
      // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
      // Apply the easing.
      // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

//getting document trigger. then using function to sroll to element with the given time
document.getElementById('downArrow').addEventListener('click', doScrolling.bind(null, '#content', 1500))
    

    // back to top button
    //document.getElementById('scrollTop').addEventListener('click', doScrolling.bind(null, '#navigation', 500))

    

    
//debug
console.log(scrollPos);
console.log(navigation);    
    
    }




// google maps embed https://developers.google.com/maps/documentation/javascript/adding-a-google-map

function initMap() { var uluru = {lat: 51.753211, lng: 0.092005}; var map = new google.maps.Map(document.getElementById('map'), { zoom: 15, center: uluru }); var marker = new google.maps.Marker({ position: uluru, map: map }); }


