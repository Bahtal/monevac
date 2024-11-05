ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
					center: [49.511145, 58.318783],
					zoom: 5,
					controls: []
			}, {
					suppressMapOpenBlock: true,
					searchControlProvider: 'yandex#search'
			});

			

			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark = new ymaps.Placemark([55.751137, 37.620780], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],
					iconImageOffset: [-5, -38]
			}),

			myPlacemarkVoroneg = new ymaps.Placemark([51.672016, 39.203689], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],

			});

			myPlacemarkVolgograd = new ymaps.Placemark([48.704940, 44.500097], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],

			});

			myPlacemarkErevan = new ymaps.Placemark([40.177734, 44.512788], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],

			});

			myPlacemarkKrasnodar = new ymaps.Placemark([45.035981, 38.975954], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],

			});

			myPlacemarkSaratov = new ymaps.Placemark([51.539173, 46.030849], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],

			});

			myPlacemarkNovosibirsk = new ymaps.Placemark([55.030737, 82.926493], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40]

			});

	myMap.geoObjects
			.add(myPlacemark)
			.add(myPlacemarkVoroneg)
			.add(myPlacemarkVolgograd)
			.add(myPlacemarkErevan)
			.add(myPlacemarkKrasnodar)
			.add(myPlacemarkSaratov)
			.add(myPlacemarkNovosibirsk)
});

