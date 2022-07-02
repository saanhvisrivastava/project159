AFRAME.registerComponent('place-side-view',{

    init:function(){
this.createPlaces()
    },
createPlaceThumnail:function(position,id){
const entityE1=document.createElement('a-entity')
entityE1.setAttribute('visible',true)
entityE1.setAttribute('id',`place-${id}`)
entityE1.setAttribute('geometry',{primitive:'circle',radius:2.5})
entityE1.setAttribute('material',{
    src:'./assets/helicopter.png',
    opacity:0.9
})
entityE1.setAttribute('position',position)
entityE1.setAttribute('cursor-listener',{})
return entityE1
},

createPlaces:function(){
    const sideViewContainer=document.querySelector('#side-view-container')
    let previousXposition=-150
    let previousYposition=30
    for(var i=1;i<=4;i++){
        const position={
            x:(previousXposition+=50),
            y:(previousYposition+=2),
            z:-40

        }
        const entityE1=this.createPlaceThumnail(position,i)
        sideViewContainer.appendChild(entityE1)
    }
},

tick:function(){
const placesContainer=document.querySelector('#places-container')
const {state}=placesContainer.getAttribute('tour');
if(state==='view' || state==='change-view'){
    this.el.setAttribute('visible',true)

}
else{
this.el.setAttribute('visible',false)
}
}
})


