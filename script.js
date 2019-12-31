window.onload = () => {
    const INITIAL_ZOOM_POSITION = 5;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    var geometry = new THREE.BoxGeometry( 1,1,1 );
    var material = new THREE.MeshBasicMaterial( { color: '#4488EE' } );
    var cube = new THREE.Mesh( geometry, material );

    var lineMaterial = new THREE.LineBasicMaterial( { color: '#4488EE' } );
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3( -1, 0, 0) );
    geometry.vertices.push(new THREE.Vector3( 0, 1, 0) );
    geometry.vertices.push(new THREE.Vector3( 1, 0, 0) );
    var lineGeometry = new THREE.BoxGeometry( 1,1,50 );
    var line = new THREE.Line( lineGeometry, lineMaterial );

    scene.add( cube );
    scene.add( line );

    camera.position.z = INITIAL_ZOOM_POSITION;

    window.addEventListener('wheel', function(event) {
        if (event.deltaY < 0) {
            camera.position.z -= 1;
        }
        else if (event.deltaY > 0) {
            camera.position.z += 1;
        }
    });

    var animate = function () {
        requestAnimationFrame( animate );
    
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    
        renderer.render( scene, camera );
    };

    animate()
}