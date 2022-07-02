AFRAME.registerComponent('cursor-listener',{
    schema:{
        selectedItemId:{default:'',type:'string'}
    },
    
    init:function(){
    this.handleMouseEnterEvents()
    this.handleMouseLeaveEvent()
    //this.handleClickEvents()
    
    },
    
    handlePoster:function(){
    const id=this.el.getAttribute('id')
    const posterId=[
        'captain-america',
        'iron-man',
        'aquaman',
        'wonder-woman'
    ]
    if(posterId.includes(id)){
    const placeContainer=document.querySelector('#places-container')
    placeContainer.setAttribute('cursor-listener',{
        selectedItemId:id
    })
    this.el.setAttribute('material',{
        color:'#d76b30',
        opacity:1
    })
    }
    },
    
    handleMouseEnterEvents:function(){
        this.el.addEventListener('mouseenter',()=>{this.handlePoster()})
    },
    
    handleMouseLeaveEvent:function(){
        this.el.addEventListener('mouseleave',()=>{
            const {selectedItemId}=this.data
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute('id')
                if(id==selectedItemId){
                el.setAttribute('material',{
                    color:'#0077cc',
                    opacity:1
                })
                }
    
            }
        })
    },

    
 handleMouseClickEvents: function () {
    // Mouse Click Events
    this.el.addEventListener("click", () => {
      const { selectedItemId } = this.data;

      const fadeBackgroundEl = document.querySelector("#fadeBackground");
      const titleEl = document.querySelector("#app-title");
      const cursorEl = document.querySelector("#camera-cursor");

      //check the selected item to set the "info-banner" component on the plane
      if (selectedItemId) {
        fadeBackgroundEl.setAttribute("visible", true);
        fadeBackgroundEl.setAttribute("info-banner", {
          itemId: selectedItemId,
        });
        titleEl.setAttribute("visible", false);
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.03,
          radiusOuter: 0.04,
        });
      } else {
        //else make the plane invisible
        fadeBackgroundEl.setAttribute("visible", false);
        titleEl.setAttribute("visible", true);
        cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
        cursorEl.setAttribute("geometry", {
          radiusInner: 0.08,
          radiusOuter: 0.12,
        });
      }
    });
  },

    update:function(){
     const fadebgE1=document.querySelector('#fadeBackground')
     var c=fadebgE1.children;
     if(c.length>0){
        var i;
        for(i=0;i<c.length;i++){
         fadebgE1.removeChild(c[i])
        }

     }

     else{
        this.handleMouseClickEvents()
     }
    }
    
    
    })
