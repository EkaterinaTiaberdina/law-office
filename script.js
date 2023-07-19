gsap.registerPlugin(ScrollTrigger);

gsap.from('.item', {
    y: 50,
    duration: 1.2,
})
gsap.from('.section-header-image', {
    y: 80,
    duration: 1.5,
    ease: 'bounce',
})
gsap.from('.heading', {
    scrollTrigger: {
        trigger: '.heading',
        start: '20px 80%',
    },
    x: -150,
    duration: 1.5,
    opacity: 0,
})
gsap.from('.about-us', {
    scrollTrigger: {
        trigger: '.about-us',
        start: '20px 80%',
    },
    y: -50,
    duration: 1.5,
    opacity: 0,
    stagger: 1,
})

function animation () {
    const tlCallUsNowBtn = gsap.timeline({defaults: {duration: .5, repeat: -1, repeatDelay: 3}});
    tlCallUsNowBtn.to('button', {rotate: 10});
    tlCallUsNowBtn.to('button', {rotate: -10});
    tlCallUsNowBtn.to('button', {rotate: 10});
    tlCallUsNowBtn.to('button', {rotate: 0});
    return tlCallUsNowBtn;
}
animation();

gsap.from('h2', {
    scrollTrigger: {
        trigger: '.reason-block',
        start: '20px 80%',
    },
    y: -40,
    duration: 1.8,
    opacity: 0,
})
gsap.from('.reason-block-text', {
    scrollTrigger: {
        trigger: '.reason-block',
        start: '20px 80%',
    },
    y: -30,
    duration: 1.2,
    opacity: 0,
})