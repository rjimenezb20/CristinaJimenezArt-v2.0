<?php
		//$to = "cristina.cjimenez@gmail.com";
		$to = "rjimenezb20@gmail.com";

		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];

		$body = "Message from " . $name . " \n Email: " . $email . " \n text: " . $message;

		mail($to, "New web message", $body);
?>