var mySidebar = document.getElementById("mySidebar");
var overlayBg = document.getElementById("myOverlay");
// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

var TR1_teams = steam_short; // ["STSI", "PITC", "PUTC", "INM", "CMI", "CITC", "Others"];
var TR2_teams = TR1_teams; // ;P
var TR3_teams = TR2_teams; // ;P
var TR4_teams = TR3_teams; // ;P
var TR5_teams = TR4_teams; // ;P

var TR1_count = [30, 27, 33, 35, 28, 30, 35] // Manually update for first round;
var TR2_count = [30, 16, 26, 21, 31, 30, 35];
var TR3_count = [16, 23, 17, 23, 19, 30, 35];
var TR4_count = [15, 23, 14, 18, 9, 30, 35];
var TR5_count = [16, 14, 23, 12, 19, 30, 35];

var ColorsObj = {
    "ned": "#EF6C00",
    "sl": "#1B2E96",
    "uae": "#CE963F",
    "nam": "#174CC5",
    "ire": "#30742D",
    "wi": "#7D1041",
    "scot": "#1D2338",
    "zim": "#CD151C",
    "eng": "#04064D",
    "nz": "#1F1F1F",
    "aus": "#0B661E",
    "afg": "#0954AF",
    "ban": "#00644C",
    "pak": "#206500",
    "ind": "#0057AF",
    "sa": "#0B5425"
};

// var ColorsArr = ['#EF6C00', '#1B2E96', '#CE963F', '#174CC5', '#30742D', '#7D1041', '#1D2338', '#CD151C', '#04064D', '#1F1F1F', '#0B661E', '#0954AF', '#00644C', '#206500', '#0057AF', '#0B5425']
var ColorsArr = Object.values(ColorsObj);
console.log(ColorsArr);

// var ColorClss = ['t20-ned', 't20-sl', 't20-uae', 't20-nam', 't20-ire', 't20-wi', 't20-scot', 't20-zim', 't20-eng', 't20-nz', 't20-aus', 't20-afg', 't20-ban', 't20-pak', 't20-ind', 't20-sa'];
var ColorClss = Object.keys(ColorsObj).map(function (k) {
    // console.log(k, ColorsObj[k]);
    return `t20-${k}`;
});
console.log(ColorClss);

function showPieChart(xArray, yArray, ID, chartTile, chartLegend, chartHeight, chartColors /* array eg. [red, blue]*/) {
    if (!chartLegend || chartLegend == null) { chartLegend = false; }
    var data = [{
        labels: xArray,
        values: yArray,
        // hole: .4,
        type: "pie",
        textinfo: "label+percent",
        insidetextorientation: "radial",
        marker: {
            colors: chartColors
        },
        automargin: true
    }];

    var layout = {
        title: chartTile,
        showlegend: chartLegend,
        height: chartHeight,
        margin: { "t": 50, "b": 20, "l": 1, "r": 1 }
    };

    Plotly.newPlot(ID, data, layout);
}

function showDonutPieChart(ID, chartTile, chartLegend, val1, lbl1, val2, lbl2, txt1, txt2) {
    var data = [{
        values: val1,
        labels: lbl1,
        textposition: 'inside',
        domain: { column: 0 },
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie',
        textinfo: "label+percent",
        insidetextorientation: "radial",
        automargin: true
    }, {
        values: val2,
        labels: lbl2,
        textposition: 'inside',
        domain: { column: 1 },
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie',
        textinfo: "label+percent",
        insidetextorientation: "radial",
        automargin: true
    }];

    var layout = {
        title: chartTile,
        annotations: [{
            font: { size: 20 },
            showarrow: false,
            text: txt1,
            x: 0.2,
            y: 0.5
        },
        {
            font: { size: 20 },
            showarrow: false,
            text: txt2,
            x: 0.80,
            y: 0.5
        }],
        height: 190,
        showlegend: chartLegend,
        grid: { rows: 1, columns: 2 },
        margin: { "t": 30, "b": 5, "l": 0, "r": 0 }

    };

    Plotly.newPlot(ID, data, layout);
}

function showVerDblBarChart(x1, y1, x2, y2, ID, chartTile, chartLegend, trace1Color, trace2Color, name1, name2) {
    var trace1 = {
        // x: ["Elec", "RP", "WEC", "WPRS", "RoS"],
        x: x1,
        y: y1,
        type: 'bar',
        name: name1,
        marker: {
            color: trace1Color,
            opacity: 0.7
        }
    };

    var trace2 = {
        // x: ["Elec", "RP", "WEC", "WPRS", "RoS"],
        x: x2,
        y: y2,
        type: 'bar',
        name: name2,
        marker: {
            color: trace2Color,
            opacity: 0.8
        }
    };

    var data = [trace1, trace2];

    var layout = {
        title: chartTile,
        xaxis: {
            tickangle: -45
        },
        showlegend: chartLegend,
        barmode: 'group'
    };

    Plotly.newPlot(ID, data, layout);
}

function showHorBarChart(xArray, yArray, ID, chartTile, barColor) {
    if (!xArray || xArray == null) { xArray = TR1_count; }
    if (!yArray || yArray == null) { yArray = TR1_teams; }
    if (!chartTile) { chartTile = "undefined"; }
    if (!barColor) { barColor = "rgba(255,0,0,0.6)"; }
    var data = [{
        x: xArray,
        y: yArray,
        type: "bar",
        orientation: "h",
        marker: { color: barColor }
    }];
    var layout = {
        title: chartTile,
        height: "355"
    };

    Plotly.newPlot(ID, data, layout);
}

function showVerBarChart(xArray, yArray, ID, chartTile, barColor) {
    if (!xArray || xArray == null) { xArray = TR1_teams; }
    if (!yArray || yArray == null) { yArray = TR1_count; }
    if (!chartTile) { chartTile = "undefined"; }
    if (!barColor) { barColor = "rgba(255,0,0,0.6)"; }
    var data = [{
        x: xArray,
        y: yArray,
        type: "bar",
        marker: { color: barColor }
    }];
    var layout = {
        title: chartTile
    };

    Plotly.newPlot(ID, data, layout);
}

function teamGraph(ID) {
    var trace1 = {
        x: ["R1", "R2", "R3", "R4", "R5"],
        y: [TR1_count[0], TR2_count[0], TR3_count[0], TR4_count[0], TR5_count[0]],
        mode: 'lines+markers',
        type: 'scatter',
        name: steam_short[0]
    };

    var trace2 = {
        x: ["R1", "R2", "R3", "R4", "R5"],
        y: [TR1_count[1], TR2_count[1], TR3_count[1], TR4_count[1], TR5_count[1]],
        mode: 'lines+markers',
        type: 'scatter',
        name: steam_short[1]
    };

    var trace3 = {
        x: ["R1", "R2", "R3", "R4", "R5"],
        y: [TR1_count[2], TR2_count[2], TR3_count[2], TR4_count[2], TR5_count[2]],
        mode: 'lines+markers',
        type: 'scatter',
        name: steam_short[2]
    };

    var trace4 = {
        x: ["R1", "R2", "R3", "R4", "R5"],
        y: [TR1_count[3], TR2_count[3], TR3_count[3], TR4_count[3], TR5_count[3]],
        mode: 'lines+markers',
        type: 'scatter',
        name: steam_short[3]
    };

    var trace5 = {
        x: ["R1", "R2", "R3", "R4", "R5"],
        y: [TR1_count[4], TR2_count[4], TR3_count[4], TR4_count[4], TR5_count[4]],
        mode: 'lines+markers',
        type: 'scatter',
        name: steam_short[4]
    };

    var layout = {
        title: 'Team Participation Trend R1-R5',
        height: "396"
    };

    var data = [trace1, trace2, trace3, trace4, trace5];
    Plotly.newPlot(ID, data, layout);
}

function calcTeamSupport() {
    var mat1 = [];
    for (let i = 0; i < picks.length; i++) {
        const e = picks[i].pick;
        mat1[i] = e[i];
        console.log(i + " : " + e[0]);
    }
    console.log(mat1);
}

function update_match_info() {
    /*===========================*\
        Home Default values
    \*===========================*/
    var matid = document.getElementById("choose_match_id");
    if (matid.options[matid.selectedIndex].value == "default") {
        p = match_result.length;
        if (p >= matches)
            p = matches - 1;
    } else {
        var matnum = matid.options[matid.selectedIndex].value;
        p = parseInt(matnum) - 1;
    }

    document.getElementById("logo_teamA").innerHTML = "<img src='images/logo/" + team1[p].toLowerCase() + ".png'>";
    document.getElementById("logo_teamB").innerHTML = "<img src='images/logo/" + team2[p].toLowerCase() + ".png'>";
    document.getElementById("flag_teamA").innerHTML = "<img src='images/flag/" + team1[p].toLowerCase() + ".svg'>";
    document.getElementById("flag_teamB").innerHTML = "<img src='images/flag/" + team2[p].toLowerCase() + ".svg'>";

    document.getElementById("choose_teamA").innerHTML = teams_list_st[teams_list_st.indexOf(team1[p])];
    document.getElementById("choose_teamB").innerHTML = teams_list_st[teams_list_st.indexOf(team2[p])];

    document.getElementById("choose_teamA_count").innerHTML = team1_bets[p];
    document.getElementById("choose_teamB_count").innerHTML = team2_bets[p];

    document.getElementById("choose_teamA_container").className = "w3-container w3-padding-16 " + ColorClss[teams_list_st.indexOf(team1[p])];
    document.getElementById("choose_teamB_container").className = "w3-container w3-padding-16 " + ColorClss[teams_list_st.indexOf(team2[p])];

    if (Number(team1_bets[p]) > Number(team2_bets[p])) {
        document.getElementById("img_centered_text").setAttribute("style", "color:" + ColorsArr[teams_list_st.indexOf(team1[p])] + ";");
    } else {
        document.getElementById("img_centered_text").setAttribute("style", "color:" + ColorsArr[teams_list_st.indexOf(team2[p])] + ";");
    }

    showPieChart([teams_list_st[teams_list_st.indexOf(team1[p])], teams_list_st[teams_list_st.indexOf(team2[p])]], [team1_bets[p], team2_bets[p]], "choose_pie_chart", "Support", false, 347.5, [ColorsArr[teams_list_st.indexOf(team1[p])], ColorsArr[teams_list_st.indexOf(team2[p])]]);
    // showPieChart(TR1_teams, TR1_count, "myPlot_Pie_1", "Participation Round: 1", false, 450);
    showVerDblBarChart(steam_short, team1_steam_supp[p].steam, steam_short, team2_steam_supp[p].steam, "myPlot_bar_1", "Group Supports", true, ColorsArr[teams_list_st.indexOf(team1[p])], ColorsArr[teams_list_st.indexOf(team2[p])], team1[p], team2[p]);

    // showHorBarChart([80,56,22,3,9,6,2,2,0,4].reverse(), ["uae","LSG","RR","sl","RCB","KKR","ned","SRH","PBKS","MI"].reverse(), "myPlot_bar_2", "First team qualify for the finals", ["#4752a1", "#7fd2d8", "#CBA92B", "#00008B", "#EC1C24", "#2E0854", "#FFFF3C", "#FF822A", "#DCDDDF", "#004BA0"].reverse());
    // showHorBarChart([80,56,22,3,9,6,2,2,0,4].reverse(), ["uae","LSG","RR","sl","RCB","KKR","ned","SRH","PBKS","MI"].reverse(), "myPlot_bar_3", "Second team qualify for the finals", ["#4752a1", "#7fd2d8", "#CBA92B", "#00008B", "#EC1C24", "#2E0854", "#FFFF3C", "#FF822A", "#DCDDDF", "#004BA0"].reverse());

    // showPieChart(teams_list_st, [1, 2, 59, 3, 22, 1, 0, 0, 4, 0], "myPlot_bar_2", "First team qualify for the finals (R5)", true, 450, ColorsArr);
    // showPieChart(teams_list_st, [1, 1, 21, 3, 34, 3, 0, 9, 18, 2], "myPlot_bar_3", "Second team qualify for the finals (R5)", true, 450, ColorsArr);
    // showPieChart(teams_list_st, [4, 1, 38, 1, 17, 1, 1, 9, 17, 3], "final_winner_support_pie", "Support for Winner (R5)", true, 450, ColorsArr);

    // showDonutPieChart("tr_pie_1", "Participation Rate - Round 1 and 2", false, TR1_count, TR1_teams, TR2_count, TR2_teams, "R1", "R2");
    // showDonutPieChart("tr_pie_2", "Participation Rate - Round 3 and 4", false, TR3_count, TR3_teams, TR4_count, TR4_teams, "R3", "R4");
    // showDonutPieChart("tr_pie_3", "Participation Rate - Round 5", false, TR5_count, TR5_teams, null, null, "R5", "");

    // teamGraph("team_line_chart");

    // showVerBarChart(null, [17, 8, 12, 12, 6, 18, 2, 7], "myPlot_hor_bar_1", "Team Entries for ned", "rgba(255,0,0,0.6)");
    // showVerBarChart(null, [7, 2, 2, 5, 0, 5, 1, 0], "myPlot_hor_bar_2", "Team Entries for KKR", "rgba(0, 102, 255, 0.6)");
    console.log(team1_steam_supp[p].steam);
    console.log(team2_steam_supp[p].steam);

    const d = new Date();
    let date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
    document.getElementById("cur_date1").innerText = date;

    console.log(date.split("-").shift());
    console.log(dat[dat.length - 1].split("-").shift());

    if (Number(date.split("-").shift()) > Number(dat[dat.length - 1].split("-").shift()) && p == 69) {
        document.getElementById("logo_teamA").innerHTML = "<img src='images/q.png'>";
        document.getElementById("logo_teamB").innerHTML = "<img src='images/q.png'>";
        document.getElementById("flag_teamA").innerHTML = "<img src='images/p.svg'>";
        document.getElementById("flag_teamB").innerHTML = "<img src='images/p.svg'>";
        document.getElementById("img_centered_text").setAttribute("style", "color:" + ColorsObj.NA + ";");
    }
};

/*=================================*\
        Home Match Selection
\*=================================*/
var divChoose = "<label for='choose_match_id'>Choose Match:</label><select id = 'choose_match_id' onchange='update_match_info()'>";
divChoose = divChoose + "<option value='default'>Select Match</option>";
for (i = 0; i < matches; i++) {
    divChoose = divChoose + "<option value='" + (i + 1) + "'>Match " + (i + 1) + " : " + team1[i] + " vs " + team2[i] + "</option>";
}
divChoose = divChoose + "</select>";
document.getElementById('choose_round').innerHTML = divChoose;

/*==================================*\
        Home Top Individual Ranks
\*===================================*/
var divran = "<div id='top_player_ranks' style='width:100%;max-width:500px;height:450px;overflow:auto;'><table class='w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white'><tr class='w3-green'><th align='center'>&nbsp;</th><th align='center'>#</th><th align='center'>Player</th><th align='center'>Score</th></tr>";
for (j = 0; j < players; j++) {
    if (player_ranks_ranks[j] > 10) {
        break;
    }
    divran = divran + "<td><i class='fa fa-user w3-text-red w3-large'></i></td><td align ='center'>";
    if (j != 0 && player_score_ranks[j] == player_score_ranks[j - 1])
        divran = divran + "&nbsp";
    else
        divran = divran + player_ranks_ranks[j];

    divran = divran + "</td><td>" + player_list_ranks[j] + "</td><td align='center'>" + player_score_ranks[j] + "</td></tr>";
}
divran = divran + "</table></div>";
document.getElementById('top_player_ranks_group').innerHTML = divran;

/*==================================*\
        Home Top Team Ranks
\*==================================*/
console.log("Team average: " + steam_avg + " " + steam_short);
console.log("Team ranks: " + steam_list_ranks + " " + steam_score_ranks + " " + steam_ranks_ranks);

var divteamrank = "<table class='w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white'><tr class='w3-green'><th>&nbsp;</th><th>#</th><th>Team Name</th><th>Avg Score</th></tr>";
for (let q = 0; q < steam_list_ranks.length; q++) {
    let steam_list_team_ranks = [];
    steam_list_team_ranks[q] = steam[steam_short.indexOf(steam_list_ranks[q])];
    divteamrank = divteamrank + "<td><i class='fa fa-users w3-text-red w3-large'></i></td>";
    divteamrank = divteamrank + "<td align ='center'>" + steam_ranks_ranks[q] + "</td><td>" + steam_list_team_ranks[q] + "</td><td align='center'>" + steam_score_ranks[q] + "</td></tr>";
}

divteamrank = divteamrank + "</table>";
document.getElementById('top_team_ranks').innerHTML = divteamrank;

/*=============================*\
        Home Load Operations
\*=============================*/
update_match_info();