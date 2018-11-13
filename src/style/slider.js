$(document).ready(function() {
    var slider = $("#priceSlider")[0];
    noUiSlider.create(slider, {
        start: [0, 1500],
        connect: true,
        step: 1,
        orientation: 'horizontal',
        range: {
            'min': 0,
            'max': 1500
        },
        format: wNumb({
        decimals: 0
        })
    });
});
