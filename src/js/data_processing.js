for (mi = 0; mi < match_result.length; mi++) {
	for (j = 0; j < players; j++) {
		if (match_result[mi] == picks[j].pick[mi]) {
			if (mi < r1_end)
				player_score[j]++;
			else if (mi >= r1_end && mi < r2_end)
				player_score[j] = player_score[j] + 2;
			else if (mi >= r2_end && mi < r3_end)
				player_score[j] = player_score[j] + 3;
			else if (mi >= r3_end && mi < r4_end)
				player_score[j] = player_score[j] + 4;
		}
		/*else if(match_result[mi] == 11)
		{
			if(mi<r1_end)
				player_score[j] = player_score[j] + 0.5;
			else
				player_score[j]++;
		}*/
		player_list_ranks[j] = player_list[j];
		player_score_ranks[j] = player_score[j];
		player_ranks_ranks[j] = 0;
		player_ranks[j] = 0;
	}
	sort_value(player_list_ranks, 0, players - 1, player_score_ranks);
	for (j = 0; j < players; j++) {
		if (j != 0 && player_score_ranks[j] == player_score_ranks[j - 1])
			player_ranks_ranks[j] = player_ranks_ranks[j - 1];
		else
			player_ranks_ranks[j] = j + 1;
	}
	for (j = 0; j < players; j++)
		for (k = 0; k < players; k++)
			if (player_list[j] == player_list_ranks[k])
				player_ranks[j] = player_ranks_ranks[k];
	for (j = 0; j < players; j++) {
		past_score[mi].val[j] = player_score[j];
		past_rank[mi].val[j] = player_ranks[j];
	}
}
//alert("1");
for (j = 0; j < players; j++) {
	for (i = 0; i < 4; i++)
		if (semi_result[i] == picks[j].pick[r4_end + i])
			player_score[j] = player_score[j] + 10;
		else if (semi_result[0] == picks[j].pick[r4_end + i] || semi_result[1] == picks[j].pick[r4_end + i] || semi_result[2] == picks[j].pick[r4_end + i] || semi_result[3] == picks[j].pick[r4_end + i])
			player_score[j] = player_score[j] + 7;
	for (; i < 6; i++)
		if (semi_result[4] == picks[j].pick[r4_end + i] || semi_result[5] == picks[j].pick[r4_end + i])
			player_score[j] = player_score[j] + 12;
	if (semi_result[6] == picks[j].pick[r4_end + i])
		player_score[j] = player_score[j] + 15;
}
for (j = 0; j < players; j++) {
	player_list_ranks[j] = player_list[j];
	player_score_ranks[j] = player_score[j];
	player_ranks_ranks[j] = 0;
	player_ranks[j] = 0;
	score_prad1[j] = player_score[j];
	score_prad2[j] = player_score[j];
}

sort_value(player_list_ranks, 0, players - 1, player_score_ranks);
for (j = 0; j < players; j++) {
	if (j != 0 && player_score_ranks[j] == player_score_ranks[j - 1])
		player_ranks_ranks[j] = player_ranks_ranks[j - 1];
	else
		player_ranks_ranks[j] = j + 1;
}
for (j = 0; j < players; j++)
	for (k = 0; k < players; k++)
		if (player_list[j] == player_list_ranks[k])
			player_ranks[j] = player_ranks_ranks[k];

for (i = 0; i < teams; i++) {
	tem_play[i] = 0;
	tem_won[i] = 0;
	tem_pts[i] = 0;
	supps1[i] = 0;
	supps2[i] = 0;
	supps3[i] = 0;
	supps[i] = 0;
	new_teams_list[i] = teams_list[i];
	new_teams_list1[i] = teams_list[i];
	for (j = 0; j < match_result.length; j++) {
		if (team1[j] == teams_list_st[i] || team2[j] == teams_list_st[i])
			tem_play[i]++;
		if (match_result[j] == teams_list_st[i]) {
			tem_won[i]++;
			tem_pts[i] = tem_pts[i] + 2;
		}
		else if (match_result[j] == 12)
			if (team1[j] == teams_list_st[i] || team2[j] == teams_list_st[i])
				tem_pts[i]++;
	}
	tem_won1[i] = tem_won[i];
	for (j = 0; j < players; j++) {
		for (k = 0; k < r1_end; k++)
			if (picks[j].pick[k] == teams_list_st[i])
				supps1[i]++;
		for (k = r1_end; k < r2_end; k++)
			if (picks[j].pick[k] == teams_list_st[i])
				supps2[i]++;
		for (k = r2_end; k < r3_end; k++)
			if (picks[j].pick[k] == teams_list_st[i])
				supps3[i]++;
		for (k = r3_end; k < r4_end; k++)
			if (picks[j].pick[k] == teams_list_st[i])
				supps4[i]++;
	}
	supps[i] = supps1[i] + supps2[i] + supps3[i] + supps4[i];
}
sort_value(new_teams_list, 0, tem_won.length - 1, tem_pts);


var q = match_result.length;
nex_scor = 1;
if (q > r1_end)
	nex_scor = 2;
if (q > r2_end)
	nex_scor = 3;
if (q > r3_end)
	nex_scor = 4;
for (i = 0; i < players; i++) {
	if (picks[i].pick[q] == team1[q])
		score_prad1[i] = score_prad1[i] + nex_scor;
	else if (picks[i].pick[q] == team2[q])
		score_prad2[i] = score_prad2[i] + nex_scor;
}
sort_value(list_prad1, 0, players - 1, score_prad1);
sort_value(list_prad2, 0, players - 1, score_prad2);


for (i = 0; i < steam_cnt; i++) {
	temp_score = 0;
	//temp_ply_avg = 0;
	for (j = 0; j < players; j++)
		if (player_steam_list[j] == steam_short[i]) {
			// for(m=0;m<match_result.length;m++) 
			// 	if(picks[j].pick[m] == "NS")
			// 		break;
			// if(m==match_result.length)
			// {
			steam_part[i]++;
			temp_score = temp_score + player_score[j];
			// }
		}
	//alert(steam_part[i]);
	steam_avg[i] = Math.round((temp_score / steam_part[i]) * 100) / 100;
	steam_list_ranks[i] = steam_short[i];
	steam_score_ranks[i] = steam_avg[i];
	steam_ranks_ranks[i] = 0;
	//	player_ranks[j] = 0;
}
sort_value(steam_list_ranks, 0, steam_cnt - 1, steam_score_ranks);
for (j = 0; j < steam_cnt; j++) {
	if (j != 0 && steam_score_ranks[j] == steam_score_ranks[j - 1])
		steam_ranks_ranks[j] = steam_ranks_ranks[j - 1];
	else
		steam_ranks_ranks[j] = j + 1;
}

//alert(steam_avg + " " + steam_short);
//alert(steam_list_ranks + " " + steam_score_ranks + " " + steam_ranks_ranks);