$(document).ready(function() {

	alert("Before if"+sessionStorage.getItem("firstName"));

	if (sessionStorage.getItem("type") == null) {

		//alert("in if");

		window.location = "index.jsp";
	}

});



$(document).ready(
		function() {
			// alert("w");

			$('link[rel=stylesheet][href~="files/table/css/style.css"]')
					.remove();
			$(".HiddenDiv").hide();
			$("#refresh").hide();
			$("#ConfigSource").hide();

			$("#applicant__frstname").val(sessionStorage.getItem("firstName"));
			$("#applicant_lastname").val(sessionStorage.getItem("lastName"));
			$("#applicant_mail").val(sessionStorage.getItem("email"));

			$.getJSON("/Job_Portal/recruiterDetails/"
					+ sessionStorage.getItem("type"), function(data) {
				$.each(data.recruiterDetails, function(i, item) {

					if (sessionStorage.getItem("type") == item.srNo) {

						$('#srNoHidden').val(item.srNo);
						$('#profile_frstname').val(item.firstName);
						$('#profile_lastname').val(item.lastName);
						$('#profile_mail').val(item.email);
						$('#profile_mobileNo').val(item.mobile);
						/*$('#recuiter_state').val(item.mobileNo);*/
						/*$('#recuiter_state').val(item.alternateEmail);*/
						$('#profile_Description').val(item.jobDesc);
						$('#profile_postdate').val(item.jobDate);

					}

				});
			});
		});





$(document)
	.ready(
		function() {
			$
				.getJSON(
					"/Job_Portal/applicantDetails/",
					function(data) {
						$
							.each(
								data.applicantDetails,
								function(i, item) {


									var tr = "<tr>"
										+ "<td align=center>"
										+ item.srNo
										+ "</td>"
										+ "<td align=center>"
										+ item.firstName
										+ "</td>"
										+ "<td align=center>"
										+ item.lastName
										+ "</td>"
										+ "<td align=center>"
										+ item.email
										+ "</td>"
										+ "<td align=center>"
										+ item.mobile
										+ "</td>"
										+ "<td align=center>"
										+ item.currentlocation
										+ "</td>"
										+ "<td align=center>"
										+ item.profileSummary
										+ "</td>"
										+ "<td align=center>"
										+ item.keySkill
										+ "</td>"
										+ item.designaion
										+ "</td>"
										+ "<td align=center>"
										+ item.organization
										+ "</td>"
										+ "<td align=center>"
										+ item.currentlocation
										+ "</td>"
										+ "<td align=center>"
										+ item.profileSummary
										+ "</td>"
										+ "<td align=center>"
										+ item.keySkill
										+ "</td>"
										+ "<td align=center>"
										+ '<input type="button" id="view_details" name="view" value="view" onclick="getviewDetails(' + item.srNo + ',' + item.randomID +')" class="button blue small" />'
										+ "</td>"
										+ "</tr>";
									$("#appointTable")
										.append(tr);
								});
					});
		});




function getviewDetails(srNo,random_id,username){
//	alert(srNo);
//	alert(random_id);

	//var random_id=data.appointmentDetails.randomID;
	//alert("random"+random_id);
	$("#fetchDetails").show();	
	$("#appTable").hide();
	
	
	$("#IdPatient").append(srNo);
	$("#userNamePatient").append(username);
	
	$("#srno").append(srNo);
	
	$("#random_no").append(random_id);
	
	$.ajax({
		type : "GET",
		//contentType : "application/json",
		url : "/Hospital_Mgmt/fetchdetails/"+srNo+"/"+random_id,
	//	data : JSON.stringify(data1),
		dataType : "JSON",

		success : function(data) {
                    
                    $
					.each(
						data.fetchDetails,
						function(i, item) {
							$('#fetch_bharat').append("<h4 id=f_bharat>&nbsp;  &nbsp; Test Name  &nbsp; &emsp; &emsp;:&emsp; &emsp; &emsp; &emsp; &emsp; "+item.testName+"</h4>" +
									"<h4 id=f_bharat>Test Rate &emsp; &emsp;   :&emsp; &emsp; &emsp; &emsp; &emsp;  "+item.testRate+"</h4>"+
									"<h4 id=f_bharat>Discount Rate &emsp; &emsp;   :&emsp; &emsp; &emsp; &emsp; &emsp;  "+item.discountRate+"</h4>");
		});
                    
                    var printbutton='<input type="button" class="button blue small" value="Print" onclick="getPrintDetails(' + srNo+','+random_id +')" />'
                    
                    
                    
                    $("#printview").append(printbutton);
                    
                    $("#fetchDetails").css("height","100%");
                    $("#fetchDetails").css("overflow-y","scrollable");
		}
	
	});
	
	return false;
	
}

