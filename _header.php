
	<header>
		<!-- <div class="topStrip">
			<div class="textaligncenter hStrap">
				<a href="">Home: </a>Lorem ipsum dolor sit amet
			</div>
			<div class="container1180 flex flexJustifyBetween flexAlignItemsCenter">
				<div class="flex flexAlignItemsCenter hSocialLink">
					<a href="" target="_blank" class="flex1"><img src="assets/images/icons/facebook.svg" class="" alt=""></a>
					<a href="" target="_blank" class="flex1"><img src="assets/images/icons/twitter-logo.svg" class="" alt=""></a>
					<a href="" target="_blank" class="flex1"><img src="assets/images/icons/instagram.svg" class="" alt=""></a>
				</div>
				<div class="flex flexAlignItemsCenter">
					<a href=""  target="_blank" class="hsLink"><i class="sIcon iCall marginright10"></i> 04151-200692, 200371</a>
					<a href=""  target="_blank" class="hsLink"><i class="sIcon iMail marginright10"></i> simplr@gmail.com</a>
				</div>
			</div>
		</div> -->
		<div class="header">
			<div class="container1180">
				<div class="headerInner flex flexJustifyBetween flexAlignItemsCenter flexNoWrap">
					<div id="navIcon" class="mobile991">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="topLogo">
						<a href="."><img src="assets/images/logo.png" alt="Simplr"></a>
					</div>
					<div class="rSide flex flexJustifyEnd flexAlignItemsCenter">			
						<div class="menuBox flex flexJustifyEnd">
							<!-- <div class="ddMenu">
								<a href="javascript:void(0)" class="ddmTitle"><i class="sIcon imhowtoplay marginright10"></i> Home</a>
								<div class="ddmBox">
									<a href="htp-gameplay.php">Gameplay Tutorial</a>
									<a href="htp-texax.php">Texas Hold Em' Poker</a>
									<a href="htp-ohama.php">Omaha Poker</a>
									<a href="htp-glossary.php">Glossary</a>
									<a href="htp-ranking.php">Hand Ranking</a>
									<a href="htp-strategy.php">Strategy & Tips</a>
								</div>
							</div>
							<a href="reward-baazi.php" class="item"><i class="sIcon imrewards marginright10"></i> About Trust</a>
							<div class="ddMenu">
								<a href="javascript:void(0)" class="ddmTitle"><i class="sIcon impromotions marginright10"></i> Courses</a>
								<div class="ddmBox">
									<a href="promotions.php">All Promotions</a>
									<a href="tournament-detail.php">Lets Vegas</a>
									<a href="tournament-detail.php">The Moneymaker</a>
									<a href="tournament-detail.php">The Endeavour</a>
									<a href="about-brand-ambassador-list.php">Brand Ambassodors</a>
								</div>
							</div>
							<div class="ddMenu">
								<a href="javascript:void(0)" class="ddmTitle"><i class="sIcon imtournaments marginright10"></i> Our Facilities</a>
								<div class="ddmBox">
									<a href="tournament-schedule.php">Tournament Schedule</a>
									<a href="leaderboard-reward.php">Leaderboard Rewards</a>
									<a href="leaderboard.php">Leaderboard</a>
									<a href="winners.php">Winners</a>
									<a href="tournament-detail.php">The Summit</a>
									<a href="free-entry-tournament.php">Free Entry Tournament</a>
								</div>
							</div> -->
							<a href="" class="item"><i class="imaboutus marginright10"></i> Home</a>
							<a href="#features" class="item"><i class="imblogs marginright10"></i> Features</a>
							<a href="#tour" class="item"><i class="imfaq marginright10"></i> Take a Tour</a>
							<a href="#pricing" class="item"><i class="imaboutus marginright10"></i> Pricing</a>
							<a href="#faq" class="item"><i class="imblogs marginright10"></i> FAQ</a>
							<a href="#contact" class="item"><i class="imfaq marginright10"></i> Contact Us</a>
							
							<!-- <a href="javascript:void(0)" class="item accDDTrigger">My Account <span></span></a> -->
						</div>
						<!-- <a href="login.php" class="loginBtn blueBtnLSmall notLoginCheck">LOGIN</a>
						<a href="create-account.php" class="loginBtn blueBtnSSmall notLoginCheck desktop">SIGN UP</a> -->
					</div>

					<div class="myAcc">
						<div class="myaccBtn"><img src="assets/images/profile.jpg" alt=""><span></span></div>
						<div class="myaccDD">
							<a href="dashboard-add-money.php" class="maAddMoney">Add Money</a>
							<a href="dashboard-profile.php" class="item">My Dashboard</a>
							<a href="." class="item" onclick="setLogout()">Logout</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

	
	<div class="pricingHeader">
		<div class="container1180 pagePad">
			<div class="flexResponsive768 flexAlignItemsCenter flexJustifyBetween">
				<div class="white width500 pDesc">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the 
				</div>
				<div class="">
					<div class="priceDD">
						<div class="priceDDHead">See Pricing</div>
						<div class="priceDDCont">
							<a href="" class="pdItem">Price 1</a>
							<a href="" class="pdItem">Price 2</a>
							<a href="" class="pdItem">Price 3</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
	
	<div class="mobLeftAside">
		<div class="flex flexJustifyBetween flexDirectionCol">
			<section class="profGlance">
				<div class="flex flexJustifyBetween">
					<div class="pgThumb"><img src="assets/images/profile.jpg" alt=""></div>
					<div class="pgDetail">
						<div class="pgName">Mohan Das</div>
						<div class="pgLevel ">Level 3 <span></span> Cashback Reward</div>
						<div class="pgBar">
							<div class="pgbLine"><span style="width: 78%;"></span></div>
							<div class="pgbTxt">COMPLETE PROFILE <span>78%</span></div>
						</div>
					</div>
				</div>
				<div class="pgCredit"><span class="weight400 marginright10">Your Balance</span> &#8377; 13,06,738</div>
				<div class="pgBtn flex">
					<a href="dashboard-add-money.php" class="pgbItem pgbAddMoney <?=(($currentPage == 'dashboard-add-money.php')?'active':'')?>">ADD MONEY</a>
					<a href="dashboard-withdraw.php" class="pgbItem <?=(($currentPage == 'dashboard-withdraw.php')?'active':'')?>">WITHDRAW</a>
				</div>
			</section>
			<section class="asideMenu">
				<a href="dashboard-account.php" class="item <?=(($currentPage == 'dashboard-account.php')?'active':'')?>"><img src="assets/images/icons/dashboard/account.svg" class="svg amIcon"> <span>Account</span></a>
				<a href="dashboard-profile.php" class="item <?=(($currentPage == 'dashboard-profile.php')?'active':'')?>"><img src="assets/images/icons/dashboard/profile.svg" class="svg amIcon"> <span>Profile</span></a>
				<a href="dashboard-history.php" class="item <?=(($currentPage == 'dashboard-history.php')?'active':'')?>"><img src="assets/images/icons/dashboard/history.svg" class="svg amIcon"> <span>History</span></a>
				<a href="dashboard-reports.php" class="item <?=(($currentPage == 'dashboard-reports.php')?'active':'')?>"><img src="assets/images/icons/dashboard/report.svg" class="svg amIcon"> <span>Summary Reports</span></a>
				<a href="dashboard-loyalty-reward.php" class="item <?=(($currentPage == 'dashboard-loyalty-reward.php')?'active':'')?>"><img src="assets/images/icons/dashboard/reward.svg" class="svg amIcon"> <span>My Rewards</span></a>
				<a href="dashboard-support.php" class="item <?=(($currentPage == 'dashboard-support.php')?'active':'')?>"><img src="assets/images/icons/dashboard/support.svg" class="svg amIcon"> <span>Customer Support</span></a>
				<a href="" class="item amLogout" onclick="setLogout()"><img src="assets/images/icons/dashboard/logout.svg" class="svg amIcon" alt=""> <span>Logout</span></a>
			</section>
		</div>
	</div>