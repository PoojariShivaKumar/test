
$(document).ready(
		function() {

			// /alert("Session==>"+sessionStorage.getItem("type"));
			$.getJSON("/Job_Portal/AllStateList", function(data) {

				$.each(data.dropDownallStateNameList,
						function(key, value) {

							$("#recuiter_state").append(
									"<option value=" + key + ">" + value
											+ "</option>");
							$("#applicant_state").append(
									"<option value=" + key + ">" + value
											+ "</option>");

							
							
							
						});
			});
			
			$.getJSON("/Job_Portal/profile", function(data) {

				$.each(data.dropDownallProfileNameList,
						function(key, value) {
			
			$("#recuiter_profile").append(
					"<option value=" + key + ">" + value
							+ "</option>");
			
			$("#job_profile").append(
					"<option value=" + key + ">" + value
							+ "</option>");
				});
			});
			
		});

function showdistricts(state) {
	$("#recuiter_district").find('option').remove();
	$("#recuiter_district")
			.append("<option>" + "Select District" + "</option>");
	$("#applicant_district").find('option').remove();
	$("#applicant_district").append(
			"<option>" + "Select District" + "</option>");
	$.getJSON("/Job_Portal/DistrictList/" + state, function(data) {
		$.each(data.dropDownallDistrictNameList, function(key, value) {
			$("#recuiter_district").append(
					"<option value=" + key + ">" + value + "</option>");
			$("#applicant_district").append(
					"<option value=" + key + ">" + value + "</option>");

		});
	});
}