import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as ArrowLeft} from '../assets/icon-arrow-left.svg';

type Props = {
  path: string;
  label: string;
}

function Navigation(props: Props) {
  const navigate = useNavigate()
  const { path, label } = props;
    return (
      <div className='navigation' onClick={()=>{
        navigate(path)}}>
      <ArrowLeft/>
      <h3>{label}</h3>
    </div>
      
    );
}



export default Navigation;
