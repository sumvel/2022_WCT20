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

var player_list = new Array("Vishnu Kanhiravallymadhom Ramanan", "Santosh Gaikwad", "Ruchir Srivastava", "Amit Kumar Pradhan", "Amar Kaldate", "Prasad Narayan Pawase", "Sayan Banerjee", "Anjali Prajapati", "Pravin Kumar", "Sooraj Santhosh", "Sai Teja Nukala", "Nikhil Rajendra Mugganawar", "Padmapriya Murugaiah", "Karthik Sakthivel", "Zaheer Usmani", "Vishal Joshi", "Suresh Kumar Ponnusamy", "Jeevanand Subramania Konar", "Vishal Angadrao Jadhav", "Bhautik Shah", "Bikash Kumar", "Gowtham Thirupathi", "ISHAN APPU", "Shekhar Kumbhar", "Priya Mawade", "Sireesha Venkata Rathnam Kudire", "Ashish Kumar Gupta", "Raja Kumar Mare", "Vinod Chavan", "Lakshmanan Kandasamy", "Mohsin Khan", "Abhishek Kumar Jaiswal", "Vamsi Krishna Vadlamudi", "Shanmugasundaram Krishnan", "Parameswaran Padoor Virupakshan", "Surbhi Gupta", "Nikhil Vyas", "Rajesh Rajendran", "Akhil James Lakra", "Chetan Bhagwate", "Saikumar Nadikuppala", "Suman Velvaluri", "Balasubramanian K", "Mahendra Sappani", "Koushik Vijayakumar", "Naveen Mohanasundaram", "Kathiresh Rangasamy", "Mrinal Kundu", "Ajay Kannan S", "Anurag Kumar Singh", "Vignesh Rao M", "Manu Sharma", "Irfan Zaheer", "Ranjan Suri", "Shridhar Nayak", "Dineshkumar Ganesan", "Shantanu Patil", "Sanjay Kumar Jain", "Swastik Rao", "Anmol Jain", "Darshan Sunil Chaudhari", "Durgesh Kumar Singh", "Vijayakumar Rajendran", "Muniyappan Palani", "Chintan Mehta", "Amol Kuntham", "Kireet Chandra Joshi", "Rajvardhan Singh", "Yogesh Gaikwad", "Vivek Kumar", "Rohit Malik", "PRIANSHU BHASKAR", "Aaquib Hussain", "Anmol Bhatnagar", "Bhushan Chaudhari", "Shamanth Sathyanarayanan", "Manish Srivastava", "Senthil Kumar Karunamoorthy", "Pratul Bhonsle", "Jaisooriyan Arumugam", "Hemant Kumar Gattem", "Ronak Chhajed", "Dhrubajyoti Das", "Varunkumar Singh", "Shvetansu Singh", "Vivek Devendra Thanekar", "Monika Thakur", "Trishal Pathak", "Gabriel Jude Reveredo", "Anushree Panchal Asodiya", "Karthik Mani", "Manish Bharati", "Bijaya Kumar Behera", "Rajesh Dadi", "Vinay Chandra", "Jani Mahammed", "Alosh Davis", "Jagdish Ambati", "Atul Sandav", "Karthikeyan Chandran", "Anoop Sharma", "Siva Prasad Mithipati", "Umesh Bhimani", "Punith Gowda", "Rakesh Menge", "Mahesh Sukale", "Vikrant Mahajan", "Pranjul Singh", "Ragupathy Thangavel", "Sunu Sundar", "Sachin Mahadeshwar", "Vijay Dalvi", "Tejal Misar", "RAJESH SONI", "Yogesh Pandya", "Nitish Saini", "Nitin Gupta", "Parthiban Arumugam", "Saurav Kumar Sinha", "Ganesan Ramapadran", "Rajkumar Yadav", "Gaurav Budhprakash Goyal", "Sivaraj N", "Sona Kumar", "Kiran Kedar", "Vaibhav Joshi", "CHAITANYA SHENKAR", "Vishal Kokate", "Parichay Garg", "Roshan Cherian", "Jith Jacob", "Varunkumar Balakrishnan", "Sumesh Madhu", "Altaf Shaikh", "Krishan Sharma", "Marudhu Pandian Ramanathan", "Sreejith Kalarickal", "Jay Shinde", "Ashutosh Kumar", "Abhinav Chawla", "Neeraj Goyal", "Samarth Roy", "Ravi Sinha", "Shivam Verma", "Ashish Rawat", "Theepak Rajkumar Raja", "Pinaki Karkun", "Shaqib Shaqib Ali", "Ronald Dmello", "Bitopan Gogoi", "Sunil Ambekar", "Gurukumar Akkalwar", "Subhradip Mukherjee", "Balakumaran Rajendran", "Hetal Babla", "Naresh Bhagwani", "Shankaralingeswaran SR", "Hrushikesh Milind Patil", "Himanshu Manchanda", "Gopinath Narayanasami", "Zubair Sayyed", "Sanket Chidrewar", "Prasad Kulkarni", "Vivek Kumar", "Nikhil Sood", "Saravana Kumar Velusamy", "Bhawani Bhati", "Ramar Krishnamoorthy", "Ravindra Bhamare", "Dipesh Lunge", "Arpit Tandon", "Karthik Prabhu Kandasamy", "Harishankar Boominathan", "Sachin Sodaye", "Asher Everen", "Deepak Agarwal", "Saroj Shirke", "Shankar Ganesh Kanagaraj Sathiyaraja", "Satish Sanmuga sundaram", "Hariprasath Kumar", "Divya Gupta", "Ishtiaque Sayed", "Lakshmikandan Balasubramanian", "Pavit Bani Boparai", "Arjit Gidwani", "Jacob Varghese", "Gautham Shanmugam", "Akilesh Kumar Dara", "Sathvika Vasamsetti", "Sonal Sontakke", "AKSHAY JAIN", "RAHUL BABU BAMANIA", "Karan Deshmukh", "Madusudhanan Ashokkumar", "Vidya Tonage", "Sudhakar Muthukumar", "Shreyam Rungta", "Balamurugan Kannan", "Pranav Bapurao Patki", "Sivaprakash Minnalkodi");
	//"Vishnu Kanhiravallymadhom Ramanan", "Santosh Gaikwad", "Ruchir Srivastava", "Amit Kumar Pradhan", "Amar Kaldate", "Prasad Narayan Pawase", "Sayan Banerjee", "Anjali Prajapati", "Pravin Kumar", "Sooraj Santhosh", "Sai Teja Nukala", "Nikhil Rajendra Mugganawar", "Padmapriya Murugaiah", "Karthik Sakthivel", "Zaheer Usmani", "Vishal Joshi", "Suresh Kumar Ponnusamy", "Jeevanand Subramania Konar", "Vishal Angadrao Jadhav", "Bhautik Shah", "Bikash Kumar", "Gowtham Thirupathi", "ISHAN APPU", "Shekhar Kumbhar", "Priya Mawade", "Sireesha Venkata Rathnam Kudire", "Ashish Kumar Gupta", "Raja Kumar Mare", "Vinod Chavan", "Lakshmanan Kandasamy");
var players = player_list.length;
var player_steam_list = new Array("STSI", "STSI", "STSI", "PITC", "PUTC", "PITC", "STSI", "CITC", "PITC", "CMI", "Others", "PITC", "CMI", "CMI", "INM", "PUTC", "CITC", "Others", "STSI", "INM", "PITC", "CMI", "INM", "INM", "PITC", "CMI", "INM", "INM", "STSI", "CMI", "PITC", "PITC", "PITC", "CMI", "CITC", "PITC", "PUTC", "INM", "INM", "STSI", "INM", "STSI", "INM", "PITC", "CMI", "CMI", "CITC", "PITC", "CMI", "STSI", "CMI", "INM", "INM", "PITC", "Others", "CMI", "PITC", "Others", "PITC", "PITC", "Others", "INM", "CMI", "CMI", "Others", "PITC", "Others", "INM", "INM", "INM", "PITC", "Others", "Others", "INM", "INM", "CMI", "PITC", "STSI", "PITC", "CMI", "Others", "PITC", "INM", "INM", "INM", "INM", "PUTC", "INM", "STSI", "PITC", "CMI", "INM", "INM", "INM", "PITC", "INM", "CMI", "PITC", "INM", "CMI", "INM", "INM", "PITC", "STSI", "INM", "INM", "STSI", "PUTC", "CMI", "CMI", "INM", "INM", "STSI", "INM", "STSI", "PITC", "PITC", "CMI", "STSI", "CMI", "INM", "INM", "CMI", "PITC", "PITC", "INM", "STSI", "STSI", "PITC", "INM", "INM", "CMI", "INM", "INM", "INM", "CMI", "CMI", "STSI", "INM", "INM", "PITC", "INM", "INM", "STSI", "PITC", "CMI", "PITC", "INM", "INM", "PUTC", "PITC", "PITC", "PITC", "CMI", "PITC", "PUTC", "CMI", "INM", "INM", "INM", "INM", "PITC", "PITC", "PITC", "INM", "CITC", "INM", "CMI", "STSI", "INM", "PITC", "INM", "CMI", "INM", "PITC", "Others", "INM", "CMI", "INM", "INM", "STSI", "INM", "STSI", "Others", "INM", "PITC", "CITC", "INM", "PITC", "PITC", "STSI", "Others", "STSI", "CMI", "STSI", "CITC", "PITC", "CMI", "PITC", "CMI");
	//"STSI", "STSI", "STSI", "PITC", "PUTC", "PITC", "STSI", "CITC", "PITC", "CMI", "Others", "PITC", "CMI", "CMI", "INM", "PUTC", "CITC", "Others", "STSI", "INM", "PITC", "CMI", "INM", "INM", "PITC", "CMI", "INM", "INM", "STSI", "CMI");

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
picks[30].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Mohsin Khan
picks[31].pick = new Array("SL", "NED", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Abhishek Kumar Jaiswal
picks[32].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Vamsi Krishna Vadlamudi
picks[33].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "NED", "UAE", "WI", "ZIM", "CMI"); //Shanmugasundaram Krishnan
picks[34].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "CITC"); //Parameswaran Padoor Virupakshan
picks[35].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "ZIM", "NED", "UAE", "WI", "ZIM", "PITC"); //Surbhi Gupta
picks[36].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PUTC"); //Nikhil Vyas
picks[37].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "INM"); //Rajesh Rajendran
picks[38].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "ZIM", "SL", "NAM", "WI", "ZIM", "INM"); //Akhil James Lakra
picks[39].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "STSI"); //Chetan Bhagwate
picks[40].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "NED", "UAE", "WI", "SCOT", "INM"); //Saikumar Nadikuppala
picks[41].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "STSI"); //Suman Velvaluri
picks[42].pick = new Array("NAM", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "IRE", "ZIM", "INM"); //Balasubramanian K
picks[43].pick = new Array("SL", "NED", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Mahendra Sappani
picks[44].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "NAM", "WI", "ZIM", "CMI"); //Koushik Vijayakumar
picks[45].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "CMI"); //Naveen Mohanasundaram
picks[46].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "CITC"); //Kathiresh Rangasamy
picks[47].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Mrinal Kundu
picks[48].pick = new Array("SL", "NED", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "CMI"); //Ajay Kannan S
picks[49].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "IRE", "SCOT", "STSI"); //Anurag Kumar Singh
picks[50].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "ZIM", "SL", "UAE", "WI", "ZIM", "CMI"); //Vignesh Rao M
picks[51].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Manu Sharma
picks[52].pick = new Array("SL", "NED", "WI", "ZIM", "NAM", "SL", "SCOT", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Irfan Zaheer
picks[53].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Ranjan Suri
picks[54].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "Others"); //Shridhar Nayak
picks[55].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "CMI"); //Dineshkumar Ganesan
picks[56].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "IRE", "ZIM", "PITC"); //Shantanu Patil
picks[57].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "Others"); //Sanjay Kumar Jain
picks[58].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Swastik Rao
picks[59].pick = new Array("SL", "UAE", "SCOT", "IRE", "NAM", "SL", "IRE", "WI", "SL", "UAE", "IRE", "ZIM", "PITC"); //Anmol Jain
picks[60].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "NED", "NAM", "WI", "SCOT", "Others"); //Darshan Sunil Chaudhari
picks[61].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Durgesh Kumar Singh
picks[62].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "CMI"); //Vijayakumar Rajendran
picks[63].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "CMI"); //Muniyappan Palani
picks[64].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "Others"); //Chintan Mehta
picks[65].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Amol Kuntham
picks[66].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "Others"); //Kireet Chandra Joshi
picks[67].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "IRE", "SCOT", "INM"); //Rajvardhan Singh
picks[68].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Yogesh Gaikwad
picks[69].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Vivek Kumar
picks[70].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Rohit Malik
picks[71].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "Others"); //PRIANSHU BHASKAR
picks[72].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "Others"); //Aaquib Hussain
picks[73].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "UAE", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Anmol Bhatnagar
picks[74].pick = new Array("SL", "NED", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "INM"); //Bhushan Chaudhari
picks[75].pick = new Array("SL", "NED", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "CMI"); //Shamanth Sathyanarayanan
picks[76].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "PITC"); //Manish Srivastava
picks[77].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "STSI"); //Senthil Kumar Karunamoorthy
picks[78].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "PITC"); //Pratul Bhonsle
picks[79].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "CMI"); //Jaisooriyan Arumugam
picks[80].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "Others"); //Hemant Kumar Gattem
picks[81].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "PITC"); //Ronak Chhajed
picks[82].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Dhrubajyoti Das
picks[83].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "NAM", "WI", "SCOT", "INM"); //Varunkumar Singh
picks[84].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Shvetansu Singh
picks[85].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "INM"); //Vivek Devendra Thanekar
picks[86].pick = new Array("SL", "NED", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PUTC"); //Monika Thakur
picks[87].pick = new Array("SL", "UAE", "WI", "IRE", "NAM", "SL", "SCOT", "WI", "SL", "NAM", "WI", "SCOT", "INM"); //Trishal Pathak
picks[88].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "IRE", "ZIM", "STSI"); //Gabriel Jude Reveredo
picks[89].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Anushree Panchal Asodiya
picks[90].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "CMI"); //Karthik Mani
picks[91].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Manish Bharati
picks[92].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "IRE", "SCOT", "INM"); //Bijaya Kumar Behera
picks[93].pick = new Array("SL", "UAE", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Rajesh Dadi
picks[94].pick = new Array("SL", "NED", "WI", "ZIM", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Vinay Chandra
picks[95].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "UAE", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Jani Mahammed
picks[96].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "NAM", "IRE", "ZIM", "CMI"); //Alosh Davis
picks[97].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Jagdish Ambati
picks[98].pick = new Array("SL", "NED", "WI", "ZIM", "NAM", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Atul Sandav
picks[99].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "CMI"); //Karthikeyan Chandran
picks[100].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "ZIM", "SL", "NAM", "WI", "ZIM", "INM"); //Anoop Sharma
picks[101].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "INM"); //Siva Prasad Mithipati
picks[102].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Umesh Bhimani
picks[103].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "STSI"); //Punith Gowda
picks[104].pick = new Array("SL", "NED", "SCOT", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Rakesh Menge
picks[105].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Mahesh Sukale
picks[106].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "STSI"); //Vikrant Mahajan
picks[107].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PUTC"); //Pranjul Singh
picks[108].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "CMI"); //Ragupathy Thangavel
picks[109].pick = new Array("SL", "NED", "SCOT", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "CMI"); //Sunu Sundar
picks[110].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "INM"); //Sachin Mahadeshwar
picks[111].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Vijay Dalvi
picks[112].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "SCOT", "ZIM", "SL", "NAM", "WI", "ZIM", "STSI"); //Tejal Misar
picks[113].pick = new Array("SL", "NED", "SCOT", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //RAJESH SONI
picks[114].pick = new Array("SL", "NED", "WI", "ZIM", "NAM", "SL", "SCOT", "ZIM", "SL", "UAE", "WI", "ZIM", "STSI"); //Yogesh Pandya
picks[115].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "PITC"); //Nitish Saini
picks[116].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Nitin Gupta
picks[117].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "CMI"); //Parthiban Arumugam
picks[118].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "STSI"); //Saurav Kumar Sinha
picks[119].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "NAM", "WI", "SCOT", "CMI"); //Ganesan Ramapadran
picks[120].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Rajkumar Yadav
picks[121].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Gaurav Budhprakash Goyal
picks[122].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "CMI"); //Sivaraj N
picks[123].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Sona Kumar
picks[124].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Kiran Kedar
picks[125].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Vaibhav Joshi
picks[126].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "STSI"); //CHAITANYA SHENKAR
picks[127].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "IRE", "SCOT", "STSI"); //Vishal Kokate
picks[128].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Parichay Garg
picks[129].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "INM"); //Roshan Cherian
picks[130].pick = new Array("SL", "NED", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Jith Jacob
picks[131].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "CMI"); //Varunkumar Balakrishnan
picks[132].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "NED", "UAE", "WI", "ZIM", "INM"); //Sumesh Madhu
picks[133].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "INM"); //Altaf Shaikh
picks[134].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "UAE", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Krishan Sharma
picks[135].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "CMI"); //Marudhu Pandian Ramanathan
picks[136].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "CMI"); //Sreejith Kalarickal
picks[137].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "STSI"); //Jay Shinde
picks[138].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Ashutosh Kumar
picks[139].pick = new Array("SL", "NED", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "INM"); //Abhinav Chawla
picks[140].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Neeraj Goyal
picks[141].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Samarth Roy
picks[142].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Ravi Sinha
picks[143].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "STSI"); //Shivam Verma
picks[144].pick = new Array("SL", "NED", "WI", "ZIM", "NAM", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Ashish Rawat
picks[145].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "CMI"); //Theepak Rajkumar Raja
picks[146].pick = new Array("SL", "UAE", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Pinaki Karkun
picks[147].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Shaqib Shaqib Ali
picks[148].pick = new Array("SL", "NED", "WI", "IRE", "NAM", "SL", "SCOT", "WI", "SL", "NAM", "WI", "SCOT", "INM"); //Ronald Dmello
picks[149].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PUTC"); //Bitopan Gogoi
picks[150].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Sunil Ambekar
picks[151].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "PITC"); //Gurukumar Akkalwar
picks[152].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "PITC"); //Subhradip Mukherjee
picks[153].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "CMI"); //Balakumaran Rajendran
picks[154].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Hetal Babla
picks[155].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PUTC"); //Naresh Bhagwani
picks[156].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "CMI"); //Shankaralingeswaran SR
picks[157].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Hrushikesh Milind Patil
picks[158].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "INM"); //Himanshu Manchanda
picks[159].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Gopinath Narayanasami
picks[160].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "INM"); //Zubair Sayyed
picks[161].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "UAE", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "PITC"); //Sanket Chidrewar
picks[162].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Prasad Kulkarni
picks[163].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Vivek Kumar
picks[164].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Nikhil Sood
picks[165].pick = new Array("NAM", "NED", "WI", "IRE", "NAM", "SL", "SCOT", "ZIM", "SL", "UAE", "IRE", "SCOT", "CITC"); //Saravana Kumar Velusamy
picks[166].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Bhawani Bhati
picks[167].pick = new Array("SL", "NED", "SCOT", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "UAE", "IRE", "SCOT", "CMI"); //Ramar Krishnamoorthy
picks[168].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "WI", "SL", "NAM", "WI", "ZIM", "STSI"); //Ravindra Bhamare
picks[169].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "SCOT", "INM"); //Dipesh Lunge
picks[170].pick = new Array("SL", "NED", "SCOT", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Arpit Tandon
picks[171].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "IRE", "ZIM", "INM"); //Karthik Prabhu Kandasamy
picks[172].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "SCOT", "WI", "SL", "NAM", "WI", "ZIM", "CMI"); //Harishankar Boominathan
picks[173].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "INM"); //Sachin Sodaye
picks[174].pick = new Array("SL", "UAE", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Asher Everen
picks[175].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "Others"); //Deepak Agarwal
picks[176].pick = new Array("SL", "NED", "WI", "ZIM", "NAM", "SL", "SCOT", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Saroj Shirke
picks[177].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "CMI"); //Shankar Ganesh Kanagaraj Sathiyaraja
picks[178].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Satish Sanmuga sundaram
picks[179].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "UAE", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Hariprasath Kumar
picks[180].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "ZIM", "SL", "NAM", "WI", "ZIM", "STSI"); //Divya Gupta
picks[181].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "INM"); //Ishtiaque Sayed
picks[182].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "SCOT", "ZIM", "SL", "NAM", "WI", "ZIM", "STSI"); //Lakshmikandan Balasubramanian
picks[183].pick = new Array("SL", "UAE", "WI", "ZIM", "NAM", "SL", "SCOT", "WI", "SL", "UAE", "WI", "ZIM", "Others"); //Pavit Bani Boparai
picks[184].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "IRE", "ZIM", "INM"); //Arjit Gidwani
picks[185].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Jacob Varghese
picks[186].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "CITC"); //Gautham Shanmugam
picks[187].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "INM"); //Akilesh Kumar Dara
picks[188].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "UAE", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Sathvika Vasamsetti
picks[189].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Sonal Sontakke
picks[190].pick = new Array("SL", "NED", "WI", "ZIM", "NED", "SL", "SCOT", "ZIM", "SL", "UAE", "WI", "ZIM", "STSI"); //AKSHAY JAIN
picks[191].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "SCOT", "Others"); //RAHUL BABU BAMANIA
picks[192].pick = new Array("SL", "NED", "WI", "IRE", "NAM", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "STSI"); //Karan Deshmukh
picks[193].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "SCOT", "WI", "SL", "NAM", "WI", "ZIM", "CMI"); //Madusudhanan Ashokkumar
picks[194].pick = new Array("SL", "NED", "WI", "IRE", "NED", "UAE", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "STSI"); //Vidya Tonage
picks[195].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "CITC"); //Sudhakar Muthukumar
picks[196].pick = new Array("SL", "NED", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "NAM", "WI", "ZIM", "PITC"); //Shreyam Rungta
picks[197].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "UAE", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "CMI"); //Balamurugan Kannan
picks[198].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "ZIM", "PITC"); //Pranav Bapurao Patki
picks[199].pick = new Array("SL", "UAE", "WI", "IRE", "NED", "SL", "IRE", "WI", "SL", "UAE", "WI", "SCOT", "CMI"); //Sivaprakash Minnalkodi

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