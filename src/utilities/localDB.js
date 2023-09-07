
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
    const id = teamInfo.length + 1;
    //console.log(id);
    const newTeamData = { teamId: id, ...team };
    //console.log(newTeamData);

    teamInfo.push(newTeamData);

    localStorage.setItem('teamInfo', JSON.stringify(teamInfo));

}



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
    //console.log(taskInfo)
   // console.log(task);
    const id = taskInfo.length + 1;
    //console.log(id);
    const newTaskData = { taskId: id, ...task };
    //console.log(newTaskData);

    taskInfo.push(newTaskData);

    localStorage.setItem('taskData', JSON.stringify(taskInfo));


}




export {
    addTeam,
    addTask,
    addUser,
    getTask,
    getTeam,
    getUser,
}