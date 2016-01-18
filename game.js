module.exports = {
  setup: function() {
    var creepFlags = undefined;
    var scoutFlags = undefined;
    Game.clearScoutFlags = function() {
      Game.getScoutFlags().forEach((flag) => {
        flag.remove();
      });
    };

    Game.getScoutFlags = function() {
      if (scoutFlags === undefined) {
        scoutFlags = Object.keys(Game.flags).filter(function(flagName) {
          return flagName.toLowerCase().indexOf('scout') !== -1;
        }).map(function(flagName) {
          return Game.flags[flagName];
        });
      }

      return scoutFlags;
    };
  };

  Game.getCreepFlags = function() {
    if(creepFlags === undefined) {
      creepFlags = Object.keys(Game.flags).filter(() => {
        return flag.color === COLOR_PURPLE;
      });
    }

    return creepFlags;
  };
}