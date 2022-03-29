import React from 'react';
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';
import Select from "../components/elements/Select"
class Demo extends React.Component {
  render(){
    return (
        <div >
          <Button icon="plus" label={"New Invoice"} onClick={()=>console.log('test')} type= {"grey"} size={"large"} />
          <Input customClass={["dark"]} value='hello' label={"Add new Item"} onInput={()=>console.log('test')} type= {"grey"} size={"large"} />
          <Input customClass={["dark"]} label={"Add new Item"} onInput={()=>console.log('test')} type= {"grey"} inputType={'date'} size={"large"} />
          <Select customClass={["dark"]} options={[{label:"Volvo",value:"volvo"},{label:"Saab",value:"saab"}]} label={"Add new Item"} onChange={()=>console.log('test')}  />
        </div>
      );
  }
  
}

export default Demo;
