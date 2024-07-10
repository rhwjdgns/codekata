function solution(survey, choices) {
    const score = {
        'R': 0, 'T': 0,
        'C': 0, 'F': 0,
        'J': 0, 'M': 0,
        'A': 0, 'N': 0
    };

    const choiceScore = [0, 3, 2, 1, 0, 1, 2, 3];

    for (let i = 0; i < survey.length; i++) {
        const [type1, type2] = survey[i];
        const choice = choices[i];
        if (choice < 4) {
            score[type1] += choiceScore[choice];
        } else if (choice > 4) {
            score[type2] += choiceScore[choice];
        }
    }

    let result = '';
    result += (score['R'] >= score['T']) ? 'R' : 'T';
    result += (score['C'] >= score['F']) ? 'C' : 'F';
    result += (score['J'] >= score['M']) ? 'J' : 'M';
    result += (score['A'] >= score['N']) ? 'A' : 'N';

    return result;
}

