import React, { Component } from 'react';

class DrumPad extends Component{
 
    constructor(props){
        super(props);
        this.state={
            bank:false,
            power:true,
            mode: '',
            press:1,
            bankOne : {
                Q: {
                  keyCode: 81,
                  keyTrigger: 'Q',
                  id: 'Heater-1',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                },
                W: {
                  keyCode: 87,
                  keyTrigger: 'W',
                  id: 'Heater-2',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                },
                E: {
                  keyCode: 69,
                  keyTrigger: 'E',
                  id: 'Heater-3',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                },
                A: {
                  keyCode: 65,
                  keyTrigger: 'A',
                  id: 'Heater-4',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                },
                S: {
                  keyCode: 83,
                  keyTrigger: 'S',
                  id: 'Clap',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                },
                D: {
                  keyCode: 68,
                  keyTrigger: 'D',
                  id: 'Open-HH',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                },
                Z: {
                  keyCode: 90,
                  keyTrigger: 'Z',
                  id: "Kick-n'-Hat",
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
                },
                X: {
                  keyCode: 88,
                  keyTrigger: 'X',
                  id: 'Kick',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                },
                C: {
                  keyCode: 67,
                  keyTrigger: 'C',
                  id: 'Closed-HH',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
                },
              },
              bankTwo : {
                Q: {
                  keyCode: 81,
                  keyTrigger: 'Q',
                  id: 'Chord-1',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
                },
                W: {
                  keyCode: 87,
                  keyTrigger: 'W',
                  id: 'Chord-2',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
                },
                E: {
                  keyCode: 69,
                  keyTrigger: 'E',
                  id: 'Chord-3',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
                },
                A: {
                  keyCode: 65,
                  keyTrigger: 'A',
                  id: 'Shaker',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
                },
                S: {
                  keyCode: 83,
                  keyTrigger: 'S',
                  id: 'Open-HH',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
                },
                D: {
                  keyCode: 68,
                  keyTrigger: 'D',
                  id: 'Closed-HH',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
                },
                Z: {
                  keyCode: 90,
                  keyTrigger: 'Z',
                  id: 'Punchy-Kick',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
                },
                X: {
                  keyCode: 88,
                  keyTrigger: 'X',
                  id: 'Side-Stick',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
                },
                C: {
                  keyCode: 67,
                  keyTrigger: 'C',
                  id: 'Snare',
                  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
                }
              }
        }
        this.bankChange=this.bankChange.bind(this);
        this.powerSetup=this.powerSetup.bind(this);
        this.playSound=this.playSound.bind(this);
        this.triggerSetup=this.triggerSetup.bind(this);
        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.setVolume=this.setVolume.bind(this);
    }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    
  }
  setVolume(){
var media = document.querySelectorAll('audio');
// console.log(media[1])
media.forEach((med)=>{
  med.volume = document.getElementById('volume1').value;
  console.log("hello" + med.volume);
})

    
  }
    powerSetup(){
      this.setState({
        power:!this.state.power,
        mode:''
      })  
      // console.log(this.state.power)
   
    }
    handleKeyPress(e){
      
      if (this.state.bankOne[String.fromCharCode(e.keyCode)] || this.state.bankTwo[String.fromCharCode(e.keyCode)])
                this.playSound(e,String.fromCharCode(e.keyCode));
    }
    triggerSetup(e){
      this.setState({
        triggeredKey:e.target.id.toUpperCase()
      })
      
      this.playSound();
    }
    bankChange(){
            this.setState({
                bank:!this.state.bank
            })
            
    }
    playSound(event,ch=''){
      let id;
      if(ch===''){
       
       id = event.target.id.toString().toUpperCase();
       
      }else{
        id=ch;
      }
 
    if(this.state.power){
      let sound=document.getElementById(id);
      
      sound.currentTime=0;
      sound.play();
        if (!this.state.bank) {
          this.setState({
            mode: this.state.bankOne[id].id
          })
        } else {
          this.setState({
            mode: this.state.bankTwo[id].id
          })
        }
    }
    }
    render(){          
        return (
          <div id="drum-machine">
            <div className="key">
              < div className = "drum-pad"
              id = "Q"
              onClick = {
                this.playSound
              } id='q'>
                <audio volume='1' className="clip" id="Q">
                {
                  (this.state.power===true)?((this.state.bank === false) ? ( < source src = {
                      this.state.bankOne.Q.url
                    }
                    />):(<source src = {
                    this.state.bankTwo.Q.url
                  }
                  />)):(<source src=""/>)}</audio > Q
              </div>
              < div className = "drum-pad"
              onClick = {
                this.playSound
              } id='w'>
                <audio volume='1' className="clip"  id="W" >
                {
                  (this.state.power===true)?((this.state.bank === false) ? ( < source src = {
                      this.state.bankOne.W.url
                    }
                    />):(<source src = {
                    this.state.bankTwo.W.url
                  }
                  />)):(<source src=""/>)}</audio > W
              </div>
              < div className = "drum-pad"
              onClick = {
                this.playSound
              } id='e'>
                <audio volume='1' className = "clip"
                      
                        id = "E" > {
                            (this.state.power===true)?((this.state.bank === false) ? ( < source src = {
                                this.state.bankOne.E.url
                              }
                              />):(<source src = {
                              this.state.bankTwo.E.url
                            }
                            />)):(<source src=""/>)}</audio > E
              </div>
              < div className = "drum-pad"
              onClick = {
                this.playSound
              } id='a'>
                < audio volume='1' className = "clip"
                      
                        id = "A" > {
                            (this.state.power===true)?((this.state.bank === false) ? ( < source src = {
                                this.state.bankOne.A.url
                              }
                              />):(<source src = {
                              this.state.bankTwo.A.url
                            }
                            />)):(<source src=""/>)}</audio > A
              </div>
              < div className = "drum-pad"
              onClick = {
                this.playSound
              } id='s'>
                <audio volume='1' className="clip"  id="S" >
                        {
                          (this.state.power===true)?((this.state.bank === false) ? ( < source src = {
                              this.state.bankOne.S.url
                            }
                            />):(<source src = {
                            this.state.bankTwo.S.url
                          }
                          />)):(<source src=""/>)}</audio> S
              </div>
              < div className = "drum-pad"
              onClick = {
                this.playSound
              } id='d'>
                <audio volume='1' className = "clip"
                        
                        id = "D" > {
                            (this.state.power===true)?((this.state.bank === false) ? ( < source src = {
                                this.state.bankOne.D.url
                              }
                              />):(<source src = {
                              this.state.bankTwo.D.url
                            }
                            />)):(<source src="" />)}</audio > D
              </div>
              <div className = "drum-pad"
              onClick = {
                this.playSound
              } id="z">
                <audio volume='1' className="clip"  id="Z">
                        {
                          (this.state.power===true)?((this.state.bank === false) ? ( < source src = {
                              this.state.bankOne.Z.url
                            }
                            />):(<source src = {
                            this.state.bankTwo.Z.url
                          }
                          />)):(<source src="" />)}</audio > Z
              </div>
              < div className = "drum-pad"
              onClick = {
                this.playSound
              } id="x" >
                <audio volume='1' className="clip" id="X">
                          {
                            (this.state.power===true)?((this.state.bank === false) ? ( < source src = {
                                this.state.bankOne.X.url
                              }
                              />):(<source src = {
                              this.state.bankTwo.X.url
                            }
                            />)):(<source src='' />)}</audio > X
              </div>
              <div className="drum-pad" id='c' onClick={this.playSound} >
                        <audio volume='1' className="clip"  id="C">

                        {
                         (this.state.power)?((this.state.bank===false)?(<source src = {
                          this.state.bankOne.C.url
                        }
                        />):(<source src = {
                        this.state.bankTwo.C.url
                        }
                        />)):(<source />)}
                        </audio>C
              </div>
            </div>
            <div id="display">
              <div className="power">
                <p>Power</p>
                <label htmlFor="toggle1" className="toggle-1">
                  <input
                    type="checkbox"
                    id="toggle1"
                    className="toggle-1_input"
                    />
                  <span className="toggle-1_button" onClick = { this.powerSetup } />
                </label>
              </div>
              <div className="mode" >{ this.state.mode }</div>
              <div className="volume">
                <input
                  type="range"
                  name="volume"
                  className="range"
                  id="volume1"
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={this.setVolume}
                />
              </div>

              <div className="bank">
                <p>Bank</p>
                <label htmlFor = "toggle2"
                className = "toggle-2"
                >
                  <input
                    type="checkbox"
                    id="toggle2"
                    className="toggle-2_input"
                      />
                  <span className = "toggle-2_button"
                  onClick = {
                    this.bankChange
                  }
                  />
                </label>
              </div>
            </div>
          </div>
        );
    }
}

export default DrumPad;