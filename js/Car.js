AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "https://raw.githubusercontent.com/bjsfsmx-0544/PRO_C151_SP_V2/refs/heads/master/assets/car/scene.gltf" }
    },
    init: function() {
      const position = { x: 0, y: 50, z: 80 };
      const rotation = { x: 0, y: -100, z: 0 };
      this.el.setAttribute("gltf-model", this.data.modelRef);
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
    }
  });