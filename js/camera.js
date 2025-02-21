AFRAME.registerComponent('follow-tube',{
    schema:{
        radius:{type:'number', default:85},
        speed:{type:'number',default:0.5}
    },

    init: function(){
        this.angle=0;
    },

    tick:function(time, deltaTime){
        const dt=deltaTime/1000;
        this.angle += this.data.speed*dt

        const x=this.data.radius*Math.cos(this.angle);
        const z=this.data.radius*Math.sin(this.angle);

    this.el.setAttibute('position',`${x} 0 ${z}`);

    const h=(-this.angle*180/Math.PI)
    this.el.setAttibute('rotation',`0 ${h} 0`)
 
    }


})