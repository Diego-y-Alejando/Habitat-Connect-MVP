

$(document).ready(function() {

    let parkingStickers = 0;
    let numberOfParkingStickers = 0;
    let parkingSlot = 0;
    let canAddStickers = false;

    $("#btn-add-parking-stikers").click(function(event) {
        event.preventDefault();
        if($("#btn-add-parking-stikers").hasClass("enabled")){
            canAddStickers = false;
        }else{
            canAddStickers = true;
            parkingStickers = $("#input-parking-stickers").val();
            numberOfParkingStickers++;
            console.log(parkingStickers, numberOfParkingStickers);
            addParkingStickers(numberOfParkingStickers , parkingStickers);
            $("#input-parking-stickers").val("");
        }
        
    });

    $("#btn-add-parking-slot").click(function(event) {
        event.preventDefault();
        if($("#btn-add-parking-slot").hasClass("enabled")){
            alert("NO");
        }else{
            alert("SI");
        }
    });

    

    $("#btn-edit-parking-info").click(function(event) {
        event.preventDefault();

        if($("#img-save-parking-info").hasClass("hide")){
            $("#img-edit-parking-info").addClass("hide");
            $("#img-save-parking-info").removeClass("hide");
            $("#input-parking-stickers").removeAttr("disabled");
            $("#input-parking-slot").removeAttr("disabled");
            $("#btn-add-parking-stikers").removeClass("enabled");
            $("#btn-add-parking-slot").removeClass("enabled");
        }
        else{
            
            

            if(canAddStickers){
                parkingStickers = parkingStickers + 1;
            };

            $("#img-save-parking-info").addClass("hide");
            $("#img-edit-parking-info").removeClass("hide");
            $("#input-parking-stickers").attr("disabled", "disabled");
            $("#input-parking-slot").attr("disabled", "disabled");
            $("#btn-add-parking-stikers").addClass("enabled");
            $("#btn-add-parking-slot").addClass("enabled");


            //aqui se actualizaria en BD
        }
    });

});

function addParkingStickers(numberOfParkingStickers, parkingStickers){
    console.log(numberOfParkingStickers, parkingStickers)
    let span = $("<span></span>").text(parkingStickers);
    let p = $("<p></p>").addClass("info-row gray").text(`Sticker ${numberOfParkingStickers}:`).append(span);
    $("#parking-stikers-container").append(p);
    console.log(p.text());
}