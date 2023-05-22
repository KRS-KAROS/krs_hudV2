export default {
  HealthIndicator: new ProgressBar.Line('#HealthIndicator', {
    color: 'rgb(255, 0, 0)',
    trailColor: 'rgb(255, 0, 0)',
    strokeWidth: 4,
    trailWidth: 5,
    duration: 1000,
 
  }),
  
  ArmourIndicator: new ProgressBar.Circle('#ArmourIndicator', {
    color: 'rgb(0, 140, 255)',
    trailColor: 'rgb(35, 35, 35)',
    strokeWidth: 3,
    trailWidth: 3,
    duration: 600,
  }),

  StaminaIndicator: new ProgressBar.Circle('#StaminaIndicator', {
    color: 'rgb(255, 255, 204)',
    trailColor: 'rgb(35, 35, 35)',
    strokeWidth: 3,
    trailWidth: 3,
    duration: 600,
  }),

  HungerIndicator: new ProgressBar.Circle('#HungerIndicator', {
    color: 'rgb(255, 164, 59)',
    trailColor: 'rgb(35, 35, 35)',
    strokeWidth: 3,
    trailWidth: 3,
    duration: 600,
  }),

  ThirstIndicator: new ProgressBar.Circle('#ThirstIndicator', {
    color: 'rgb(0, 225, 255)',
    trailColor: 'rgb(35, 35, 35)',
    strokeWidth: 3,
    trailWidth: 3,
    duration: 600,
  }),

  StressIndicator: new ProgressBar.Circle('#StressIndicator', {
    color: 'rgb(255, 74, 104)',
    trailColor: 'rgb(35, 35, 35)',
    strokeWidth: 4,
    trailWidth: 5,
    duration: 600,
  }),

  OxygenIndicator: new ProgressBar.Circle('#OxygenIndicator', {
    trailColor: 'rgb(35, 35, 35)',
    strokeWidth: 3,
    trailWidth: 3,
    duration: 600,
  }),

  SpeedIndicator: new ProgressBar.Line('#SpeedIndicator', {
    color: 'rgb(255, 255, 255)',
    trailColor: 'rgb(35, 35, 35)',
    strokeWidth: 4,
    trailWidth: 4,
    screenLeft: 20,
    duration: 600,
  }),

  FuelIndicator: new ProgressBar.Circle('#FuelIndicator', {
    color: 'rgb(255, 74, 104)',
    trailColor: 'rgb(35, 35, 35)',
    strokeWidth: 4,
    trailWidth: 5,
    duration: 600,
  }),

  VoiceIndicator: new ProgressBar.Circle('#VoiceIndicator', {
    strokeWidth: 3,
    trailWidth: 3,
    duration: 100,
  }),
};
