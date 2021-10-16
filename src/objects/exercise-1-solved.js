/**
 * Linking objects with Object.create()
 *
 * Create three objects:
 *  human
 *  manager
 *  engineer
 *
 * humans have a "name" property unique to each of them
 * and they can all walk() and talk(words)
 *
 *  walk() just logs out: "{name} is walking", where name is the human's name
 *  talk(words) just logs out: "{name} says: {words}"
 *
 * managers can manage(engineer)
 *  This function will just log:
 *  "{manager} says: Code faster, {engineer}!"
 *  where manager is the manager's name
 *  and engineer is the engineer's name
 * This _should_ ultimately use the delegated human's talk() method...
 *
 * engineers can code()
 *  This just logs out "{name} is coding", where name is the engineer's name
 *
 * Important: manager and engineers will delegate to humans
 * This way a manager can both "manage()" and "walk()" and "talk()"
 *
 * Make this code work with your three object chums:
 */

const human = {
  walk() {
    console.log(`${this.name} is walking`);
  },
  talk(words) {
    console.log(`${this.name} says: ${words}`);
  },
};

// @todo change the engineer, it delegates to human
// @todo it should have a code() method
const engineer = Object.create(human);
engineer.code = function () {
  console.log(`${this.name} is coding`);
};

// @todo create a manager, it delegates to human
// @todo it should have a manage(humanInstance) method
const manager = Object.create(human);
manager.manage = function (person) {
  this.talk(`Code faster, ${person.name}!`);
};

// creating "instances" of each...
const ryan = Object.create(engineer);
const tim = Object.create(manager);

// @todo set their own "name" properties!
ryan.name = "Ryan";
tim.name = "Tim";

// @test - manually verify: this should log out "Ryan is coding"
ryan.code();
// @test - manually verify: this should log out "Tim says: Code faster, Ryan!"
tim.manage(ryan);

/**
 * Bonus!
 *
 * We want to augment a human so they can actually behave more like a robot...
 *
 * Make a new function:
 *   robotish(human)
 *
 * This function will accept any object (really) and augment it, making it behave more like a robot.
 *
 * It does this by adding on or merging in "robot" behaviors, which should include:
 *  dance() // logs out "{name} is dancing like a robot"
 *
 * You can do this by setting properties on the human object directly, or using Object.assign() to merge
 */
function robotish(human) {
    human.dance = function() {
       console.log(`${this.name} is dancing like a robot`);
    };
    
    // could also use Object.assign
}

// @todo - uncomment me to test
// @test - this should log out "Tim is dancing like a robot"
robotish(tim);
tim.dance();

// @test - this should fail...
//ryan.dance();