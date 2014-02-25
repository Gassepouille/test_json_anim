app.scene.player={
	init:function(){
		return this.setPlayer();
	},
	setPlayer:function(){

		var yawObject = new THREE.Object3D();
		yawObject.position.y = 0;
		yawObject.position.x = 0;
		yawObject.position.z = 0;
		var loader = new THREE.JSONLoader();
		// loader.load( 'assets/models/monster.js', function ( geometry, materials ) {
		loader.load( 'assets/models/ogro/ogro-light.js', function ( geometry, materials ) {

			// adjust color a bit
			var material = materials[ 0 ];
			material.morphTargets = true;
			material.color.setHex( 0xffaaaa );
			material.ambient.setHex( 0x222222 );

			var faceMaterial = new THREE.MeshFaceMaterial( materials );

			var morph = new THREE.MorphAnimMesh( geometry, faceMaterial );

				// one second duration

				// morph.duration = 1000;

				// morph.scale.set( 0.03,0.03,0.03 );

				morph.position.set( 0, 50, 0 );
				// morph.position.set( 0, 0, 0 );
				morph.rotation.y = -Math.PI*0.5;

				morph.matrixAutoUpdate = false;
				morph.updateMatrix();
				yawObject.add(morph);
				app.settings.player=yawObject;
				app.settings.player.name="Robert";
				app.loadScene();

		} );
		

	}
}