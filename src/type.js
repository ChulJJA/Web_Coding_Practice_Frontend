'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 100,
}) // Software Engineer
.move(-17)
.type('Creative ')
.move(null, {to: 'END'})
.delete()
.type('Front-end Engineer')
.move(-9)
.delete(9)
.type('Back-end')
.delete(8)
.type('Full-stack')
.move(9)
.delete()
.go();