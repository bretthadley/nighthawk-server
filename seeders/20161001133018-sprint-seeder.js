const makeSprints = () => {
    const sprints = [];
    const sprintCount = 1;

    for(let i = 1; i <= sprintCount; i++) {
        sprints.push({
            id: i,
            title: `Sprint Title ${i}`,
            description: `Sprint Description ${i} Sprint Description ${i} Sprint Description ${i} Sprint Description ${i}`,
            state: 'planning',
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }

    return sprints;
};

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('sprint', makeSprints(), {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('sprint', null, {});
  }
};
