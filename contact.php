<?php
/**
 * contact.php — Receives contact form submissions.
 * Requires a PHP host (Hostinger, InfinityFree, 000webhost, cPanel, etc.).
 * Will NOT work on GitHub Pages (static only) — the JS falls back to mailto there.
 */

header('Content-Type: application/json');

// ---- CONFIGURE YOUR EMAIL HERE ----
$yourEmail = 'yogesh.dahal@example.com';   // <-- change this
// ----------------------------------

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$name    = trim($_POST['name']    ?? '');
$email   = trim($_POST['email']   ?? '');
$message = trim($_POST['message'] ?? '');

// Basic validation
if ($name === '' || $email === '' || $message === '') {
    echo json_encode(['success' => false, 'error' => 'All fields are required']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'error' => 'Invalid email']);
    exit;
}

// Prevent header injection
$name = str_replace(["\r", "\n"], '', $name);
$email = str_replace(["\r", "\n"], '', $email);

$subject = "Portfolio Contact: {$name}";
$body    = "You received a new message from your portfolio:\n\n"
         . "Name: {$name}\n"
         . "Email: {$email}\n\n"
         . "Message:\n{$message}\n";

$headers = "From: no-reply@yourdomain.com\r\n"
         . "Reply-To: {$email}\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($yourEmail, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Mail server failed']);
}