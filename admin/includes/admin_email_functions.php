<?php

	function sendEmailToUSer($email, $message, $subject) {
        $to = $email;
		$headers = "From: Luna-bond <Luna-bond@gmail.com>\r\n";
		$headers .= "Reply-To: Luna-bond@gmail.com\r\n";
		$headers .= "Content-type: text/html\r\n";
		mail($to, $subject, $message, $headers);
    }