const calculateTeamPoints = require('../calculateTeamPoints');
const players = require('./__data__/players.json');
describe('calculateTeamPoints(players)', () => {
    it('Should return: [{team: "green", points: 40},{team: "red", points: 20},{team: "blue", points: 10}]', function(){
        expect(calculateTeamPoints(players)).toEqual([
            {
                team: 'green',
                points: 40
            },
            {
                team: 'red',
                points: 20
            },
            {
                team: 'blue',
                points: 10
            }
        ]);
    });
});