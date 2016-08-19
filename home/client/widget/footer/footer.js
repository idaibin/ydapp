var footer = {
	init: function() {
		$.ajax({
			type: "GET",
			url: "/index/test",
			data: {
				a: "footer"
			},
			dataType: "json",
			success: function(result) {
				console.log(result)
			}
		})
	}
}

module.exports = footer;