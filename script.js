var moved_distance = 0
var switch_slide_distance = 10
var slide = 1
var total_slides = 45
$("#disk").on("pointermove",function(e){
    moved_distance += 1
    if(moved_distance % switch_slide_distance == 1){
        slide += 1
        $("#nft").attr('src',"/nfts/"+(slide%total_slides+1)+".gif")
        console.log(slide%total_slides+1)
    }
})