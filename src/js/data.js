/* FOR TESTING ONLY - Original Data will be from Suman 
It is copied from old IPL data for testing purpose
*/


var r1_end = 12;
var r2_end = 26;
var r3_end = 42;
var r4_end = 42;
var r3_exists = true;
var r4_exists = false;

var match_result = new Array(); //"SL", "NED"
//match_result[0] = "KKR";
//match_result[1] = "DC";
var mat_per_week = new Array(0, 14, 28, 41); // included
var week_num = 0;
if (week_num > 0) {
	if (week_num != 1)
		for (m = 0; m <= mat_per_week[week_num - 1]; m++)
			match_result[m] = "NONE";
	for (m = mat_per_week[week_num] + 1; m < mat_per_week[week_num + 1] || m < match_result.length; m++)
		match_result[m] = "NONE";
}


//var semi_result = new Array("GT", "RR", "LSG", "RCB", "GT", "RR", "GT");

var teams_list = new Array("Netherlands", "Sri Lanka", "United Arab Emirates", "Namibia", "Ireland", "West Indies", "Scotland", "Zimbabwe", "England", "New Zealand", "Australia", "Afghanistan", "Bangladesh", "Pakistan", "India", "South Africa");
var teams_list_st = new Array("NED", "SL", "UAE", "NAM", "IRE", "WI", "SCOT", "ZIM", "ENG", "NZ", "AUS", "AFG", "BAN", "PAK", "IND", "SA");
var teams = 16;
/*		
		10 - Not Selected
		, "On Going","Not Started","Not Selected","To be decided"
		 - Ongoing
		 - Not started
		 - Abandoned*/

var steam = new Array("STSI", "PITC", "PUTC", "INM", "CMI", "CITC", "Rest of SLB");
//var steam = new Array("Schlumberger Technology Services India", "Pune India Technology Center", "Pune Technology Center", "Schlumberger INM", "Cameron Manufacturing India", "Coimbatore India Technology Center", "Rest of Schlumberger");
var steam_st = new Array("STSI", "PITC", "PUTC", "INM", "CMI", "CITC", "Others");
var steam_short = new Array("STSI", "PITC", "PUTC", "INM", "CMI", "CITC", "Others");
var steam_part = new Array(0, 0, 0, 0, 0, 0, 0);
var steam_avg = new Array(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
var steam_cnt = steam.length;

var dat = new Array("16-OCT", "16-OCT", "17-OCT", "17-OCT", "18-OCT", "18-OCT", "19-OCT", "19-OCT", "20-OCT", "20-OCT", "21-OCT", "21-OCT");//, "22-OCT", "22-OCT", "23-OCT", "23-OCT", "24-OCT", "24-OCT", "25-OCT", "26-OCT", "26-OCT", "27-OCT", "27-OCT", "27-OCT", "28-OCT", "28-OCT", "29-OCT", "30-OCT", "30-OCT", "30-OCT", "31-OCT", "1-NOV", "2-NOV", "2-NOV", "2-NOV", "3-NOV", "4-NOV", "4-NOV", "5-NOV", "6-NOV", "6-NOV", "6-NOV");
var matches = dat.length;
//alert("matches = " + matches);

//alert("players = " + players);

var team1 = new Array("NAM", "NED", "SCOT", "IRE", "NAM", "SL", "IRE", "WI", "NED", "NAM", "IRE", "SCOT");//, "AUS", "AFG", "GA1", "IND", "BAN", "SA", "AUS", "GB2", "NZ", "SA", "GA2", "PAK", "AFG", "AUS", "NZ", "BAN", "GA2", "IND", "AUS", "AFG", "ENG", "GB1", "IND", "PAK", "GB2", "AUS", "GA1", "SA", "PAK", "GB1"); //No spaces in name
var team2 = new Array("SL", "UAE", "WI", "ZIM", "NED", "UAE", "SCOT", "ZIM", "SL", "UAE", "WI", "ZIM");//, "NZ", "ENG", "GB2", "PAK", "GA2", "GB1", "GA1", "ENG", "AFG", "BAN", "IND", "GB1", "GB2", "ENG", "GA1", "GB1", "PAK", "SA", "GB2", "GA1", "NZ", "GA2", "BAN", "SA", "NZ", "AFG", "ENG", "GA2", "BAN", "IND");
var team1_bets = new Array();
var team2_bets = new Array();

var player_list = new Array("Vishnu Kanhiravallymadhom Ramanan", "Santosh Gaikwad", "Ruchir Srivastava", "Amit Kumar Pradhan", "Amar Kaldate", "Prasad Narayan Pawase", "Sayan Banerjee", "Anjali Prajapati", "Pravin Kumar", "Sooraj Santhosh", "Sai Teja Nukala", "Nikhil Rajendra Mugganawar", "Padmapriya Murugaiah", "Karthik Sakthivel", "Zaheer Usmani", "Vishal Joshi", "Suresh Kumar Ponnusamy", "Jeevanand Subramania Konar", "Vishal Angadrao Jadhav", "Bhautik Shah", "Bikash Kumar", "Gowtham Thirupathi", "ISHAN APPU", "Shekhar Kumbhar", "Priya Mawade", "Sireesha Venkata Rathnam Kudire", "Ashish Kumar Gupta", "Raja Kumar Mare", "Vinod Chavan", "Lakshmanan Kandasamy");
var players = player_list.length;
var player_steam_list = new Array("STSI", "STSI", "STSI", "PITC", "PUTC", "PITC", "STSI", "CITC", "PITC", "CMI", "Others", "PITC", "CMI", "CMI", "INM", "PUTC", "CITC", "Others", "STSI", "INM", "PITC", "CMI", "INM", "INM", "PITC", "CMI", "INM", "INM", "STSI", "CMI");

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

/* R5 - data 
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
*/

picks[0].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "STSI"); //Vishnu Kanhiravallymadhom Ramanan
picks[1].pick = new Array("NAM", "UAE", "WI", "ZIM", "NAM", "UAE", "IRE", "ZIM", "SL", "NAM", "WI", "SCOT", "STSI"); //Santosh Gaikwad
picks[2].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "STSI"); //Ruchir Srivastava
picks[3].pick = new Array("SL", "NED", "WI", "ZIM", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Amit Kumar Pradhan
picks[4].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PUTC"); //Amar Kaldate
picks[5].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "PITC"); //Prasad Narayan Pawase
picks[6].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "STSI"); //Sayan Banerjee
picks[7].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "CITC"); //Anjali Prajapati
picks[8].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Pravin Kumar
picks[9].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "CMI"); //Sooraj Santhosh
picks[10].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "Others"); //Sai Teja Nukala
picks[11].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Nikhil Rajendra Mugganawar
picks[12].pick = new Array("SL", "NED", "WI", "ZIM", "NAM", "SL", "SCOT", "WI", "SL", "NAM", "WI", "ZIM", "CMI"); //Padmapriya Murugaiah
picks[13].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "CMI"); //Karthik Sakthivel
picks[14].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Zaheer Usmani
picks[15].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PUTC"); //Vishal Joshi
picks[16].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "CITC"); //Suresh Kumar Ponnusamy
picks[17].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "Others"); //Jeevanand Subramania Konar
picks[18].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "IRE", "SCOT", "STSI"); //Vishal Angadrao Jadhav
picks[19].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Bhautik Shah
picks[20].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Bikash Kumar
picks[21].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "CMI"); //Gowtham Thirupathi
picks[22].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //ISHAN APPU
picks[23].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Shekhar Kumbhar
picks[24].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Priya Mawade
picks[25].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "CMI"); //Sireesha Venkata Rathnam Kudire
picks[26].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "INM"); //Ashish Kumar Gupta
picks[27].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Raja Kumar Mare
picks[28].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "STSI"); //Vinod Chavan
picks[29].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "CMI"); //Lakshmanan Kandasamy

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