function solution(id_list, report, k) {
    const reportCounts = {};
    const userReports = {};
    const mailCounts = Array(id_list.length).fill(0);

    id_list.forEach(id => {
        reportCounts[id] = 0;
        userReports[id] = new Set();
    });

    report.forEach(entry => {
        const [user, target] = entry.split(' ');
        if (!userReports[user].has(target)) {
            userReports[user].add(target);
            reportCounts[target] += 1;
        }
    });

    // 정지된 유저 리스트
    const bannedUsers = new Set();
    for (let user in reportCounts) {
        if (reportCounts[user] >= k) {
            bannedUsers.add(user);
        }
    }

    id_list.forEach((user, index) => {
        userReports[user].forEach(reportedUser => {
            if (bannedUsers.has(reportedUser)) {
                mailCounts[index] += 1;
            }
        });
    });
    return mailCounts;
}
