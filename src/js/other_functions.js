function sel_team() {
	var tabid = document.getElementById("tab_sch");
	var boxid = document.getElementById('select_team');
	for (var i = 1; i < tabid.rows.length; i++)
		tabid.rows[i].style.display = '';
	if (boxid.options[boxid.selectedIndex].value != "ALL")
		for (i = match_result.length, j = 1; i < matches; j++, i++)
			if (team1[i] != boxid.options[boxid.selectedIndex].value && team2[i] != boxid.options[boxid.selectedIndex].value)
				tabid.rows[j].style.display = 'none';
}

function sel_steam() {
	divran = "";
	var boxid = document.getElementById('sel_steam');
	divran = divran + "<table border='0' cellspacing='2'><tr bgcolor='00FFE0'><th align='center'>Rank</th><th align='center'>Player</th><th align='center'>Score</th></tr>";
	p = 1;
	prev_ply_rank = 1;
	for (j = 0; j < players; j++) {

		if (boxid.options[boxid.selectedIndex].value == "ALL" || boxid.options[boxid.selectedIndex].value == player_steam_list[player_list.indexOf(player_list_ranks[j])]) {
			if (p % 2 != 0)
				divran = divran + "<tr bgcolor='#D8D8D8'>";
			else
				divran = divran + "<tr bgcolor='#F8F8F8'>";
			divran = divran + "<td align ='center'>";
			if (j != 0 && player_score_ranks[j] == prev_ply_rank)
				divran = divran + "&nbsp";
			else
				divran = divran + p;//player_ranks_ranks[j];

			divran = divran + "</td><td>" + player_list_ranks[j] + "</td><td align='center'>" + player_score_ranks[j] + "</td></tr>";  // .toUpperCase() 
			p++;
			prev_ply_rank = player_score_ranks[j];
		}
	}
	divran = divran + "</table>";
	document.getElementById('ranks_tab_div').innerHTML = divran;
}

/*function res_team()
{
	var tabid = document.getElementById("tab_res");
	var boxid = document.getElementById('result_team');
	for(var i=1;i<tabid.rows.length;i++)
		tabid.rows[i].style.display = '';
	if(boxid.options[boxid.selectedIndex].value !="ALL")
		for(i=0,j=1;i<match_result.length;j++,i++)
			if(team1[i] != boxid.options[boxid.selectedIndex].value && team2[i] != boxid.options[boxid.selectedIndex].value)
				tabid.rows[j].style.display = 'none';
}*/

function sort_value(iname, istart, istop, vname) {
	var temp_iname;
	var temp_vname;
	for (i = istart; i < istop; i++)
		for (j = i + 1; j <= istop; j++)
			if (vname[j] > vname[i]) {
				temp_iname = iname[i];
				iname[i] = iname[j];
				iname[j] = temp_iname;
				temp_vname = vname[i];
				vname[i] = vname[j];
				vname[j] = temp_vname;
			}
	temp_vname = istart;
	for (i = istart; i <= istop; i++) {
		if (i != istop && vname[i] == vname[i + 1])
			continue;
		else {
			sort_index(iname, temp_vname, i, vname);
			temp_vname = i + 1;
		}
	}/**/
}

function sort_index(iname, istart, istop, vname) {
	var temp_iname;
	var temp_vname;
	for (i = istart; i < istop; i++)
		for (j = i + 1; j <= istop; j++)
			if (iname[i] > iname[j]) {
				temp_iname = iname[i];
				iname[i] = iname[j];
				iname[j] = temp_iname;
				if (vname != null) {
					temp_vname = vname[i];
					vname[i] = vname[j];
					vname[j] = temp_vname;
				}
			}
}

function player_info() {
	var menuid1 = document.getElementById("player_drop1");
	var menuid2 = document.getElementById("player_drop2");
	var menuid3 = document.getElementById("player_drop3");
	var ply1 = 1000;
	var ply2 = 1000;
	var ply3 = 1000;
	for (i = 0; i < players; i++) {
		if (player_list[i] == menuid1.options[menuid1.selectedIndex].value)
			ply1 = i;
		if (player_list[i] == menuid2.options[menuid2.selectedIndex].value)
			ply2 = i;
		if (player_list[i] == menuid3.options[menuid3.selectedIndex].value)
			ply3 = i;
	}
	divplycom = "";
	divplycom = divplycom + "<table border ='1' align='center'><tr bgcolor='00FFE0'><th>#</th><th>Team A</th><th>Team B</th>";
	if (ply1 != 1000)
		divplycom = divplycom + "<th>" + player_list[ply1] + "'s Selection</th>"; //.toUpperCase()
	if (ply2 != 1000)
		divplycom = divplycom + "<th>" + player_list[ply2] + "'s Selection</th>"; //.toUpperCase()
	if (ply3 != 1000)
		divplycom = divplycom + "<th>" + player_list[ply3] + "'s Selection</th>";// .toUpperCase()
	divplycom = divplycom + "</tr>";
	for (i = 0; i < matches; i++) {
		divplycom = divplycom + "<tr><td>" + (i + 1) + "</td>";
		if (i < match_result.length && match_result[i] == team1[i])
			divplycom = divplycom + "<td  bgcolor='Lime'>";
		else
			divplycom = divplycom + "<td>";
		divplycom = divplycom + teams_list[teams_list_st.indexOf(team1[i])] + "</td>";
		if (i < match_result.length && match_result[i] == team2[i])
			divplycom = divplycom + "<td  bgcolor='Lime'>";
		else
			divplycom = divplycom + "<td>";
		divplycom = divplycom + teams_list[teams_list_st.indexOf(team2[i])] + "</td>";
		if (ply1 != 1000) {
			if (i < match_result.length && match_result[i] == picks[ply1].pick[i])
				divplycom = divplycom + "<td  bgcolor='Lime'>";
			else
				divplycom = divplycom + "<td>";
			divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply1].pick[i])];
			divplycom = divplycom + "</td>";
		}
		if (ply2 != 1000) {
			if (i < match_result.length && match_result[i] == picks[ply2].pick[i])
				divplycom = divplycom + "<td  bgcolor='Lime'>";
			else
				divplycom = divplycom + "<td>";
			divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply2].pick[i])];
			divplycom = divplycom + "</td>";
		}
		if (ply3 != 1000) {
			if (i < match_result.length && match_result[i] == picks[ply3].pick[i])
				divplycom = divplycom + "<td  bgcolor='Lime'>";
			else
				divplycom = divplycom + "<td>";
			divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply3].pick[i])];
			divplycom = divplycom + "</td>";
		}
		divplycom = divplycom + "</tr>";
	}
	divplycom = divplycom + "</table>";
	document.getElementById('comtable').innerHTML = divplycom;
}

function match_info() {
	var matid = document.getElementById("match_id");
	if (matid.options[matid.selectedIndex].value == "default") {
		p = match_result.length;
		if (p >= matches)
			p = matches - 1;
	}
	else {
		var matnum = matid.options[matid.selectedIndex].value;
		p = parseInt(matnum) - 1;
	}
	divmat = "<table cellspacing='1' border='1'><tr bgcolor='00FFE0'><th align='center'>Match " + (p + 1) + "</th><th align='center'>Team A</th><th align='center'>Team B</th></tr>";
	divmat = divmat + "<tr><th align='left'>Name</th><td align='center'>" + teams_list[teams_list_st.indexOf(team1[p])] + "</td><td align='center'>" + teams_list[teams_list_st.indexOf(team2[p])] + "</td></tr>";
	divmat = divmat + "<tr><th align='left'>Played</th><td align='center'>" + tem_play[teams_list_st.indexOf(team1[p])] + "</td><td align='center'>" + tem_play[teams_list_st.indexOf(team2[p])] + "</td></tr>";
	divmat = divmat + "<tr><th align='left'>Won</th><td align='center'>" + tem_won[teams_list_st.indexOf(team1[p])] + "</td><td align='center'>" + tem_won[teams_list_st.indexOf(team2[p])] + "</td></tr>";
	//divmat = divmat + "<tr><th align='left'>Points</th><td align='center'>" + (tem_won[teams_list_st.indexOf(team1[p])] * 2) + "</td><td align='center'>" + (tem_won[teams_list_st.indexOf(team2[p])] * 2) + "</td></tr>";
	divmat = divmat + "<tr><th align='left'>Supports</th><td align='center'>" + team1_supps[p] + "</td><td align='center'>" + team2_supps[p] + "</td></tr>";
	divmat = divmat + "<tr><th align='left' style='vertical-align: baseline;'>Supporters</th><td align='left' style='vertical-align: baseline;'>"; 
	for (i = 0; i < players; i++)
		if (picks[i].pick[p] == team1[p])
			divmat = divmat + "&nbsp&nbsp" + player_list[i] + "<br>";//.toUpperCase()
	divmat = divmat + "</td><td align='left' style='vertical-align: baseline;'>";
	for (i = 0; i < players; i++)
		if (picks[i].pick[p] == team2[p])
			divmat = divmat + "&nbsp&nbsp" + player_list[i] + "<br>";//.toUpperCase()
	divmat = divmat + "</td></tr>";
	divmat = divmat + "</table>";
	document.getElementById('mat_table').innerHTML = divmat;
	
}


function player_stats() {
	var pid = document.getElementById("player_drop");
	for (i = 0; i < players; i++)
		if (player_list[i] == pid.options[pid.selectedIndex].value)
			break;
	var selected = new Array(0, 0, 0, 0);
	var won = new Array(0, 0, 0, 0);
	var pts = new Array(0, 0, 0, 0);
	var supps = new Array(0, 0, 0, 0);
	for (j = 0; j < teams; j++)
		supps[j] = new Object();
	for (j = 0; j < teams; j++)
		supps[j].supp = new Array(0, 0, 0, 0);
	for (j = 0; j < r1_end; j++) {
		if (picks[i].pick[j] != "NS")
			selected[0]++;
		if (picks[i].pick[j] == match_result[j]) {
			won[0]++;
			pts[0]++;
		}
		for (k = 0; k < teams; k++)
			if (picks[i].pick[j] == teams_list_st[k])
				supps[k].supp[0]++;
	}
	for (; j < r2_end; j++) {
		if (picks[i].pick[j] != "NS")
			selected[1]++;
		if (picks[i].pick[j] == match_result[j]) {
			won[1]++;
			pts[1] = pts[1] + 2;
		}
		for (k = 0; k < teams; k++)
			if (picks[i].pick[j] == teams_list_st[k])
				supps[k].supp[1]++;
	}
	for (; j < r3_end; j++) {
		if (picks[i].pick[j] != "NS")
			selected[2]++;
		if (picks[i].pick[j] == match_result[j]) {
			won[2]++;
			pts[2] = pts[2] + 3;
		}
		for (k = 0; k < teams; k++)
			if (picks[i].pick[j] == teams_list_st[k])
				supps[k].supp[2]++;
	}
	for (; j < r4_end; j++) {
		if (picks[i].pick[j] != "NS")
			selected[3]++;
		if (picks[i].pick[j] == match_result[j]) {
			won[3]++;
			pts[3] = pts[3] + 4;
		}
		for (k = 0; k < teams; k++)
			if (picks[i].pick[j] == teams_list_st[k])
				supps[k].supp[3]++;
	}
	divp = "<table border='0'><tr><td><h3>Points</h3><table border='0'><tr bgcolor='00FFE0'><th align='center'></th><th align='center'>Round 1</th>";
	if (r2_end > r1_end)
		divp = divp + "<th align='center'>Round 2</th>";
	if (r3_end > r2_end)
		divp = divp + "<th align='center'>Round 3</th>";
	if (r4_end > r3_end)
		divp = divp + "<th align='center'>Round 4</th>";
	divp = divp + "<th align='center'>Total</th></tr><tr bgcolor='#F8F8F8'>";
	divp = divp + "<th>Selections</th>";
	divp = divp + "<td align='center'>" + selected[0] + "</td>";
	if (r2_end > r1_end)
		divp = divp + "<td align='center'>" + selected[1] + "</td>";
	if (r3_end > r2_end)
		divp = divp + "<td align='center'>" + selected[2] + "</td>";
	if (r4_end > r3_end)
		divp = divp + "<td align='center'>" + selected[3] + "</td>";
	divp = divp + "<td align='center'>" + (selected[0] + selected[1] + selected[2]) + "</td></tr>";
	divp = divp + "<tr bgcolor='#D8D8D8'><th>Won</th>";
	divp = divp + "<td align='center'>" + won[0] + "</td>";
	if (r2_end > r1_end)
		divp = divp + "<td align='center'>" + won[1] + "</td>";
	if (r3_end > r2_end)
		divp = divp + "<td align='center'>" + won[2] + "</td>";
	if (r4_end > r3_end)
		divp = divp + "<td align='center'>" + won[3] + "</td>";
	divp = divp + "<td align='center'>" + (won[0] + won[1] + won[2] + won[3]) + "</td></tr>";
	divp = divp + "<tr bgcolor='#F8F8F8'><th>Points</th>";
	divp = divp + "<td align='center'>" + pts[0] + "</td>";
	if (r2_end > r1_end)
		divp = divp + "<td align='center'>" + pts[1] + "</td>";
	if (r3_end > r2_end)
		divp = divp + "<td align='center'>" + pts[2] + "</td>";
	if (r4_end > r3_end)
		divp = divp + "<td align='center'>" + pts[3] + "</td>";
	divp = divp + "<td align='center'>" + (pts[0] + pts[1] + pts[2] + pts[3]) + "</td></tr>";
	divp = divp + "</table><h3>Supports</h3><table border='0'><tr bgcolor='00FFE0'><th align='center'>Team</th><th align='center'>Round 1</th>";
	if (r2_end > r1_end)
		divp = divp + "<th align='center'>Round 2</th>";
	if (r3_end > r2_end)
		divp = divp + "<th align='center'>Round 3</th>";
	if (r4_end > r3_end)
		divp = divp + "<th align='center'>Round 4</th>";
	divp = divp + "<th align='center'>Total</th></tr>";//
	for (j = 0; j < teams; j++) {
		if (j % 2 != 0)
			divp = divp + "<tr bgcolor='#D8D8D8'>";
		else
			divp = divp + "<tr bgcolor='#F8F8F8'>";
		divp = divp + "<th align='left'>" + teams_list[j] + "</th>";
		divp = divp + "<td align='center'>" + supps[j].supp[0] + "</td>";
		if (r2_end > r1_end)
			divp = divp + "<td align='center'>" + supps[j].supp[1] + "</td>";
		if (r3_end > r2_end)
			divp = divp + "<td align='center'>" + supps[j].supp[2] + "</td>";
		if (r4_end > r3_end)
			divp = divp + "<td align='center'>" + supps[j].supp[3] + "</td>";
		divp = divp + "<td align='center'>" + (supps[j].supp[0] + supps[j].supp[1] + supps[j].supp[2] + supps[j].supp[3]) + "</td></tr>";
	}
	divp = divp + "</table></td><td><h3>Performance</h3><table border='0'><tr bgcolor='00FFE0'><th align='center'>Match</th><th align='center'>Score</th><th align='center'>Rank</th>";
	for (mi = 0; mi < match_result.length; mi++) {
		if (mi % 2 != 0)
			divp = divp + "<tr bgcolor='#D8D8D8'>";
		else
			divp = divp + "<tr bgcolor='#F8F8F8'>";
		divp = divp + "<td align='center'>" + (mi + 1) + "</td>";
		divp = divp + "<td align='center'>" + past_score[mi].val[i] + "</td>";
		divp = divp + "<td align='center'>" + past_rank[mi].val[i] + "</td>";
	}
	divp = divp + "</tr></table></td></tr></table>";
	document.getElementById('ply_table').innerHTML = divp;
}

function semi_info() {
	var menuid1 = document.getElementById("semi_drop1");
	var menuid2 = document.getElementById("semi_drop2");
	var menuid3 = document.getElementById("semi_drop3");
	var ply1 = 1000;
	var ply2 = 1000;
	var ply3 = 1000;
	for (i = 0; i < players; i++) {
		if (player_list[i] == menuid1.options[menuid1.selectedIndex].value)
			ply1 = i;
		if (player_list[i] == menuid2.options[menuid2.selectedIndex].value)
			ply2 = i;
		if (player_list[i] == menuid3.options[menuid3.selectedIndex].value)
			ply3 = i;
	}
	divplycom = "";
	divplycom = divplycom + "<table border ='1' align='center'><tr bgcolor='00FFE0'><th>Position</th><th>Teams</th>";
	if (ply1 != 1000)
		divplycom = divplycom + "<th>" + player_list[ply1] + " Selection</th>"; //.toUpperCase()
	if (ply2 != 1000)
		divplycom = divplycom + "<th>" + player_list[ply2] + " Selection</th>"; //.toUpperCase()
	if (ply3 != 1000)
		divplycom = divplycom + "<th>" + player_list[ply3] + " Selection</th>"; //.toUpperCase()
	divplycom = divplycom + "</tr>";
	for (i = 0; i < 4; i++) {
		divplycom = divplycom + "<tr><td align='center'>Semi Finalist " + (i + 1) + "</td><td>" + teams_list[teams_list_st.indexOf(semi_result[i])] + "</td>";
		if (ply1 != 1000) {
			if (picks[ply1].pick[r4_end + i] == semi_result[i])
				divplycom = divplycom + "<td  bgcolor='lime'>";
			else if (picks[ply1].pick[r4_end + i] == semi_result[0] || picks[ply1].pick[r4_end + i] == semi_result[1] || picks[ply1].pick[r4_end + i] == semi_result[2] || picks[ply1].pick[r4_end + i] == semi_result[3])
				divplycom = divplycom + "<td  bgcolor='silver'>";
			else
				divplycom = divplycom + "<td>";
			divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply1].pick[r4_end + i])] + "</td>";
		}
		if (ply2 != 1000) {
			if (picks[ply2].pick[r4_end + i] == semi_result[i])
				divplycom = divplycom + "<td  bgcolor='lime'>";
			else if (picks[ply2].pick[r4_end + i] == semi_result[0] || picks[ply2].pick[r4_end + i] == semi_result[1] || picks[ply2].pick[r4_end + i] == semi_result[2] || picks[ply2].pick[r4_end + i] == semi_result[3])
				divplycom = divplycom + "<td  bgcolor='silver'>";
			else
				divplycom = divplycom + "<td>";
			divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply2].pick[r4_end + i])] + "</td>";
		}
		if (ply3 != 1000) {
			if (picks[ply3].pick[r4_end + i] == semi_result[i])
				divplycom = divplycom + "<td  bgcolor='lime'>";
			else if (picks[ply3].pick[r4_end + i] == semi_result[0] || picks[ply3].pick[r4_end + i] == semi_result[1] || picks[ply3].pick[r4_end + i] == semi_result[2] || picks[ply3].pick[r4_end + i] == semi_result[3])
				divplycom = divplycom + "<td  bgcolor='silver'>";
			else
				divplycom = divplycom + "<td>";
			divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply3].pick[r4_end + i])] + "</td>";
		}
	}
	for (; i < 6; i++) {
		divplycom = divplycom + "</tr><tr><td align='center'>Finalist " + (i - 3) + "</td><td>" + teams_list[teams_list_st.indexOf(semi_result[i])] + "</td>";
		if (ply1 != 1000) {
			if (picks[ply1].pick[r4_end + i] == semi_result[4] || picks[ply1].pick[r4_end + i] == semi_result[5])
				divplycom = divplycom + "<td  bgcolor='Aqua'>";
			else
				divplycom = divplycom + "<td>";
			divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply1].pick[r4_end + i])] + "</td>";
		}
		if (ply2 != 1000) {
			if (picks[ply2].pick[r4_end + i] == semi_result[4] || picks[ply2].pick[r4_end + i] == semi_result[5])
				divplycom = divplycom + "<td  bgcolor='Aqua'>";
			else
				divplycom = divplycom + "<td>";
			divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply2].pick[r4_end + i])] + "</td>";
		}
		if (ply3 != 1000) {
			if (picks[ply3].pick[r4_end + i] == semi_result[4] || picks[ply3].pick[r4_end + i] == semi_result[5])
				divplycom = divplycom + "<td  bgcolor='Aqua'>";
			else
				divplycom = divplycom + "<td>";
			divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply3].pick[r4_end + i])] + "</td>";
		}
	}
	divplycom = divplycom + "</tr><tr><td align='center'>Winner</td><td>" + teams_list[teams_list_st.indexOf(semi_result[6])] + "</td>";
	if (ply1 != 1000) {
		if (picks[ply1].pick[r4_end + i] == semi_result[i])
			divplycom = divplycom + "<td  bgcolor='Darkorange'>";
		else
			divplycom = divplycom + "<td>";
		divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply1].pick[r4_end + i])] + "</td>";
	}
	if (ply2 != 1000) {
		if (picks[ply2].pick[r4_end + i] == semi_result[i])
			divplycom = divplycom + "<td  bgcolor='Darkorange'>";
		else
			divplycom = divplycom + "<td>";
		divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply2].pick[r4_end + i])] + "</td>";
	}
	if (ply3 != 1000) {
		if (picks[ply3].pick[r4_end + i] == semi_result[i])
			divplycom = divplycom + "<td  bgcolor='Darkorange'>";
		else
			divplycom = divplycom + "<td>";
		divplycom = divplycom + teams_list[teams_list_st.indexOf(picks[ply3].pick[r4_end + i])] + "</td>";
	}
	divplycom = divplycom + "</tr></table>";
	document.getElementById('semitable').innerHTML = divplycom;
}

function home_button() {
	document.getElementById('ranks').style.display = '';
	document.getElementById('homediv').style.display = '';
	document.getElementById('schedulediv').style.display = 'none';
	document.getElementById('resultsdiv').style.display = 'none';
	document.getElementById('comparediv').style.display = 'none';
	document.getElementById('tstatsdiv').style.display = 'none';
	document.getElementById('pstatsdiv').style.display = 'none';
	document.getElementById('preddiv').style.display = 'none';
	document.getElementById('semifinaldiv').style.display = 'none';
}

function schedule_button() {
	document.getElementById('ranks').style.display = '';
	document.getElementById('homediv').style.display = 'none';
	document.getElementById('schedulediv').style.display = '';
	document.getElementById('resultsdiv').style.display = 'none';
	document.getElementById('comparediv').style.display = 'none';
	document.getElementById('tstatsdiv').style.display = 'none';
	document.getElementById('pstatsdiv').style.display = 'none';
	document.getElementById('preddiv').style.display = 'none';
	document.getElementById('semifinaldiv').style.display = 'none';
}

function results_button() {
	document.getElementById('ranks').style.display = '';
	document.getElementById('homediv').style.display = 'none';
	document.getElementById('schedulediv').style.display = 'none';
	document.getElementById('resultsdiv').style.display = '';
	document.getElementById('comparediv').style.display = 'none';
	document.getElementById('tstatsdiv').style.display = 'none';
	document.getElementById('pstatsdiv').style.display = 'none';
	document.getElementById('preddiv').style.display = 'none';
	document.getElementById('semifinaldiv').style.display = 'none';
}

function compare_button() {
	document.getElementById('ranks').style.display = 'none';
	document.getElementById('homediv').style.display = 'none';
	document.getElementById('schedulediv').style.display = 'none';
	document.getElementById('resultsdiv').style.display = 'none';
	document.getElementById('comparediv').style.display = '';
	document.getElementById('tstatsdiv').style.display = 'none';
	document.getElementById('pstatsdiv').style.display = 'none';
	document.getElementById('preddiv').style.display = 'none';
	document.getElementById('semifinaldiv').style.display = 'none';
}

function tstats_button() {
	document.getElementById('ranks').style.display = '';
	document.getElementById('homediv').style.display = 'none';
	document.getElementById('schedulediv').style.display = 'none';
	document.getElementById('resultsdiv').style.display = 'none';
	document.getElementById('comparediv').style.display = 'none';
	document.getElementById('tstatsdiv').style.display = '';
	document.getElementById('pstatsdiv').style.display = 'none';
	document.getElementById('preddiv').style.display = 'none';
	document.getElementById('semifinaldiv').style.display = 'none';
}

function pstats_button() {
	document.getElementById('ranks').style.display = '';
	document.getElementById('homediv').style.display = 'none';
	document.getElementById('schedulediv').style.display = 'none';
	document.getElementById('resultsdiv').style.display = 'none';
	document.getElementById('comparediv').style.display = 'none';
	document.getElementById('tstatsdiv').style.display = 'none';
	document.getElementById('pstatsdiv').style.display = '';
	document.getElementById('preddiv').style.display = 'none';
	document.getElementById('semifinaldiv').style.display = 'none';
}

function prediction_button() {
	document.getElementById('ranks').style.display = '';
	document.getElementById('homediv').style.display = 'none';
	document.getElementById('schedulediv').style.display = 'none';
	document.getElementById('resultsdiv').style.display = 'none';
	document.getElementById('comparediv').style.display = 'none';
	document.getElementById('tstatsdiv').style.display = 'none';
	document.getElementById('pstatsdiv').style.display = 'none';
	document.getElementById('preddiv').style.display = '';
	document.getElementById('semifinaldiv').style.display = 'none';
}

function Semi_Final_button() {
	document.getElementById('ranks').style.display = 'none';
	document.getElementById('homediv').style.display = 'none';
	document.getElementById('schedulediv').style.display = 'none';
	document.getElementById('resultsdiv').style.display = 'none';
	document.getElementById('comparediv').style.display = 'none';
	document.getElementById('tstatsdiv').style.display = 'none';
	document.getElementById('pstatsdiv').style.display = 'none';
	document.getElementById('preddiv').style.display = 'none';
	document.getElementById('semifinaldiv').style.display = '';
}


