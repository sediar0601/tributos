$(document).ready(() => {

    var about_us_paragraph_visible = false;
    var btn_about_us_paragraph_visible = $("#btn-about-us-paragraph-visible")
    $(btn_about_us_paragraph_visible).click(function () {
        let objs_no_visible = $("#about-us-paragraph-no-visible-1").add($("#about-us-paragraph-no-visible-2"))
        if (!about_us_paragraph_visible) {
            objs_no_visible.slideDown(400).removeClass("no-visible").addClass("visible-block")
            $("#about-us-figure-img-no-visible").slideDown(400)
            btn_about_us_paragraph_visible.css({
                "margin-left": "calc(100% - 150px)",
                "background": "#03af6d"
            })
            $(".about-us-title-box").css({
                "border-bottom": "3px solid #03af6d"
            })
            about_us_paragraph_visible = true
        } else {
            objs_no_visible.removeClass("visible-block").slideUp(400).addClass("no-visible")
            $("#about-us-figure-img-no-visible").slideUp(400)
            btn_about_us_paragraph_visible.css({
                "margin-left": "0",
                "background": "#0353af"
            })
            $(".about-us-title-box").css({
                "border-bottom": "3px solid #0353af"
            })
            about_us_paragraph_visible = false
        }
    })

    var menu_is_open = false
    var btn_menu = $("#btn-menu")
    var aside = $("aside")
    btn_menu.click(() => {
        if (!menu_is_open) {
            btn_menu.removeClass("icon-menu").addClass("icon-cross").css({ "transform": "rotate(360deg)" })
            aside.css({ "left": "0" })
            menu_is_open = true
        } else {
            btn_menu.removeClass("icon-cross").addClass("icon-menu").css({ "transform": "rotate(0deg)" })
            aside.css({ "left": "-100%" })
            menu_is_open = false
        }
    })

    var items_menu = $(".menu-list li")

    items_menu.click(() => {
        if (menu_is_open) {
            aside.css({ "left": "-100%" })
            btn_menu.removeClass("icon-cross").addClass("icon-menu").css({ "transform": "rotate(0deg)" })
            menu_is_open = false
        }
    })

    $(window).scroll(() => {
        if (menu_is_open) {
            aside.css({ "left": "-100%" })
            btn_menu.removeClass("icon-cross").addClass("icon-menu").css({ "transform": "rotate(0deg)" })
            menu_is_open = false
            position_scroll = scroll;
        }
    });

    var seminar_diplomat_btn_see_more = $(".seminar-diplomat-list-item-title-see-more")
    seminar_diplomat_btn_see_more.click(function () {

        let li_father = $(this).closest("li")
        let sub_list = li_father.children("ul")
        let btn_see_more = li_father.children(".seminar-diplomat-list-item-title-see-more")
        let btn_see_more_class = btn_see_more.attr("class")

        let item_is_active = btn_see_more_class === "seminar-diplomat-list-item-title-see-more active"

        if (!item_is_active) {
            sub_list.slideDown(300)
            btn_see_more.addClass("active")
            li_father.addClass("seminar-diplomat-list-item-active")
        } else {
            sub_list.slideUp(300)
            btn_see_more.removeClass("active")
            li_father.removeClass("seminar-diplomat-list-item-active")
        }
    })

    var seminar_diplomat_btn_see_more = $(".seminar-diplomat-list-item-sublist-item-diplomat-subitems-title-see-more")
    seminar_diplomat_btn_see_more.click(function () {

        let li_father = $(this).closest("li")
        let subitems_list = li_father.children(".seminar-diplomat-list-item-sublist-item-diplomat-subitems")
        let btn_see_more = li_father.children(".seminar-diplomat-list-item-sublist-item-diplomat-subitems-title").children(".seminar-diplomat-list-item-sublist-item-diplomat-subitems-title-see-more")
        let btn_see_more_class = btn_see_more.attr("class")
        let item_is_active = btn_see_more_class === "seminar-diplomat-list-item-sublist-item-diplomat-subitems-title-see-more active"

        if (!item_is_active) {
            subitems_list.slideDown(300)
            btn_see_more.addClass("active")
        } else {
            subitems_list.slideUp(300)
            btn_see_more.removeClass("active")
        }
    })

})