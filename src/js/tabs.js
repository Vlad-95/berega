$(document).ready(function () {
    $('.tabs-wrap').on('click', '.tabs-item:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs-wrap__sidebar').siblings('.tabs-wrap__content').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
        })
});