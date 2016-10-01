const makeTasks = () => {
    const tasks = [];
    const sprintCount = 1;
    const taskCount = 10;
    const subtaskCount = 5;
    let taskId = 1;

    for(let i = 1; i <= sprintCount; i++) {
        for(let j = 1; j <= taskCount; j++) {
            console.log(taskId);
            tasks.push(createTask(taskId, i));
            taskId += 1;

            for(let k = 1; k <= subtaskCount; k++) {
                console.log(taskId);
                tasks.push(createSubtask(taskId, i, j));
                taskId += 1;
            }
        }
    }

    return tasks;
};

const createTask = (id, sprintId) => {
    return {
        id,
        sprintId,
        parentTaskId: null,
        type: 'story',
        title: `Story Title ${id}`,
        description: `Story Description ${id} Story Description ${id} Story Description ${id} Story Description ${id}`,
        estimatedTime: null,
        loggedTime: null,
        createdAt: new Date(),
        updatedAt: new Date()
    }
};

const createSubtask = (id, sprintId, parentTaskId) => {
    return {
        id,
        sprintId,
        parentTaskId,
        type: 'task',
        title: `Task Title ${id}`,
        description: `Task Description ${id} Task Description ${id} Task Description ${id} Task Description ${id}`,
        estimatedTime: 60,
        loggedTime: 15,
        createdAt: new Date(),
        updatedAt: new Date()
    }
};

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('task', makeTasks(), {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('task', null, {});
    }
};

