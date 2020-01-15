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
	$(".constitution")
	.keyup(function() {
		var sum = 0;
		$(".constitution").each(function() {
			var val = $.trim( $(this).val() );

			if ( val ) {
				val = parseFloat( val.replace( /^\$/, "" ) );
				sum += !isNaN( val ) ? val : 0;
			}
			$(".conTotal").text(sum);
			
			var modifier = Math.floor(((sum - 10) / 2))
			$(".conModifier").text(modifier);
		}); 
	})
	.keyup();
	$(".dexterity")
	.keyup(function() {
		var sum = 0;
		$(".dexterity").each(function() {
			var val = $.trim( $(this).val() );

			if ( val ) {
				val = parseFloat( val.replace( /^\$/, "" ) );
				sum += !isNaN( val ) ? val : 0;
			}
			$(".dexTotal").text(sum);
			
			var modifier = Math.floor(((sum - 10) / 2))
			$(".dexModifier").text(modifier);
		}); 
	})
	.keyup();
	$(".intelligence")
	.keyup(function() {
		var sum = 0;
		$(".intelligence").each(function() {
			var val = $.trim( $(this).val() );

			if ( val ) {
				val = parseFloat( val.replace( /^\$/, "" ) );
				sum += !isNaN( val ) ? val : 0;
			}
			$(".intTotal").text(sum);
			
			var modifier = Math.floor(((sum - 10) / 2))
			$(".intModifier").text(modifier);
		}); 
	})
	.keyup();
	$(".wisdom")
	.keyup(function() {
		var sum = 0;
		$(".wisdom").each(function() {
			var val = $.trim( $(this).val() );

			if ( val ) {
				val = parseFloat( val.replace( /^\$/, "" ) );
				sum += !isNaN( val ) ? val : 0;
			}
			$(".wisTotal").text(sum);
			
			var modifier = Math.floor(((sum - 10) / 2))
			$(".wisModifier").text(modifier);
		}); 
	})
	.keyup();
	$(".charisma")
	.keyup(function() {
		var sum = 0;
		$(".charisma").each(function() {
			var val = $.trim( $(this).val() );

			if ( val ) {
				val = parseFloat( val.replace( /^\$/, "" ) );
				sum += !isNaN( val ) ? val : 0;
			}
			$(".chaTotal").text(sum);
			
			var modifier = Math.floor(((sum - 10) / 2))
			$(".chaModifier").text(modifier);
		}); 
	})
	.keyup();