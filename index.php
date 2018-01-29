<?php
ob_start();
$path = explode("/", $_SERVER['REQUEST_URI']);
define('PATH', $path);

if($_SERVER['SERVER_NAME'] == "fibetco.com")
{
    error_reporting(0);
    define('CDN', '//fibetco.com');
}
else
{
    error_reporting(-1);
    define('CDN', '');
}

header("Cache-Control: max-age=10");

switch($path[1])
{
    case '':
        define('TITLE', 'FiBetCo - Making financial market participation possible for everyone');
        include('_header.php');
        include('pages/startpage.php');
        include('_footer.php');
        break;

    default:
        define('TITLE', 'FiBetCo - Making financial market participation possible for everyone');
        include('_header.php');
        include('pages/startpage.php');
        include('_footer.php');
        break;
}
?>
