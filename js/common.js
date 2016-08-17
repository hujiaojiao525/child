define([],function(){
    return {
        _href:function(){
            $(".index-footer").on("click",'div',function(){
                var id = $(this).attr('data-id');
                console.log(id);
                if(id == "index-home"){
                    location.href = "html/index-home.html";
                }else if(id == "index-Recipes"){
                    location.href = "html/Recipes.html";
                }else if(id == "index-community"){
                    location.href = "html/community.html";
                }else if(id == "index-my"){
                    location.href = "html/my.html";
                }
                     
            })
        }
    }
})