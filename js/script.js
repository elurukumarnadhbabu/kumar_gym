// JavaScript Document
$.validator.setDefaults({
		highlight: function (element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function (element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorElement: 'span',
		errorClass: 'help-block error',
		errorPlacement: function (error, element) {
			if (element.parent('.input-group').length) {
				error.insertAfter(element.parent());
			} else if (element.attr('type') === 'radio') {
				error.insertAfter(element.parent().parent());
			} else if (element.attr('type') === 'checkbox') {
				error.insertAfter(element.parent().parent());
			} else if (element.attr('name') === 'dob[]') {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});
$(document).ready(function(){
$('#dob').datetimepicker({});
$('#contact').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
			},
			phone: {
				required: true,
				number: true,
				minlength: 10,
				maxlength: 10
			},
			email: {
				required: true,
				email: true
			},
			pincode:{
				required:true,
				number:true,
			},
			dob: 'required',
			city:'required',
			state: 'required',
			country:'required',
			message:'required',
			color:'required'
		},
		messages: {
            name: {
             required: "Please enter your name",
             }, 
			 email:{
				 required:"Please enter @gmail.com or @example.com",
			 },
			 phone:{
				 required:"Please enter 10 digit Phone Number"
			 },
			 message:{
				 required:"Please enter a message regarding company only 150 words",
			 },
			 country:{
				 required:"Please enter a valid country example:India",
			 },
			 color:{
				 required:"Please enter your Gender",
			 },
			 dob:{
				 required:"Please enter vaid date of birth example:dd-mm-yy."
			 },
			 city:{
				 required:"Please give valid city",
			 },
			 pincode:{
				 required:"Plese enter valid pin code",
			 },
			 state:{
			 required:"please enter valid state",
			 },
			},
	});
});