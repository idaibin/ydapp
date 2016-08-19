define('home:widget/footer/footer.js', function(require, exports, module){ var footer = {
	init: function() {
		$.ajax({
			type: "GET",
			url: "/index/test",
			data: {
				a: "123"
			},
			dataType: "json",
			success: function(result) {
				console.log(result)
			}
		})
	}
}

module.exports = footer; 
});