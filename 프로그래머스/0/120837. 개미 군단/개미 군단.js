function solution(hp) {
  var answer = 0;
  const generalAntDam = 5;
  const soldierAntDam = 3;
  const workingAntDam = 1;

  answer += Math.floor(hp / generalAntDam);
  hp %= generalAntDam;

  answer += Math.floor(hp / soldierAntDam);
  hp %= soldierAntDam;

  answer += Math.floor(hp / workingAntDam);

  return answer;
}