require('jquery-menu-aim');

// All munu aim
var $menuAbove = $(".nav-aim-above"),
    $menuRight = $(".nav-aim-right");

$menuAbove.menuAim({
    activate: activateSubmenu,
    deactivate: deactivateSubmenu,
    submenuDirection: "above",
    // enter: function () {
    //     this.activate();
    // },
    exitMenu: function () {
        return true;
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

    $row.addClass("active");
    $submenu.addClass("show");
    $submenu.removeClass("hide");
    $submenu.css({
        border: "1px solid red"
    });
}

function deactivateSubmenu(row) {
    var $row = $(row),
        submenuId = $row.data("submenuId"),
        $submenu = $("#" + submenuId);

    $row.removeClass("active");
    $submenu.addClass("hide");
    $submenu.removeClass("show");
}


$(".sub-navigation").mouseover(function () {
    $(this).addClass("show");
    $(this).removeClass("hide");
});
$(".sub-navigation").mouseleave(function () {
    $(this).addClass("hide");
    $(this).removeClass("show");
});

// Top aim menu
// var $subNavContainer = $(".sub-navigation-container")
//     timer = null;

// $subNavContainer.on('mouseleave', function () {
//     timer = setTimeout(() => {
//         $(".top-nav").find("li").removeClass("active");
//         $(this).find(".sub-navigation").removeClass("show");
//     }, 500);
// });
// $subNavContainer.on('mouseenter', function () {
//     clearTimeout(timer);
// });
