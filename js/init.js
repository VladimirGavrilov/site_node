$(function () {

	var r = Raphael('map', 1050, 1050),
		attributes = {
			fill: '#ccc',
			stroke: '#3899E6',
			'stroke-width': 1,
			'stroke-linejoin': 'round'
		},
		arr = new Array();
	arrCountPlayer = ['portugal', 'spain', 'belgium', 'italy', 'belarus', 'poland', 'finland', 'germany', 'sweden', 'turkey', 'gb', 'switzerland', 'austria', 'czech', 'slovakia', 'nungary', 'france', 'denmark', 'russia'];

	for (var country in paths) {
		if (arrCountPlayer.indexOf(country) === -1) {
		// страны не участвующие 	
		var obj = r.path(paths[country].path);

		obj.attr(attributes);
			
		arr[obj.id] = country;
//  событие hover
		obj.hover(function () {
			this.animate({
				fill: '#f4a900'
			}, 300);
		}, function () {
			this.animate({
				fill: attributes.fill
			}, 300);
		});
		obj.click(function () {
			document.location.hash = arr[this.id];
			// меняем адрес документа (после #)
			var point = this.getBBox(0);
			// возвращает размер элемента
			$('#map').next('.point').remove();
			$('#map').after($('<div />').addClass('point'));
			// удаляем существующий div с классом point и создаём ещё один
			$('.point')
				.html(paths[arr[this.id]].name)
				.append($('<img />').attr('src', 'flags/' + arr[this.id] + '.png'))
				.prepend($('<h5> I do not play!<h5/>'))
				.prepend($('<a />').attr('href', '#').addClass('close').text('Close'))				
				.css({
					left: point.x + (point.width / 2) - 80,
					top: point.y + (point.height / 2) - 20
				})
				.fadeIn();
			// добавляем контент (название страны, рисунок и кнопку закрытия),
			// задаём позицию и показваем элемент
		});
//обработчик для кнопки «закрыть»
		$('.point').find('.close').live('click', function () {
			var t = $(this),
				parent = t.parent('.point');
			parent.fadeOut(function () {
				parent.remove();
			});
			return false;
		});




	}else{
			var obj = r.path(paths[country].path);

			obj.attr(attributes);

			arr[obj.id] = country;
			//  событие hover
			obj.hover(function () {
				this.animate({
					fill: '#1669AD'
				}, 300);
			}, function () {
				this.animate({
					fill: attributes.fill
				}, 300);
			});
			obj.click(function () {
				document.location.hash = arr[this.id];
				// меняем адрес документа (после #)
				var point = this.getBBox(0);
				// возвращает размер элемента
				$('#map').next('.point').remove();
				$('#map').after($('<div />').addClass('point'));
				// удаляем существующий div с классом point и создаём ещё один
				$('.point')
					
					.html(paths[arr[this.id]].name)

					.prepend($('<a />').attr('href', '#').addClass('close').text('Close'))
					.prepend($('<img />').attr('src', 'flags/' + arr[this.id] + '.png'))
					.prepend($('<a href="myform.html" class="button button-red">"Support the team!>"</a>'))
					
					 .css({
						left: point.x + (point.width / 2) - 80,
						top: point.y + (point.height / 2) - 20
					})
					.fadeIn();
				// добавляем контент (название страны, рисунок и кнопку закрытия),
				// задаём позицию и показваем элемент
			});
			//обработчик для кнопки «закрыть»
			$('.point').find('.close').live('click', function () {
				var t = $(this),
					parent = t.parent('.point');
				parent.fadeOut(function () {
					parent.remove();
				});
				return false;
			});



	}
}


});

getVolForm.innerHTML = 'Введите число от 1 до '+ voteMay;
