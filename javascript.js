
      function loadimage(image){
        var domparser=new DOMParser();
        $.ajax({
          url: "https://cors-anywhere.herokuapp.com/https://www.google.com.ua/search?source=lnms&sa=X&gbv=1&tbm=isch&q="+image,
          success: function(result) {

            domparser=domparser.parseFromString(result,"text/html");
            // Gets DOM element with image results
                  let image = domparser.getElementsByTagName("img")[1].src;
                  //document.write(image);
                  document.getElementById("image").src=image;

          }
        });
      }
