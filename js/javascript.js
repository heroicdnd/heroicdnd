/*$(".strTotal")
	.keyup(function() {
		var strTotal = $(this).val();
		var strBase = $("strBase").val();
		var strRace = $("strRace").val();
		var strLevel = $("strLevel").val();
		var strMisc = $("strMisc").val();
		var total = strTotal + strBase + strRace + strLevel + strMisc;
		$(".strModifier").text(value);
	})
	.keyup();
	*/
$(".strength")
	.keyup(function() {
		var sum = 0;
		$(".strength").each(function() {
			var val = $.trim( $(this).val() );

			if ( val ) {
				val = parseFloat( val.replace( /^\$/, "" ) );
				sum += !isNaN( val ) ? val : 0;
			}
			$(".strTotal").text(sum);
			
			var modifier = Math.floor(((sum - 10) / 2))
			$(".strModifier").text(modifier);
		}); 
	})
	.keyup();