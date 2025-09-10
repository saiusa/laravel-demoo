<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
</head>
<body>
    <h1>Welcome to the Homepage</h1>
    <nav>
        <a href="{{ route('homepage') }}">Homepage</a> 
        <a href="{{ route('contact') }}">Contact Us</a> 
        <a href="{{ route('about') }}">About Us</a>
    </nav>
</body>
</html>