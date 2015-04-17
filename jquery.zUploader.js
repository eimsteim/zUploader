(function($){
	$.fn.zUploader = function(options){
		
		var defaults = {
			'title':'Choose File'
		};

		var settings = $.extend(defaults, options);

		var dom_file_chooser = $('<div></div>'),
			dom_file_name = $('<input type="text"></input>'),
		    dom_file_real = $('<input></input>');

		dom_file_chooser.addClass('btn').text(settings.title);
		dom_file_name.attr({
			id: 'file_name'
		}).css({
			width: '80px',
			height: '28px',
			'line-height': '28px',
			'margin-left': '5px'
		});

		dom_file_real.attr({
			id: 'file_input',
			type: 'file'
		}).addClass('manual-file-chooser');

		dom_file_chooser.append(dom_file_real);

		this.append(dom_file_chooser);
		dom_file_chooser.after(dom_file_name);

		dom_file_real.change(function(event) {
			//console.log(dom_file_real.val());
			var fileName = dom_file_real.val().split("\\").pop();
			// alert(fileName);
			dom_file_name.val(fileName);
		});



		return this;
	}

})(jQuery);