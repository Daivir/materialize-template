// Wave effect for navbar
let buttons = $('.wave');
console.log($);
$.map(buttons, (button) => {
    let self = $(button);
    let effect = $('<div></div>', {class: 'wave-effect'});
    self.mousedown(() => {
        self.prepend(effect);
    });
    self.mouseup(() => {
        effect.remove();
    });
});