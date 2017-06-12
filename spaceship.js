class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = crew.length === 0 ? true : false
    this.phasersCharge = 'uncharged'

    if (crew.length > 0) {
      for (var i = 0; i < crew.length; i++) {
        crew[i].currentShip = this
      }
    }
  }

}
