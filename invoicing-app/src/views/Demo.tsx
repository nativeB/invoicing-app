import React from 'react';
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';
import Select from "../components/elements/Select"
// this is just to demo my components to see if they work before i move them to the app

class Demo extends React.Component {
  render(){
    return (
        <div >
          <Button icon="plus" label={"New Invoice"} onClick={()=>console.log('test')}  size={"large"} />
          <Input customClass={["dark"]} value='hello' label={"Add new Item"} onInput={()=>console.log('test')}  size={"large"} />
          <Input customClass={["dark"]} label={"Add new Item"} onInput={()=>console.log('test')}  inputType={'date'} size={"large"} />
          <Select customClass={["dark"]} options={[{label:"Volvo",value:"volvo"},{label:"Saab",value:"saab"}]} label={"Add new Item"} onChange={()=>console.log('test')}  />
        </div>
      );
  }
  
}

export default Demo;
