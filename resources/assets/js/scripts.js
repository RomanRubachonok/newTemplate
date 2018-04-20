require('jquery-menu-aim');

// All munu aim
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
    $submenu.css({
        border: "1px solid red"
    });
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
