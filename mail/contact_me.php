<?php

if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
    echo "No arguments Provided!";
    return false;
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

$to = 'tylucaskelle@umass.edu'; //CHANGE THIS
$email_subject = "Hackers of UMass Email: $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";

$headers = "From: noreply@yourdomain.com\n";
$headers .= "Reply-To: $email_address";

mail($to,$email_subject,$email_body,$headers);

return true;

?>
