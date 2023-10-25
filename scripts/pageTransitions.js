  $(document).ready(function() {
    smoothLoad();

    function smoothLoad(){
      let bufferTime = 250;
      let bufferTime2 = 2000;
      setTimeout(function() { 
          $("#LayoutOuter").attr("data-hidden", "false");
          setTimeout(function() { 
              $("#LayoutOuter").attr("data-hidden", "animationEnded");
          }, bufferTime2);
      }, bufferTime);
    }

    function pageTransition(url, delay){
      console.log("page-transition: " + url + " | "+ delay);
      router.prefetch(url); //prefetch next page
      setTimeout(function() { 
        $("#LayoutOuter").attr("data-hidden", "true"); //page transition
        setTimeout(function() { 
          router.push(url); //move user to next page
        }, 250); //allow time for page transition
      }, delay); //allow time for element animations
    } //END pageTransition function

    let url = "";
    let delay = 1000;

    $("[data-page-transition]").click(function(){
      console.log("data-page-transition click");
      url = $(this).attr("data-page-transition");
      delay = $(this).attr("data-delay");
      pageTransition(url, delay);
    }); 

    $("[data-page-back]").click(function(){
      console.log("data-page-back click");
      window.history.back()
      /*url = window.history.back();
      delay = 0;
      console.log(url);
      pageTransition(url, delay);*/
    }); 

  });

});