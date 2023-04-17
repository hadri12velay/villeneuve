const container = document.getElementById("worksGallery");
container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        container.scrollLeft += 50;
        e.preventDefault();
    }
    else {
        container.scrollLeft -= 50;
        e.preventDefault();
    }
});

var descriptionShown = '';
$('.worksImage').click( function() {
    $('.worksDescription').each(function() {
        $(this).removeClass("notHidden");
    });
    if(descriptionShown != $(this).attr("id")) {
        let desc = '[movie="' + $(this).attr("id") + '"]';
        console.log(desc);
        $(desc).toggleClass("notHidden");
        descriptionShown = $(this).attr("id");
        
    } else {
        descriptionShown = '';
    }
});

