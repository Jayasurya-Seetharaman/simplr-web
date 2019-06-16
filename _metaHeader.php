<?php
$currentPage =  basename($_SERVER['PHP_SELF']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Simplr</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,width=device-width">

    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="WinkTales Creative Solutions Pvt. Ltd." />
    <meta name="copyright" content="" />
    <!-- <link rel="shortcut icon" href="assets/images/favicon.png"> -->
    
    <!-- <link href="https://fonts.googleapis.com/css?family=Rubik:400,500,700" rel="stylesheet"> -->
    <link href='http://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
    <!-- <link rel="stylesheet" type='text/css' href="assets/vendor/jquery-ui-1.12.1/jquery-ui.min.css"> -->
    <!-- <link rel="stylesheet" type='text/css' href="assets/vendor/datatables/datatables.min.css"> -->
    <link rel="stylesheet" type='text/css' href="assets/fonts/butler/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="assets/vendor/lity/lity.css" media="all">
    <link rel="stylesheet" type='text/css' href="assets/vendor/slick/slick.css">
    <link rel="stylesheet" type='text/css' href="assets/vendor/slick/slick-theme.css">
    <!-- <link rel="stylesheet" type='text/css' href="assets//vendor/cubeportfolio/cubeportfolio.min.css"> -->

    <link rel="stylesheet" type='text/css' href="assets/css/style.css">
    <script type="text/javascript" src="assets/js/jquery-2.1.1.min.js"></script>

</head>
<body class="">
    <div class="creditNote">Designed and Developed by <a href="https://www.thence.co/">Thence</a></div>

    <?php if ($currentPage == 'reward-baazi.php' || $currentPage == 'reward-cashback.php' || $currentPage == 'reward-loyalty.php') { ?>
        <div class="pLoader bpl">
            <div class="pLoad">
                <canvas id="plAnim"></canvas>
                <div class="plC">
                    <img src="assets/images/sgd-logo.png" alt="">
                </div>
            </div>
        </div>
    <?php }else{ ?>
        <div class="pLoader">
            <div class="pLoad">
                <canvas id="plAnim"></canvas>
                <div class="plC">
                    <!-- <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 24 21.47" enable-background="new 0 0 24 21.47" xml:space="preserve">
                        <path class="pathP" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-miterlimit="10" d="M0.06,1.75h7.51 c2.48,0,4.48,2.01,4.48,4.48v0c0,2.48-2.01,4.48-4.48,4.48H1.75v10.75"/>
                        <path class="pathB" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-miterlimit="10" d="M7.43,19.68h10.33 c2.48,0,4.49-2.01,4.48-4.49v0c0-2.47-2.01-4.47-4.48-4.47H9.25v0h8.51c2.48,0,4.49-2.01,4.48-4.49v0c0-2.47-2.01-4.47-4.48-4.47 H7.43"/>
                    </svg> -->
                    <img src="assets/images/sgd-logo.png" alt="" class="logo">
                </div>
            </div>
        </div>
    <?php } ?>

    <!-- <div class="rLoader">
		<img src="assets/images/mobile-pixel-logo.png" alt="Mobile Pixel" class="rLoaderLogo">
		<div class="rLoad"> <div class="rBar"></div> </div>
	</div> -->
    