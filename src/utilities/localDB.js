




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
    const user = users.filter(i => i.email === email);
    console.log(user);
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
    const user = users.filter(item => item.email === email);
    const role = user[0].role;
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
    findTeamTask

}

