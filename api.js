
load = function (){
    $("#card-img").attr("src","loading.svg");
    console.log($("#card-id").val())
    $.ajax({
        url: "https://api.pokemontcg.io/v2/cards/" + $("#card-id").val(),
        type: "GET",
        contentType: "application/json",
        dataType: 'json',
        headers: { "X-Api-Key": "0c6c868c-aac8-4f14-8854-87a82b1dc78d" },
        success: function(result){
            console.log(result.data.images.small);
            let img_url = result.data.images.small;
            $("#card-img").attr("src",img_url);
        },
        error: function(error){
            console.log("Error:");
            console.log(error);
        }
    });
};

preview = function (){
    $.ajax({
        url: "https://api.pokemontcg.io/v2/cards/" + $("#card-id").val(),
        type: "GET",
        contentType: "application/json",
        dataType: 'json',
        headers: { "X-Api-Key": "0c6c868c-aac8-4f14-8854-87a82b1dc78d" },
        success: function(result){
            console.log(result.data.images.large);
            let img_url = result.data.images.large;
            $("#card-img-max").attr("src",img_url);
        },
        error: function(error){
            console.log("Error:");
            console.log(error);
        }
    });
};


$("#card-img").mouseover(preview());