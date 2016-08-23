require.config({
    paths:{
        "jquery":"../lib/jquery-3.0.0.min",
        "template":"../lib/template-native",
        "fastclick":"../lib/fastclick",
        'swiper':"../lib/swiper.jquery",
        "iscroll":"../lib/iscroll5"
    }
})

require(['fastclick','jquery','iscroll','template','fastclick','../js/index','../js/Recipes'],function(fc,$){
    fc.attach(document.body);        
})