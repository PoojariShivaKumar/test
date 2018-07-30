
$(document).ready(function() {
	//alert("w");
	var first_name =sessionStorage.getItem("firstName", data.userDetails.firstName);
	var last_name=sessionStorage.setItem("lastName", data.userDetails.lastName);
	var email=sessionStorage.setItem("email", data.userDetails.email);
	$('link[rel=stylesheet][href~="files/table/css/style.css"]').remove();
	$(".HiddenDiv").hide();
	$("#refresh").hide();
	$("#ConfigSource").hide();
});


$(document)
	.ready(
		function() {
			$("#update_recuiter")
				.click(
					function() {

						var profile_frstname = $("#profile_frstname").val();
						var profile_lastname = $("#profile_lastname").val();
						var profile_mail = $("#profile_mail").val();
						var radio_Male = $("#radio_Male").val();
						var counter = counter_hidden;
						var counter_hidden_discount = counter_hidden;
						var counter_hidden_Rate = counter_hidden;



						var appoint_Name = $("#appoint_Name")
							.val();


						var appoint_Age = $(
							"#appoint_Age").val();

						var appoint_MobileNo = $(
							"#appoint_MobileNo").val();

						var appoint_City = $(
							"#appoint_City").val();

						var appoint_package = $(
							"#appoint_package").val();

						var appoint_Reason = $(
							"#appoint_Reason").val();

						var appoint_DoctorName = $("#appoint_DoctorName").val();
						var appoint_time = $("#appoint_time").val();
						var appoint_Date = $("#appoint_Date").val();

						if (appoint_Name == "") {

							bootbox.alert("Please Enter Patient Name");
							return false;
						}

						if (appoint_Age == "") {

							bootbox.alert("Please Enter Patient Age");
							return false;
						}

						if (appoint_MobileNo == "") {

							bootbox.alert("Please Enter Patient MobileNo");
							return false;
						}

						if (appoint_City == "") {

							bootbox.alert("Please Enter City");
							return false;
						}

						if (appoint_package == "") {

							bootbox.alert("Please Enter Package");
							return false;
						}


						if (appoint_Reason == "") {

							bootbox.alert("Please Enter Reason");
							return false;
						}
						if (appoint_DoctorName == "") {

							bootbox.alert("Please Enter Consult Doctor Name");
							return false;
						}
						if (appoint_Date == "") {

							bootbox.alert("Please Select Appointment Date");
							return false;
						}
						
						if (appoint_time == "") {

							bootbox.alert("Please Select Appointment Time");
							return false;
						}
						
						if (gender== "-1") {

							bootbox.alert("Please Select Gender");
							return false;
						}
						
						
						while (counter_hidden > 0) {

							var alerttestName = "#test_id_" + counter_hidden;
							var Alert_Test_Name = $(alerttestName).val();
							
							//alert("Alert_Test_Name==>"+Alert_Test_Name);
							
							if(Alert_Test_Name == "Test Name"){
								
								bootbox.alert("Please Select Test Name");
								return false;
								
							}

							//	alert("In While--->"+Test_Name);
							counter_hidden--;

						}
						
						
/*						if (appoint_Date == "") {

							bootbox.alert("Please Select Test Name");
							return false;
						}
*/						
						
						
						//	alert(sourceName_Add);
						var data1 = {}
						data1["name"] = appoint_Name;
						data1["age"] = appoint_Age;
						data1["mobile"] = appoint_MobileNo;
						data1["city"] = appoint_City;
						data1["discountPackage"] = Test_discount;
						data1["amountPackage"] = Test_Rate;
						data1["type_Test"] = Test_Name;
						data1["drName"] = appoint_DoctorName;
						data1["timing"] = appoint_time;
						data1["date"] = appoint_Date;
						data1["counter"] = counter;
						data1["gender"] = gender;

						data1["userName"] = userName_hidden;
						data1["userID"] = userID_hidden;


							//alert("----->"+JSON.stringify(data1));

						$
							.ajax({
								type : "POST",
								contentType : "application/json",
								url : "/Job_Portal/recruiter/edit/"+ sessionStorage.getItem("type"),
								data : JSON
									.stringify(data1),
								dataType : "JSON",
								success : function(data) {

									//	alert("Data===>"+data.result);


									if (data.result == "Success") {
										//	alert("EEqq");
										bootbox
											.confirm(
												"Added successfully!",
												function(
													result) {

													window.location = "AppointmentStatus.jsp";
												});

									} else {
										//alert("Error");

									}

								}
							});

					});
			return false;

		});