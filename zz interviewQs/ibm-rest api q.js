
// ⚽️ Mock Question: EPL Points Calculator (Simulated)
// You are given data from a 3rd party API containing match statistics 
// for football teams. Each team has the number of wins, draws, and losses.

// Your task is:

// Fetch the data, compute each team's total points using the formula:
//     points = win × 3 + draw × 1 + loss × 0
// Return the team name which has the highest points.

// Mock Data (Use this directly — no need to fetch):
const apiResponse = {
    data: [
        { team: "Arsenal", win: "7", draw: "2", loss: "1" },
        { team: "Chelsea", win: "6", draw: "3", loss: "1" },
        { team: "Manchester United", win: "8", draw: "1", loss: "1" },
        { team: "Liverpool", win: "5", draw: "5", loss: "0" }
    ]
};

// 📤 Expected Output:
// {
//   topTeam: "Manchester United"
// }

function getTopTeam(data) {
    let input = data?.data;
    let points = 0;
    let name;

    for (let team of input) {
        let win = parseInt(team?.win);
        let draw = parseInt(team?.draw);
        let loss = parseInt(team?.loss);
        let teamPoint = (win * 3) + (draw * 1) + (loss * 0);
        if (points <= teamPoint) {
            points = teamPoint;
            name = team?.team;
        }
    }
    return name;
}

console.log(getTopTeam(apiResponse));