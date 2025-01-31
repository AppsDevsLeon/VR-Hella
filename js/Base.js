AFRAME.registerComponent("base", {
    schema: {
      radius: { type: "number", default: 150 },
      height: { type: "number", default: 3 }
    },
  
    init: function() {
      // Hacer algo cuando el componente se adjunte por primera vez
      this.el.setAttribute("geometry", {
        primitive: "cylinder",
        radius: this.data.radius,
        height: this.data.height
      });
      this.el.setAttribute("material", { color: "#1769aa" });
    }
  });