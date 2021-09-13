import React, {useEffect} from 'react'
import './brochures/B1.css'
import './App.css';
// import Animatour, { Guide } from 'animatour' /// v1
import { animatour, Brochure } from 'animatour';









function App() {
  
  useEffect(()=>{
    animatour.newTour('Default Tour', {
      currentStep: 0,
      steps:[
        {
          title: 'START',
          element: '',
          content: 'start page - no element (index 0)',
          stepDuration: 3000,
        },
        {
          title: 'STEP 1',
          element: '.step-1-element',
          content: 'Step One content (index 1)',
          margin: 0,
          ringColor: '#ffa',
          stepDuration: 3000,
        },
        {
          title: 'STEP 2',
          element: '.step-2-element',
          content: 'Step Two Content (index 2)',
          margin: 10,
          ringColor: 'green',
          ringWidth: '8px',
          stepDuration: 3000,

        },
        {
          title: 'STEP 3',
          element: '.step-3-element',
          content: 'Step Three Content (index 3)',
          margin: 20,
          ringColor: 'blue',
          stepDuration: 3000,

        },
        {
          title: 'STEP 4',
          element: '.step-4-element',
          content: 'Step Four Content (index 4)',
          stepDuration: 3000,

        },
        {
          title: 'STEP 5',
          element: '.step-5-element',
          content: 'Step Five Content (index 5)',
          ringWidth: '15px',
          margin: 4,
          stepDuration: 3000,

        },
        {
          title: 'STEP 6',
          element: '.step-6-element',
          content: 'Step Six Content (index 6)',
          stepDuration: 3000,

        },
        {
          title: 'STEP 7',
          element: '.step-7-element',
          content: 'Step Seven Content (index 7)',
          stepDuration: 30000,
          duration: 0, // should use this for moving elements

        },
        {
          title: 'END',
          element: '',
          content: 'end page - no element',
          stepDuration: 3000,

        },
      ]
    })
  })



 
  return (
    <div className="App"> 
    <div></div>
    <Brochure/>

    <div style={{display: 'flex', flexDirection: 'column'}}>


    <button onClick={()=>console.log(animatour.getAllTours())}>get all tours</button>
    <button onClick={()=>console.log(animatour.open())}>open guide</button>
    <button onClick={()=>animatour.open('Default Tour')}>open 'default tour'</button>
    <button onClick={()=>animatour.open('Tour Two')}>open 'tour two'</button>

    <div className='step-1-element test'>step 1</div>
    <div className='step-2-element test'>step 2</div>
    <div className='step-3-element test'>step 3</div>

    </div>
   



       

      <div className='section section1'>
        <h1>Section 1</h1>
        <p className='thang step-4-element test'>standard body scroll (step 4)</p>
      </div>


      <div className='section section2'>
        <div className='side-scroll'>

        <h1>Section 2</h1>
        <p className='thang step-5-element test'>This is some text here (step 5)</p>
        </div>
      </div>


      <div className='section section3'>
        <h1 className='animatour-3'>Section 3</h1>
        <p className='thang step-6-element test'>This is test area one (step 6)</p>
      </div>


      <div className='section section4'>
        <h1 className='animatour-3'>Section 4 </h1>
        <p className='thang step-6-element test'>This is test area one (step 6)</p>

    <div className='rotating-box'>
        <div className='step-7-element'>A moving element</div>
    </div>

      </div>
      
    </div>
  );
}

export default App;





//? BASIC REQUIREMENTS ______________________________________________________________
//? Create a modal to test along the way
//? Use scoped comments that can be filtered

//= 1 - Import artifacts separately =================================================
///     Where tours is the logic controller and Guide is the modal
///     The modal should self import the tours logic controller so it can be used as `<Guide />`
//  import { tours, Guide } from 'animatour-v2
// tours.function()
// <Guide />

//- 2 - Create a tour (requires id) [id, config, single step, steps, steps + config]
///__________________________________________________________________________________
// tours.newTour('My Tour')


///__________________________________________________________________________________
// tours.newTour('My Tour', { 
//    ...config 
// })


///__________________________________________________________________________________
// tours.newTour('My Tour', { 
//    steps: {step}
// })

///__________________________________________________________________________________
// tours.newTour('My Tour', { 
//    steps: [...steps]   
// })

///__________________________________________________________________________________
// tours.newTour('My Tour', { 
//    ...config,
//    steps: [...steps]
// })


//- 3 - Create a secondary tour =====================================================
// tours.newTour('Tour Two', {
//    ...config,
//    steps: [...steps]
// })


//- 4 - Submit a config object to a tour ============================================
/// values should remain unchanged if not used here
// tours.setConfig('Tour Two', { 
//    ...config,
// })


//- 5 - Add steps to a tour [single, multiple] ======================================
///__________________________________________________________________________________
// tours.addSteps('My Tour', {
//    steps: [...steps]
// })

///__________________________________________________________________________________
// tours.addSteps('My Tour', {
//    steps: [...steps]
// })













//? ADVANCED CONTROL ___________________________________________________________
//? Use advanced control methods to start, exit, reset, continue, set step

//- 1 - Start a tour from step 0 ====================================================
/// show the guide, start from 0 or start screen if exists
// tours.start('My Tour')


//- 2 - Start a tour from step 3 ====================================================
/// show the guide, start the tour at selected step
// tours.start('My Tour', 3)


//- 3 - Close the tour ==============================================================
/// close the tour, but do not reset current step
// tours.close('My Tour')


//- 4 - Continue a tour from its current step =======================================
/// show the guide and continue from current step
// tours.continue('My Tour')


//- 5 - reset a tour to step 0 ======================================================
/// will not change visibility of the guide, just current step
// tours.reset('My Tour')


//- 6 - Set the current step of the tour externally =================================
// tours.setStep('My Tour', 3)
// tours.setStep('Tour Two', 0)


//- 7 - Quit the tour ===============================================================
/// close the guide and reset to step 0
// tours.exit('My Tour')










//? CUSTOM MODAL ___________________________________________________________
//? 
/// pass config to a custom component as props??
/// that way the user can just use the logic and config in the component













// const CustomModal = (props) => {
//   return(
//     <div>
//       <h3>Custom Modal</h3>
//       <button onClick={props.next}>next</button>
//     </div>
//   )
// }




// let tourA = new Animatour({
//   steps: [{
//     title: 'Step 0',
//     element: '.tour-step-0',
//     content: '(0) Added from array in config'
//   },
//   {
//     title: 'Step 1',
//     element: '.tour-step-1',
//     content: '(1) added from array in config'
//   }],
// })


// tourA.addSteps(
//   {
//     title: 'Step 2',
//     element: '.tour-step-2',
//     content: '(2) addSteps single object'
//   },
// )


// tourA.addSteps([
//   {
//     title: 'Step 3',
//     element: '.tour-step-3',
//     content: '(3) addSteps with array'
//   },
//   {
//     title: 'Step 4',
//     element: '.tour-step-4',
//     content: '(4) addSteps with array'
//   }
// ])

// console.log(tourA.steps)










//! -------------------------------------------------------------------------------

// class Controller extends React.Component{
//   constructor(props){
//       super(props)
//       this.state = {
//         thing: 'thingy'
//       }
//   }
//   test (){
//     console.log('test')
//   }
  
//   static staticTest (){
//       this.test()
//       console.log('static test')
//   }
  
  
//   // Rest of the component's code
//   render(){
//           return(
//               <div>
//               <button onClick={this.test}>test</button>
//               {this.state.thing}
//           </div>
//       )
//   }
// };

// class Controller extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       thing: 'hide guide'
//     }
//   }
  
//   test (arg){
//     console.log(`test: ${arg}`)
//   }
//   showGuide(){
//     this.setState({thing: 'show guide!'})
//   }
      

  
//   // Rest of the component's code
//   render(){

//     return(
//       <div ref={(component) => window.main = component }>
//         <button onClick={() => this.test('button')}>test</button>
//         {this.state.thing}
//       </div>
//     )
//   }
// };

// const Parent = () => {
//   return(
//     <Controller ref={(component) => window.main = component }/>
//   )
// }
// let main
// const w = (func) => {
//   if(window && typeof window !== 'undefined' && window.main && typeof window.main !== 'undefined'){
//     main = window.main
//     return true
//   }else{
//     console.log(`You cannot call '${func}' without a guide component`)
//     return false
//   }
// }

// const obj = {
//   objTest: (arg) => {w(`objTest(${arg})`) && main.test(arg) },
//   showGuide: () => {w('show guide') && main.showGuide() },
// }

// // Controller.staticTest()

// obj.objTest('external')
// obj.objTest('external')
// obj.objTest('external')
// obj.objTest('external')
// obj.objTest('external')

// setTimeout(() => {
//   obj.objTest('timeout')
// }, 1000);

// setTimeout(() => {
//   obj.showGuide()
// }, 3000);
