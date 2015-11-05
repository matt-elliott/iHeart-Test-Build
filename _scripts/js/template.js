var data, template, html;

data = {
	locations : [
		{
			name : 'Melbourne',
			thumb : '_images/melborne.jpg',
			price : 'from 1400$',
		},
		{
			name : 'Chicago',
			thumb :	'_images/chicago.jpg',
			price : 'from 900$',
		},
		{
			name : 'Westminster',
			thumb : '_images/westminster.jpg',
			price : 'from 1200$',
		},
	],
	text : 'Fermentum tortor non enim aliquet mauris del condimentum. Nam aliquam pretium duis sem feugiat condimentum mauris sem.',
};

template = '{{#locations}}<div class="col-sm-6 col-md-4"><div class="thumbnail"><img src="{{thumb}}" alt="..." class="img-rounded"><div class="caption"><h3>{{name}} <span class="price">{{price}}</span></h3><p>{{text}}</p><p><a href="#" class="btn btn-primary" role="button">More About This</a></p></div></div></div>{{/locations}}';

html = Mustache.to_html(template, data);

$('#destinations .row').html(html);