import React , {useState} from 'react' ;


export default function TextForm(props) {
    const handletoup=()=>{
       console.log("uppercase was clicked");
       let newType=text.toUpperCase();
       setText(newType);
       props.showAlert("Upper case enble" , "success")
    }
    const bandletoch=(event)=>{
       console.log("onchange");
       setText(event.target.value);
    }
    const tolower=()=>{
        let tol=text.toLowerCase();
        console.log("tolowercase");
        setText(tol);
        props.showAlert("Lower case enble" , "success")
    }
    const reverse=()=>{
        let rev="";
        for(var i=text.length-1; i>=0; i--)
        {
            rev+=text[i];
        }
        setText(rev);
        props.showAlert("reverse case enble" , "success")
    }
    const[text,setText]=useState('enter the Input');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
<div className=" mb-3">
 <h1>{props.heading}</h1>
  <textarea className="form-control"  id="exampleFormControlTextarea1"  onChange={bandletoch} value={text} style={{backgroundColor:props.mode==='dark'?'white':'#02021d' ,color:props.mode==='dark'?'black':'white'}} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handletoup}>LowerToUpper</button>
<button className="btn btn-primary mx-3" onClick={tolower}>UpperToLower</button>
<button className="btn btn-primary" onClick={reverse}>ReverseText</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>THIS IS YOUR COUNT</h1>
      <p>{text.split(" ").length} Word  And {text.length} Charecter</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h4>Previou</h4>
      <p>{text}</p>
    </div>
    </>
  )
}
