import React, { Component } from 'react';
import PDF from './Pdf';
import './Form.scss';
import './Button.css'
class Post extends Component {
    state = {
        inputfmng: '',
        bfsiinput: '',
        autoinput: '',
        pharma:'',
        infra:'',
        jan:'',
        feb:'',
        march:'',
        april:'',
        may:'',
        june:'',
        july:'',
        aug:'',
        sep:'',
        oct:'',
        nov:'',
        dec:'',

        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.inputfmng || !this.state.bfsiinput || !this.state.autoinput || !this.state.pharma || !this.state.infra || !this.state.jan || !this.state.feb || !this.state.march || !this.state.april || !this.state.may || !this.state.june || !this.state.july || !this.state.aug || !this.state.sep || !this.state.oct || !this.state.nov || !this.state.dec){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <div className="form-flex">
                                        <div class="table-container" role="table" aria-label="Destinations">
  <div class="flex-table header" role="rowgroup">
  <div class="flex-row first" role="columnheader">Sectors</div>
  <div class="flex-row" role="columnheader">Amount in INR</div>
  
</div>
<div class="flex-table row" role="rowgroup">
  <div class="flex-row first" role="cell"> FMNG</div>
  <div class="flex-row" role="cell"><input type="number" class="inputfmng" onChange={this.onChange('inputfmng')}/> </div>
  
</div>
<div class="flex-table row" role="rowgroup">
  <div class="flex-row first"  role="cell">BFSI</div>
  <div class="flex-row" role="cell"><input type="number" class="bfsiinput" onChange={this.onChange('bfsiinput')}/></div>
  
</div>
<div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">Auto</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="autoinput" onChange={this.onChange('autoinput')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">Pharma</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="pharma" onChange={this.onChange('pharma')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">Infra</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="infra" onChange={this.onChange('infra')}/></div>
     
    </div>
   
      
    </div>
  </div>
</div>
<div class="table-container" role="table" aria-label="Destinations">
  <div class="flex-table header" role="rowgroup">
  <div class="flex-row first" role="columnheader">Month</div>
  <div class="flex-row" role="columnheader">Amount in INR</div>
  
</div>
<div class="flex-table row" role="rowgroup">
  <div class="flex-row first" role="cell"> Jan-2020</div>
  <div class="flex-row" role="cell"><input type="number" class="jan" onChange={this.onChange('jan')}/> </div>
  
</div>
<div class="flex-table row" role="rowgroup">
  <div class="flex-row first"  role="cell">Feb-2020</div>
  <div class="flex-row" role="cell"><input type="number" class="feb" onChange={this.onChange('feb')}/></div>
  
</div>
<div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">March-2020</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="march" onChange={this.onChange('march')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">April-2020</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="april" onChange={this.onChange('april')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">May-2020</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="may" onChange={this.onChange('may')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">June-2020</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="june" onChange={this.onChange('june')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">July-2020</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="july" onChange={this.onChange('july')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">August-2020</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="aug" onChange={this.onChange('aug')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">September</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="sep" onChange={this.onChange('sep')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">October-2020</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="oct" onChange={this.onChange('oct')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">November-2020</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="nov" onChange={this.onChange('nov')}/></div>
     
    </div>
   
      
    </div>
  </div>
  <div class="flex-table row" role="rowgroup">
  <div class="flex-row rowspan first">December-2020</div>
  <div class="column">
    <div class="flex-row">
      <div class="flex-cell" role="cell"><input type="number" class="dec" onChange={this.onChange('dec')}/></div>
     
    </div>
   
      
    </div>
  </div>
</div>
</div>

                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="button">Submit</button>
                                                </div>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF inputfmng={this.state.inputfmng} bfsiinput={this.state.bfsiinput} autoinput={this.state.autoinput} pharma={this.state.pharma} infra={this.state.infra} jan={this.state.jan} feb={this.state.feb} march={this.state.march} april={this.state.april} may={this.state.may} june={this.state.june} july={this.state.july} aug={this.state.aug} sep={this.state.sep} oct={this.state.oct} nov={this.state.nov} dec={this.state.dec}/>
                    )
                }
            </>
        );
    }
}

export default Post;