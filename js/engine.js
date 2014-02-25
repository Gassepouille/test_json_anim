app.scene.engine={
	clock:{},
	init:function(){
		// Init var for model animation
		this.clock = new THREE.Clock();

		//  Animation loop
		 window.requestAnimFrame = (function(){
	      return  window.requestAnimationFrame       || 
	              window.webkitRequestAnimationFrame || 
	              window.mozRequestAnimationFrame    || 
	              window.oRequestAnimationFrame      || 
	              window.msRequestAnimationFrame     || 
	              function( callback ){
	                window.setTimeout(callback, 1000 / 60);
	              };
	    })();
	    (function gameLoop(){
	    	requestAnimFrame(gameLoop);
	    	app.scene.engine.gameRender(app.settings);
	    })()
	},
	gameRender:function(settings){
		settings.renderer.render(settings.scene, settings.camera );
		

		this.animatePlayer(settings.player);
		this.movePlayer(settings.player);

	},
	animatePlayer:function(playa){
		var delta = this.clock.getDelta();

		if (app.settings.kdown==true) {
			playa.children[0].updateAnimation( 1000 * delta );
		}
	},
	movePlayer:function(playa){
		if (app.settings.up) {
			playa.translateZ(1);
		}
		if (app.settings.gauche) {
			playa.rotation.y+=0.01;
		};
		if (app.settings.droite) {
			playa.rotation.y-=0.01;
		};
		if (app.settings.down) {
			playa.translateZ(-1);
		};
	}
}