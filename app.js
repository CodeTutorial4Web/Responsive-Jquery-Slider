
$(".slider-indecator").click((e)=>{
    let imgSrc = e.target.src;
    $(".slider .main").attr("src", imgSrc);
})


$("#openNavBtn").click(()=>{
    $(".navbar ul").toggleClass("show");
})