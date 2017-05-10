AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],
  init: function () {
    this.el.addEventListener('raycaster-intersected', function () {
      console.log('Player hit something!');
	  //console.log(this);
    });
	this.el.addEventListener('raycaster-intersected-cleared', function () {
      console.log('Player left something!');
    });
  }
});