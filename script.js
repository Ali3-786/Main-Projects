gsap.from("h1" , {
    opacity:0, 
    // y:100,
    delay: 0.2,
    duration: 1,
    onStart:function(){
        $('h1').textillate({ in: { effect: 'fadeIn' } , out:{effect : 'fadeIn'} });
    }
})