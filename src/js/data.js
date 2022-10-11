/* FOR TESTING ONLY - Original Data will be from Suman 
It is copied from old IPL data for testing purpose
*/


var r1_end = 10;
var r2_end = 20;
var r3_end = 30;
var r4_end = 40;
var r3_exists = false;
var match_result = new Array("SL", "NED");
var mat_per_week = new Array(0, 7, 15, 24, 33, 41, 50, 59, 67, 69); // included
var week_num = 0;
if (week_num > 0) {
	if (week_num != 1)
		for (m = 0; m <= mat_per_week[week_num - 1]; m++)
			match_result[m] = "NONE";
	for (m = mat_per_week[week_num] + 1; m < mat_per_week[week_num + 1] || m < match_result.length; m++)
		match_result[m] = "NONE";
}

//match_result[0] = "KKR";
//match_result[1] = "DC";
var semi_result = new Array("GT", "RR", "LSG", "RCB", "GT", "RR", "GT");

var teams_list = new Array("Netherlands", "Sri Lanka", "United Arab Emirates", "Namibia", "Ireland", "West Indies", "Scotland", "Zimbabwe", "England", "New Zealand", "Australia", "Afghanistan", "Bangladesh", "Pakistan", "India", "South Africa");
var teams_list_st = new Array("NED", "SL", "UAE", "NAM", "IRE", "WI", "SCOT", "ZIM", "ENG", "NZ", "AUS", "AFG", "BAN", "PAK", "IND", "SA");
var teams = 16;
/*		
		10 - Not Selected
		, "On Going","Not Started","Not Selected","To be decided"
		 - Ongoing
		 - Not started
		 - Abandoned*/

var steam = new Array("Schlumberger Technology Services India", "Schlumberger Pune India Technology Center", "Schlumberger Pune Technology Center", "Schlumberger INM", "Schlumberger CMI", "Schlumberger CITC", "Schlumberger Others");
var steam_st = new Array("STSI", "PITC", "PUTC", "INM", "CMI", "CITC", "Others");
var steam_short = new Array("STSI", "PITC", "PUTC", "INM", "CMI", "CITC", "Others");
var steam_part = new Array(0, 0, 0, 0, 0, 0, 0);
var steam_avg = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
var steam_cnt = steam.length;
var player_list = new Array("Abhijeet V S", "Abhijit A S", "Abhinay K", "Aditya J", "Aditya S", "Akansha Y", "Akash B", "Akash K", "Akshay J", "Akshay Satpute");

var players = player_list.length;
var player_steam_list = new Array("STSI", "PITC", "PUTC", "INM", "CMI", "CITC", "Others", "STSI", "PITC", "PUTC");

var list_prad1 = new Array();
var list_prad2 = new Array();
var picks = new Array();
var player_score = new Array();
var player_ranks = new Array();
var player_list_ranks = new Array();
var player_score_ranks = new Array();
var player_ranks_ranks = new Array();
var steam_list_ranks = new Array();
var steam_score_ranks = new Array();
var steam_ranks_ranks = new Array();
var score_prad1 = new Array();
var score_prad2 = new Array();
for (i = 0; i < players; i++) {
	picks[i] = new Object();
	player_list_ranks[i] = player_list[i];
	list_prad1[i] = player_list[i];
	list_prad2[i] = player_list[i];
	player_score[i] = 0;
}
var dat = new Array("16-10", "16-10", "17-10", "17-10", "18-10", "18-10", "19-10", "19-10", "20-10", "20-10");
var matches = dat.length;
//alert("matches = " + matches);

//alert("players = " + players);

var team1 = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "SCOT", "WI", "AUS", "ENG"); //No spaces in name
var team2 = new Array("NAM", "NED", "SCOT", "IRE", "NED", "UAE", "IRE", "ZIM", "NZ", "AFG");
var team1_bets = new Array();
var team2_bets = new Array();

/* R5 - data */
picks[0].pick = new Array("SL", "UAE", "RCB", "GT", "RR", "KKR", "CSK", "KKR", "MI", "DC", "CSK", "SRH", "RCB"); // Abhijeet V S_0
picks[1].pick = new Array("SL", "NED", "PBKS", "GT", "SRH", "RCB", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR"); // Abhijit A S_1
picks[2].pick = new Array("SL", "NED", "RCB", "LSG", "RR", "KKR", "LSG", "PBKS", "MI", "GT", "CSK", "SRH", "RR"); // Abhinay K_2
picks[3].pick = new Array("SL", "UAE", "RCB", "GT", "RR", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "SRH", "RR"); // Aditya J_3
picks[4].pick = new Array("NAM", "NED", "RCB", "LSG", "RR", "RCB", "LSG", "KKR", "MI", "DC", "PBKS", "LSG", "RR"); // Aditya S_4
picks[5].pick = new Array("NAM", "UAE", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "RR", "DC", "CSK", "SRH", "RCB"); // Akansha Y_5
picks[6].pick = new Array("NAM", "NED", "RCB", "LSG", "SRH", "RCB", "CSK", "PBKS", "MI", "DC", "CSK", "LSG", "RCB"); // Akash B_6
picks[7].pick = new Array("NAM", "UAE", "RCB", "GT", "SRH", "KKR", "LSG", "KKR", "MI", "GT", "CSK", "SRH", "RR"); // Akash K_7
picks[8].pick = new Array("NAM", "NED", "RCB", "GT", "SRH", "RCB", "CSK", "KKR", "MI", "GT", "CSK", "LSG", "RCB"); // Akshay J_8
picks[9].pick = new Array("NAM", "UAE", "RCB", "LSG", "RR", "RCB", "CSK", "KKR", "RR", "DC", "CSK", "SRH", "RCB"); // Akshay Satpute_9

var past_score = new Array();
var past_rank = new Array();
var past_Dscore = new Array();
var past_Drank = new Array();
for (m = 0; m < matches; m++) {
	past_score[m] = new Object();
	past_rank[m] = new Object();
	past_Dscore[m] = new Object();
	past_Drank[m] = new Object();
}
for (m = 0; m < matches; m++) {
	past_score[m].val = new Array();
	past_rank[m].val = new Array();
	past_Dscore[m].val = new Array();
	past_Drank[m].val = new Array();
	for (n = 0; n < players; n++) {
		past_score[m].val[n] = 0;
		past_rank[m].val[n] = 0;
	}
	for (n = 0; n < steam_cnt; n++) {
		past_Dscore[m].val[n] = 0;
		past_Drank[m].val[n] = 0;
	}
}
var team1_steam_supp = new Array();
var team2_steam_supp = new Array();
for (i = 0; i < matches; i++) {
	team1_steam_supp[i] = new Object();
	team2_steam_supp[i] = new Object();
	team1_steam_supp[i].steam = new Array();
	team2_steam_supp[i].steam = new Array();
	for (k = 0; k < steam_cnt; k++) {
		team1_steam_supp[i].steam[k] = 0;
		team2_steam_supp[i].steam[k] = 0;
	}
	//alert(team1_steam_supp[i].steam[k]);
	team1_bets[i] = 0;
	team2_bets[i] = 0;
	for (j = 0; j < players; j++) {
		if (picks[j].pick[i] == team1[i]) {
			team1_bets[i]++;
			team1_steam_supp[i].steam[steam_short.indexOf(player_steam_list[j])]++;
		}
		else if (picks[j].pick[i] == team2[i]) {
			team2_bets[i]++;
			team2_steam_supp[i].steam[steam_short.indexOf(player_steam_list[j])]++;
		}
	}
}
//alert(team1_steam_supp[8].steam);
//alert(team2_steam_supp[8].steam);
var tem_play = new Array();
var tem_won = new Array();
var tem_won1 = new Array();
var tem_pts = new Array();
var supps1 = new Array();
var supps2 = new Array();
var supps3 = new Array();
var supps4 = new Array();
var supps = new Array();
var new_teams_list = new Array();
var new_teams_list1 = new Array();


