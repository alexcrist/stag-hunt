# Stag Hunt

## How to devlop

* Open two terminal tabs

* In one, run `yarn start:dev`
  * This starts up the back end
  * If a change is made to the back end files, the server restarts automatically

* In the other tab, run `yarn bundle:dev`
  * This bundles all the front end .js files into a single `bundle.js` payload
    which can be served to the front end
  * If a change is made to the front end files, the bundler will rerun automatically

## TODO

* Splash screen, "Hunt the stag together (wasd)"
* Hunger bar
* Collision detection with animals
  * Eat
  * Respawn
* Feedback of succesful catch
* Deploy
* Hype
* Animal meandering
* Back drop (maintain pixel aesthetic)
  * Lake / river (obstacle, slower speed)
* Document code

## Ideas

### The race

Make the stag-hunt a race to get points. Each player is not racing against one another, but aganist a global scoreboard. A rabbit is worth 1 point, a stag is worth 10 points. Once a player gets 100 points, their time is recorded and entered into a global stag-hunt leaderboard. Although each player is working individually, they should go for the stag together to each get faster times. This hopefully emulates the stag-hunt situation realistically.

### Gamification

* Randomize animal speed
* Randomize animal rewards
* Have animals slow down over time (tire?)
* Record level of cooperation along with final score?
* Allow some kind of user generated content? Setting up obstacles?

### Stretch ideas

* Procedurally generated infinite background??

### More games

Create a suite of stag-hunt style games for different game theory games (just games with Nash equilibria that can involve cooperation rather than only defection)

* ["Battle of the Sexes"](https://en.wikipedia.org/wiki/Battle_of_the_sexes_(game_theory)) (with coin flipping device to promote a "correlated equilibrium")
