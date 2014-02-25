app.scene.camera={
	init:function(target){
		this.setMainCam(target);
	},
	setMainCam:function(target){
		var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 10000 );
		camera.position.set(0,70,-100);
		// camera.rotation.y=Math.PI;
		var vecteur = new THREE.Vector3(target.position.x,target.position.y+10,target.position.z+100)
		camera.lookAt(vecteur);
		app.settings.camera=camera;
		app.settings.player.add(app.settings.camera);
	}
}