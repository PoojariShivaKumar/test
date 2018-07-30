
$(document)
	.ready(
		function() {
			$
				.getJSON(
					"/Job_Portal/applicantDetails"+ sessionStorage.getItem("type"),
					function(data) {
						$
							.each(
								data.applicantDetails,
								function(i, item) {
									//alert("ionside");
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
										+ item.mobile
										+ "</td>"
										+ "<td align=center>"
										+ item.email
										+ "</td>"
										+ "<td align=center>"
										+ item.location
										+ "</td>"
										+ "<td align=center>"
										+ item.jobProfile
										+ "</td>"
										+ "<td align=center>"
										+ item.jobDesc
										+ "</td>"
										+ item.jobDate
										+ "</td>"
										+ "<td align=center>"
										+ item.lastDate
										+ "</td>"
									
										+ "</tr>";
									$("#applicantTable")
										.append(tr);
								});
					});
		});






