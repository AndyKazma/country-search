var url = 'https://restcountries.eu/rest/v1/name/';

var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList,
  		error: function (jqXHR, status, err) {
    		alert("Error: Data not found");
  			}
  	});
}

function showCountriesList(resp) {
  	countriesList.empty();
	resp.forEach(function(item){
	   	$('<li>').text(item.name + " / " +item.nativeName).appendTo(countriesList);
	});
}

//  	error: showErrorMsg
/* function showErrorMsg(jqxhr, textStatus, errorThrown)  {
        if(jqxhr.status == 404) {
            alert("page not found!");
        }
    }

function showErrorMsg(jqXHR, textStatus, errorThrown){
	alert("Error: " + textStatus + " : " + errorThrown) ;
}*/