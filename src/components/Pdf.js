import React from 'react';
import Pdf from "react-to-pdf";
import './Pdf.css';
import './Button.css';
import { PieChart } from 'react-minimal-pie-chart';
const ref = React.createRef();
const PDF = (props) => {
  
  
  return (
      

    <>
   
      <div className="Post" ref={ref}>

        <h1 className="heading1">Portfolio Analysis</h1>
        <h4 className="clientname">Client name</h4>
        
        <div className="heading">
          <h1>Overall Sector</h1>
        </div>
        <div className="tables" >
      <table>
  <thead>
    <tr>
      <th>Sector</th>
      <th>Current Allocation</th>
      <th>Sector%</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="Sector">FMNG</td>
      <td data-column="Current Allocation">{props.inputfmng}</td>
      <td data-column="Sector%">{props.inputfmng/300}%</td>

      
    </tr>
    <tr>
      <td data-column="Sector">BFSI</td>
      <td data-column="Current Allocation">{props.bfsiinput}</td>
      <td data-column="Sector%">{props.bfsiinput/300}%</td>
     
    </tr>
    <tr>
      <td data-column="Sector">Auto</td>
      <td data-column="Current Allocation">{props.autoinput}</td>
      <td data-column="Sector%">{props.autoinput/300}%</td>
     
    </tr>
    <tr>
      <td data-column="Sector">Pharma</td>
      <td data-column="Current Allocation">{props.pharma}</td>
      <td data-column="Sector%">{props.pharma/300}%</td>
     
    </tr>
    <tr>
      <td data-column="Sector">Infra</td>
      <td data-column="Current Allocation">{props.infra}</td>
      <td data-column="Sector%">{props.infra/300}%</td>
    
    </tr>
  </tbody>
</table>
      </div>  
      <div className="piechart">
        <div className="pchart">
      <PieChart
        data={[
    { title: 'FMNG', value:10, color: '#E38627' },
    { title: 'BFSI', value: 15, color: '#C15C67' },
    { title: 'Auto', value: 20, color: '#6A8138' },
    { title: 'Pharma', value: 36, color: '#6A2195' },
    { title: 'Infra', value: 30, color: '#6A2136' },
  ]} 
/>
</div>
</div>
<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Portfolio Value(in INR)</th>
      <th>Change(in INR)</th>
      <th>%Change</th>
      
    </tr>
  </thead>
  <tbody>
  <tr>
      <td data-column="Month">Dec-19</td>
      <td data-column="Portfolio Value">8,95,0000</td>
      <td data-column="Change">N/A</td>
      <td data-column="%Change">N/A</td>

      
    </tr>
    <tr>
      <td data-column="Month">Jan-20</td>
      <td data-column="Portfolio Value">{props.jan}</td>
      <td data-column="Change">{props.jan-8950000}</td>
      <td data-column="%Change">{(props.jan -8950000 /895000)*100}</td>

      
    </tr>
    <tr>
      <td data-column="Month">Feb-20</td>
      <td data-column="Portfolio Value">{props.feb}</td>
      <td data-column="Change">{props.feb-props.jan}</td>
      <td data-column="%Change">{(props.feb -props.jan /props.jan)*100}</td>

     
    </tr>
    <tr>
      <td data-column="Month">March-20</td>
      <td data-column="Portfolio Value">{props.march}</td>
      <td data-column="Change">{props.march - props.feb}</td>
      <td data-column="%Change">{(props.march -props.feb /props.feb)*100}</td>
     
    </tr>
    <tr>
      <td data-column="Month">April-20</td>
      <td data-column="Portfolio Value">{props.april}</td>
      <td data-column="Change">{props.april- props.march}</td>
      <td data-column="%Change">{(props.april -props.march /props.march)*100}</td>
     
    </tr>
    <tr>
      <td data-column="Month">May-20</td>
      <td data-column="Portfolio Value">{props.may}</td>
      <td data-column="Change">{props.may - props.april}</td>
      <td data-column="%Change">{(props.may -props.april /props.april)*100}</td>
     
    </tr>
    <tr>
      <td data-column="Month">June-20</td>
      <td data-column="Portfolio Value">{props.june}</td>
      <td data-column="Change">{props.june - props.may}</td>
      <td data-column="%Change">{(props.june -props.may /props.may)*100}</td>
     
    </tr>
    <tr>
      <td data-column="Month">July-20</td>
      <td data-column="Portfolio Value">{props.july}</td>
      <td data-column="Change">{props.july - props.june}</td>
      <td data-column="%Change">{(props.july -props.june /props.june)*100}</td>
     
    </tr>
    <tr>
      <td data-column="Month">Aug-20</td>
      <td data-column="Portfolio Value">{props.aug}</td>
      <td data-column="Change">{props.aug - props.july}</td>
      <td data-column="%Change">{(props.aug -props.july /props.july)*100}</td>
     
    </tr>
    <tr>
      <td data-column="Month">September-20</td>
      <td data-column="Portfolio Value">{props.sep}</td>
      <td data-column="Change">{props.sep - props.aug}</td>
      <td data-column="%Change">{(props.sep -props.aug /props.aug)*100}</td>
     
    </tr>
    <tr>
      <td data-column="Month">October-20</td>
      <td data-column="Portfolio Value">{props.oct}</td>
      <td data-column="Change">{props.oct - props.sep}</td>
      <td data-column="%Change">{(props.oct -props.sep /props.sep)*100}</td>
     
    </tr>
    <tr>
      <td data-column="Month">November-20</td>
      <td data-column="Portfolio Value">{props.nov}</td>
      <td data-column="Change">{props.nov - props.oct}</td>
      <td data-column="%Change">{(props.nov -props.oct /props.oct)*100}</td>
     
    </tr>
    <tr>
      <td data-column="Month">December-20</td>
      <td data-column="Portfolio Value">{props.dec}</td>
      <td data-column="Change">{props.dec - props.nov}</td>
      <td data-column="%Change">{(props.dec -props.nov /props.nov)*100}</td>
     
    </tr>

  </tbody>
</table>   
      </div>
      
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf} className="button">Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;