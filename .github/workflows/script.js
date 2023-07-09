window.onload = function() {
    confirm("Inicio")
    // Crie uma cena
    var scene = new THREE.Scene();

    // Crie uma câmera
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Crie um renderizador
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas').appendChild(renderer.domElement);

    // Carregue o arquivo PDB
    var loader = new THREE.PDBLoader();
    loader.load('4zqk.pdb', function(geometry, atoms) {
        // Crie um material para o modelo
        var material = new THREE.MeshBasicMaterial({ color: 0xffffff });

        // Crie um objeto de malha
        var mesh = new THREE.Mesh(geometry, material);

        // Adicione o objeto à cena
        scene.add(mesh);
    });

    // Função de renderização
    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    // Inicie a renderização
    render();
};
