webpackJsonp(["app/js/course-manage/index"],{d14d05cad9e7abf02a5d:function(e,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.chapterAnimate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-task-chapter",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"es-icon-remove",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"es-icon-anonymous-iconfont";$(e).on("click",s,function(e){var n=$(e.currentTarget);n.nextUntil(s).animate({height:"toggle",opacity:"toggle"},"normal");var i=n.find(".js-remove-icon"),o=n.find(".js-remove-text");i.hasClass(t)?(i.removeClass(t).addClass(a),o?o.text(Translator.trans("收起")):""):(i.removeClass(a).addClass(t),o?o.text(Translator.trans("展开")):"")})}},"4e68e437f5b716377a9d":function(e,s,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0}),s.TaskListHeaderFixed=s.updateTaskNum=s.TabChange=s.showSettings=s.unpublishTask=s.publishTask=s.deleteTask=s.publishCourse=s.deleteCourse=s.closeCourse=s.taskSortable=s.sortablelist=void 0;var n=t("b334fd7e4c5a19234db2"),i=a(n),o=t("8f840897d9471c8c1fbd"),r=a(o),d=s.sortablelist=function(e){var s=$(e),t=s.sortable("serialize").get();$.post(s.data("sortUrl"),{ids:t},function(e){var t=0,a=0,n=0;s.find(".task-manage-item").each(function(){var e=$(this);e.hasClass("js-task-manage-item")?(t++,e.find(".number").text(t)):e.hasClass("task-manage-unit")?(n++,e.find(".number").text(n)):e.hasClass("task-manage-chapter")&&(a++,n=0,e.find(".number").text(a))}),s.trigger("finished")})};s.taskSortable=function(e){$(e).length&&(0,r.default)({element:e,ajax:!1},function(s){d(e)})},s.closeCourse=function(){$("body").on("click",".js-close-course",function(e){var s=$(e.currentTarget);confirm(Translator.trans("是否确定关闭该教学计划？"))&&$.post(s.data("check-url"),function(e){e.warn&&!confirm(Translator.trans(e.message))||$.post(s.data("url"),function(e){e.success?((0,i.default)("success","关闭成功"),location.reload()):(0,i.default)("danger","关闭失败："+e.message)})})})},s.deleteCourse=function(){$("body").on("click",".js-delete-course",function(e){confirm(Translator.trans("是否确定删除该教学计划？"))&&$.post($(e.currentTarget).data("url"),function(e){e.success?((0,i.default)("success","删除成功"),location.reload()):(0,i.default)("danger","删除失败："+e.message)})})},s.publishCourse=function(){$("body").on("click",".js-publish-course",function(e){confirm(Translator.trans("是否确定发布该教学计划？"))&&$.post($(e.target).data("url"),function(e){e.success?((0,i.default)("success","发布成功"),location.reload()):(0,i.default)("danger","发布失败："+e.message,5e3)})})},s.deleteTask=function(){$("body").on("click",".delete-item",function(e){if("task"==$(e.currentTarget).data("type")){if(!confirm(Translator.trans("是否确定删除该任务吗？")))return}else if("chapter"==$(e.currentTarget).data("type")&&!confirm(Translator.trans("是否确定删除该章节吗？")))return;$.post($(e.currentTarget).data("url"),function(s){s.success?((0,i.default)("success","删除成功"),$(e.target).parents(".task-manage-item").remove(),d("#sortable-list"),$("#sortable-list").children("li").length<1&&$(".js-task-empty").hasClass("hidden")&&$(".js-task-empty").removeClass("hidden")):(0,i.default)("danger","删除失败："+s.message)})})},s.publishTask=function(){$("body").on("click",".publish-item",function(e){$.post($(e.target).data("url"),function(s){if(s.success){var t=$(e.target).closest(".task-manage-item");(0,i.default)("success","发布成功"),$(t).find(".publish-item").addClass("hidden"),$(t).find(".delete-item").addClass("hidden"),$(t).find(".unpublish-item").removeClass("hidden"),$(t).find(".publish-status").addClass("hidden")}else(0,i.default)("danger","发布失败："+s.message)})})},s.unpublishTask=function(){$("body").on("click",".unpublish-item",function(e){$.post($(e.target).data("url"),function(s){if(s.success){var t=$(e.target).closest(".task-manage-item");(0,i.default)("success","取消发布成功"),$(t).find(".publish-item").removeClass("hidden"),$(t).find(".delete-item").removeClass("hidden"),$(t).find(".unpublish-item").addClass("hidden"),$(t).find(".publish-status").removeClass("hidden")}else(0,i.default)("danger","取消发布失败："+s.message)})})},s.showSettings=function(){$("#sortable-list").on("click",".js-item-content",function(e){var s=$(e.currentTarget),t=s.closest(".js-task-manage-item");t.hasClass("active")?t.removeClass("active").find(".js-settings-list").stop().slideUp(500):(t.addClass("active").find(".js-settings-list").stop().slideDown(500),t.siblings(".js-task-manage-item.active").removeClass("active").find(".js-settings-list").hide())})},s.TabChange=function(){$('[data-role="tab"]').click(function(e){var s=$(this);$(s.data("tab-content")).removeClass("hidden").siblings('[data-role="tab-content"]').addClass("hidden")})},s.updateTaskNum=function(e){var s=$(e);s.on("finished",function(){$("#task-num").text($(e).find('i[data-role="task"]').length)})},s.TaskListHeaderFixed=function(){var e=$(".js-task-list-header");if(e.length){var s=e.offset().top;$(window).scroll(function(t){$(window).scrollTop()>=s?e.addClass("fixed"):e.removeClass("fixed")})}}},0:function(e,s,t){"use strict";var a=t("4e68e437f5b716377a9d"),n=t("d14d05cad9e7abf02a5d");$('[data-help="popover"]').popover();var i="#sortable-list";(0,a.taskSortable)(i),(0,a.updateTaskNum)(i),(0,a.closeCourse)(),(0,a.deleteCourse)(),(0,a.deleteTask)(),(0,a.publishTask)(),(0,a.unpublishTask)(),(0,a.showSettings)(),(0,a.TaskListHeaderFixed)(),$(".js-batch-add").hover(function(){$(".js-batch-add").popover("show")}),(0,n.chapterAnimate)("#sortable-list",".js-task-manage-chapter","es-icon-keyboardarrowdown","es-icon-keyboardarrowup")}});