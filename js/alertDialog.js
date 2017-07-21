(function($,window,document){
    var pluginName = 'alertDialog';
    var defaults = {
        'width': '360',
        'height':'250',
        'msg':'登录成功',
        'icon': 'info',
        'btnName':'关闭'
    };
    
    var Mydialog = function(options){
        this.settings = $.extend({}, defaults, options);
        this.defaults = defaults;
    };
    
    Mydialog.prototype = {
        init : function(){
            var that = this;
            
            var $body = $(document.body);
            $body.append("\
				<div class='overlay'>\
    				<div class='dialog'>\
        				<div class='dialog-head'>\
            				<span>" +"提示"+ "</span>\
            				<i class='fa fa-remove' aria-hidden='true'></i>\
        				</div>\
        				<div class='dialog-content'>\
        				</div>\
        				<div class='dialog-footer'>\
        				</div>\
    				</div>\
				</div>");
            var $dialog = $('.overlay .dialog');
            $dialog.css({
                'width' : that.settings.width,
                'height': that.settings.height,
                'margin-top':-that.settings.height/2,
                'margin-left':-that.settings.width/2
            });
            
            var $content = $('.overlay .dialog .dialog-content');
            var $p = $('<p>'+that.settings.msg+'</p>');
            var $icon = $(this.getIcon(that.settings.icon));
            
            $content.append($icon);
            $content.append($p);
            $p.css('margin-top', ($content.height()-$p.height())/2);
            $icon.css('margin-top', ($content.height()-$icon.height())/2);
            
            var $footer = $('.dialog .dialog-footer');
            var $btn = $('<button>' + that.settings.btnName + '</button>');
            $footer.append($btn);
            
            $btn.on('click',function(){//点击“关闭”移除弹窗
            	$('.overlay').remove();
            });
            
            $('.dialog-head .fa-remove').on('click',function(){
            	$('.overlay').remove();
            });
        },
        getIcon:function(type){
            switch(type){
                case 'success':
                    return '<i class="fa fa-check-circle-o " aria-hidden="true"></i>';
                case 'error':
                    return '<i class="fa fa-times-circle-o " aria-hidden="true"></i>';
                case 'info':
                    return '<i class="fa fa-info-circle " aria-hidden="true"></i>';
            }
        }
    };
    
    $.fn.Mydialog = function(opt){
        var mydialog = new Mydialog(opt);
        
        mydialog.init();
    };
}(jQuery,window,document));