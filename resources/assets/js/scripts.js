require('jquery-menu-aim');

// All menu aim
var $menuAbove = $(".nav-aim-above"),
    $menuRight = $(".nav-aim-right"),
    timer = null;

$menuAbove.menuAim({
    activate: activateSubmenu,
    deactivate: deactivateSubmenu,
    submenuDirection: "above",
    exitMenu: function (nav) {
        timer = setTimeout(() => {
            $(".sub-navigation").addClass("hide");
            $(".sub-navigation").removeClass("show");
            $(nav).trigger("mouseleave");
        }, 500);
        return ($('.sub-navigation.show').length > 0) ? false : true;
    },
});

$menuRight.menuAim({
    activate: activateSubmenu,
    deactivate: deactivateSubmenu,
    submenuDirection: "right",
});

function activateSubmenu(row) {
    var $row = $(row),
        submenuId = $row.data("submenuId"),
        $submenu = $("#" + submenuId);

    clearTimeout(timer);
    $row.addClass("active");
    $submenu.addClass("show");
    $submenu.removeClass("hide");
}

function deactivateSubmenu(row) {
    var $row = $(row),
        submenuId = $row.data("submenuId"),
        $submenu = $("#" + submenuId);

    clearTimeout(timer);
    $row.removeClass("active");
    $submenu.addClass("hide");
    $submenu.removeClass("show");
}

$(".sub-navigation").mouseover(function () {
    clearTimeout(timer);
});
$(".sub-navigation").mouseleave(function () {
    $(".sub-navigation").addClass("hide");
    $(".sub-navigation").removeClass("show");
    $('[data-submenu-id="' + $(this).attr('id') + '"]').parent().trigger("mouseleave");
});


// Product description collapse
let productDesc = '.product-desc',
    productDescBtn = '.product-desc-more',
    $productDesc = $(productDesc),
    $productDescBtn = $(productDescBtn);

$productDesc.on('hidden.bs.collapse hide.bs.collapse', function () {
    $height = $(this).css('min-height');
    $(this).css({
        'overflow': 'hidden',
        'height': $height
    });
})

$productDesc.collapse().collapse('hide');
$productDescBtn.click(function () {
    $(this).toggleClass('in').siblings(productDesc).collapse('toggle');
});
// AND Product description collapse


// Product reviews collapse
let productReviews = '.product-reviews-wrap',
    productReviewsBtn = '.product-reviews-more',
    $productReviews = $(productReviews),
    $productReviewsBtn = $(productReviewsBtn);

$productReviews.on('hidden.bs.collapse hide.bs.collapse', function () {
    $height = $(this).css('min-height');
    $(this).css({
        'overflow': 'hidden',
        'height': $height
    });
})

$productReviews.collapse().collapse('hide');
$productReviewsBtn.click(function () {
    $(this).toggleClass('in').siblings(productReviews).collapse('toggle');
});
// AND Product reviews collapse
