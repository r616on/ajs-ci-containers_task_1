import Team from '../Team';
import Bowerman from '../person/Bowerman';
import Zombie from '../person/Zombie';

const bowerman = new Bowerman('Bower');
const zombie = new Zombie('Zombie');

test('test add', () => {
  const team = new Team();
  const data = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bower',
    type: 'Bowerman',
  };
  team.add(bowerman);
  team.add(bowerman);
  expect(team.members.size).toBe(1);
  expect(team.members).toContainEqual(data);
});

test('test addAll', () => {
  const team = new Team();
  const data1 = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bower',
    type: 'Bowerman',
  };
  const data2 = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Zombie',
    type: 'Zombie',
  };
  team.addAll(bowerman, zombie, zombie);
  expect(team.members.size).toBe(2);
  expect(team.members).toContainEqual(data1);
  expect(team.members).toContainEqual(data2);
});

test('test toArray', () => {
  const team = new Team();
  team.add(bowerman);
  team.add(zombie);
  team.add(bowerman);
  expect(team.toArray().length).toBe(2);
  expect(Array.isArray(team.toArray())).toBe(true);
});
