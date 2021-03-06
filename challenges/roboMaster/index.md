RoboMaster is an international engineering / programming / eSports competition for university students. The tournament is an annual event, with the finals taking place in Shenzhen, China. This is the second year that the event has been livestreamed with English language commentary.

Each team builds, maintains, and operates a set of bots that compete in a game that's been described as a MOBA / FPS that uses reality as its graphics and physics engine. Unlike some other robot battle competitions, the bots aren't aiming to destroy each other; they fire small pellets at pressure sensors, and their health points are managed through software.

While largely unknown worldwide, the RoboMaster competition is a big deal in China, and due to its highly technical nature, it's seen as a proving ground for some of the brightest young minds in the STEM field.

standard infantry bots

The rules of RoboMaster are quite complicated, but to get a feel for the game, we'll look at a simulation of a simplified version. You might find it helpful to watch a few matches before continuing.

Each team has 5 bots - 3 standard infantry, 1 hero (heavy damage dealer), and 1 engineer (support unit). They also have a base, which the bots aim to protect. The game ends when one team defeats the opponent's base, or when the 7-minute timer has elapsed. If the time ends, the winner is determined by which base has more health points remaining. In the event of a tie, the team who took less total damage overall wins.

The bots on each team are numbered - bots 1, 4, and 5 are standard infantry, 2 is the hero, and 3 is the engineer. They can use two types of ammunition - 17mm rounds that deal 50 HP of damage, and 42mm rounds that deal 500 HP. The team's base cannot take any damage until at least one of their bots has been defeated (ie: once it reaches 0 HP). Here are some specifications for each type of bot:

Standard

1000 HP
can fire 17mm rounds
Hero

2000 HP
can fire 17mm or 42mm rounds
Engineer

5000 HP
can tow or reload other bots, but cannot fire
Base

10000 HP
does not take damage until the team has lost at least one bot
Each team also has an aerial drone and an automated sentry gun, and there are additional game mechanics (such as damage bonuses, healing, and leveling up), but to keep this challenge relatively simple we'll be disregarding all of those elements.

Given a log of all the shots registered by the bots' sensors, our goal is to determine which team won the match. The data is provided in an array shots, containing 3-element arrays of strings in the format [<bot that fired>, <bot that got hit>, <type of ammo fired>]. Note that these are logs of shots that were landed, but it doesn't necessarily mean that damage was dealt (eg: the base can receive shots before it becomes vulnerable). Also note that friendly fire is allowed, so it's possible for each team to damage their own bots.

Example

For shots = [["blue 1", "red 3", "17mm"], ["blue 2", "red 3", "42mm"], ["red 2", "blue 1", "42mm"], ["blue 2", "red 1", "42mm"], ["blue 2", "red 5", "42mm"], ["red 2", "blue 1", "42mm"], ["red 5", "blue base", "17mm"], ["blue 2", "red 1", "17mm"]], the output should be roboMaster(shots) = "red"

Although the blue team took less total damage, their base has less HP, so the red team wins.

For shots = [["red 1", "blue base", "17mm"], ["red 2", "blue base", "42mm"], ["blue 2", "red 3", "42mm"], ["blue 2", "red 3", "42mm"], ["blue 4", "red 2", "17mm"], ["blue 2", "red 4", "42mm"]], the output should be roboMaster(shots) = "blue"

The red team landed shots on the blue base, but since no blue units had been defeated, the base did not take damage. So the blue team wins since they took less total damage overall.

For shots = [["red 4", "blue 1", "17mm"], ["blue 1", "red 5", "17mm"]], the output should be roboMaster(shots) = "draw"

Both teams' bases still have full HP, and both teams only took 50 HP in total damage, so this round is a draw.

Input / Output

[execution time limit] 4 seconds (js)

[input] array.array.string shots

An array of 3-element arrays of strings containing data about each of the shots landed throughout the match, in chronological order. Each 3-element array describes which bot fired the shot, which bot was shot, and what size of pellet was fired.

Guaranteed constraints:
0 ≤ shots.length ≤ 1000
shots[i].length = 3
shots[i][0] ∈ {"red 1", "red 2", "red 4", "red 5", "blue 1", "blue 2", "blue 4", "blue 5"}
shots[i][1] ∈ {"red 1", "red 2", "red 3", "red 4", "red 5", "red base", "blue 1", "blue 2", "blue 3", "blue 4", "blue 5", "blue base"}
shots[i][2] ∈ {"17mm", "42mm"}

[output] string

A string representing the winner of the game ("red", "blue" or "draw").
