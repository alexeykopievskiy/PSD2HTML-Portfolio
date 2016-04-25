
			  function trun(){
			  	var metal = document.getElementById('metal-counts').innerHTML;
			  	var domTag = document.getElementById('metal-counts');
			  if(metal.length > 6){
			  	return domTag.innerHTML = metal.replace( /000$/, 'kk');
			  }
			  }
