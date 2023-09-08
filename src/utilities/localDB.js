




// task management

const getTask = () => {
    let taskInfo = [];

    const taskData = localStorage.getItem('taskData');
    if (taskData) {
        taskInfo = JSON.parse(taskData);
    }
    return taskInfo;
}

const addTask = (task) => {

    const taskInfo = getTask();
    //const id = taskInfo.length + 1;
    //console.log(id);
    //const newTaskData = { taskId: id, ...task };
    //console.log(newTaskData);
    taskInfo.push(task);

    localStorage.setItem('taskData', JSON.stringify(taskInfo));
}

// find team task
const findTeamTask = (teamId) => {
    const tasks = getTask();
    const teamTask = tasks.filter(item => item.teamId === teamId);
    return teamTask;
}





// add user

const getUser = () => {
    let userInfo = [];

    const userData = localStorage.getItem('userInfo');
    if (userData) {
        userInfo = JSON.parse(userData);
    }
    return userInfo;
}

const addUser = (user) => {
    const userInfo = getUser();
    //console.log(teamInfo)
    //console.log(team);
    const id = userInfo.length + 1;
    //console.log(id);

    // here, I make a admin as who is a first user.
    let role = '';
    if (userInfo.length === 0) {
        role = "admin";
    }
    else {
        role = "user";
    }

    const newUserData = { userId: id, ...user, role };
    //console.log(newTeamData);

    userInfo.push(newUserData);

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}


// find a user from local storage
const findUser = (email) => {
    const users = getUser();
    const user = users?.find(i => i.email === email);
    console.log(email);
    return user;
}

// find all team of a specific user
const findAllTeam = (email) => {

    const teamDetails = getTeamCollaborationDetails();
    const teamInfo = getTeam();
    //const userTeamDetails = teamDetails.filter((de) => de.email === email);
    const teamIds = teamDetails.filter(item => item.email === email).map(item => item.teamId);
    console.log(teamIds);

    const findTeams = teamInfo.filter(item => teamIds.includes(item.teamId));
    console.log(findTeams);
    return findTeams;
    
}


// find a role 
const findRole = (email) => {
    const users = getUser();
    const user = users?.find(item => item.email === email);
    let role = "";
    if (user) {
        role = user.role;
    }
    return role;

}

// add member in team details to collaborate

const addMemberToTeamCollaborate = (details) => {
    const teamDetails = getTeamCollaborationDetails();
    //const id = teamDetails.length + 1;
    //console.log(id);
    //const newDetails = { teamDetailsId: id, ...details };
    //console.log(newTeamData);

    teamDetails.push(details);

    localStorage.setItem('teamDetails', JSON.stringify(teamDetails));
}

const getTeamCollaborationDetails = () => {
    let teamDetails = [];

    const teamDetailsData = localStorage.getItem('teamDetails');
    if (teamDetailsData) {
        teamDetails = JSON.parse(teamDetailsData);
    }
    return teamDetails;
}



// team management

const getTeam = () => {
    let teamInfo = [];

    const teamData = localStorage.getItem('teamInfo');
    if (teamData) {
        teamInfo = JSON.parse(teamData);
    }
    return teamInfo;
}

const addTeam = (team) => {

    const teamInfo = getTeam();
    //console.log(teamInfo)
    //console.log(team);
   // const id = teamInfo.length + 1;
    //console.log(id);
   // const newTeamData = { teamId: id, ...team };
    //console.log(newTeamData);

    teamInfo.push(team);

    localStorage.setItem('teamInfo', JSON.stringify(teamInfo));

}


// find team member

const findTeamMember = (teamId) => {
    const teamDetails = getTeamCollaborationDetails();
    const teamMembers = teamDetails.filter(item => item.teamId === teamId);
    const result = teamMembers.map(item => ({ name: item.name, email: item.email }));
    return result;

}


// assign task
const assignTask = (taskId, email) => {
    const tasks = getTask();
    const updatedTasks = tasks.map(item => {
        if (item.taskId === taskId) {
            return {
                ...item,
                assignTask: email,
                progress: 1,
                mark:1
            };
        }
        return item;
    });
    localStorage.setItem('taskData', JSON.stringify(updatedTasks));

}

// submit task
const submitTask = (taskId) => {
    const tasks = getTask();
    const updatedTasks = tasks.map(item => {
        if (item.taskId === taskId) {
            return {
                ...item,
                progress: 2,
                mark:2
            };
        }
        return item;
    });
    localStorage.setItem('taskData', JSON.stringify(updatedTasks));
}

// find member for invitation 
const findMemberToInvite = (teamId) => {
    const users = getUser();
    const teamDetails = getTeamCollaborationDetails();
    //console.log(teamDetails);
    const invitedMember = teamDetails.filter(item => item.teamId == teamId);
    //console.log(invitedMember);
    const userIds = invitedMember.map(item => item.userId);
    //console.log(userIds);
    const findMember = users.filter(item => !userIds.includes(item.userId));
    //console.log(findMember);
    return findMember;
}

// find each team member
const findATeamMember = (teamId) => {
    const teamDetails = getTeamCollaborationDetails();
    const members = teamDetails.filter(item => item.teamId == teamId);
    const userIds = members.map(item => item.userId);

    const users = getUser();
    const findMember = users.filter(item => userIds.includes(item.userId));

    return findMember;
}


export {
    addTeam,
    addTask,
    addUser,
    getTask,
    getTeam,
    getUser,
    findUser,
    addMemberToTeamCollaborate,
    getTeamCollaborationDetails,
    findAllTeam,
    findRole,
    findTeamTask,
    findTeamMember,
    assignTask,
    submitTask,
    findMemberToInvite,
    findATeamMember,



}
