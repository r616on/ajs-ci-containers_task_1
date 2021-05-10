import Team from './Team';
import Bowerman from './person/Bowerman';
import Swordsman from './person/Swordsman';
import Magician from './person/Magician';
import Daemon from './person/Daemon';
import Zombie from './person/Zombie';
import Undead from './person/classUndead';

const bowerman = new Bowerman('Bower');
const swordsman = new Swordsman('Sword');
const magician = new Magician('Magic');
const daemon = new Daemon('daemon');
const zombie = new Zombie('Zombie');
const undead = new Undead('Unded');

const team = new Team();
team.add(zombie);
team.add(daemon);
team.addAll(bowerman, swordsman, magician, undead);
console.log(team.members);
