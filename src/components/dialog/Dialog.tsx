
type Props = {
  bottom?: any,
  show: boolean,
  title: string,
  description: string,
}

function Dialog(props: Props) {
  const {bottom,show, title, description}  = props;
  let dialog = <></>;
  if(show) {
   dialog =  <div className='dialog' >
      <div className='dialog-content'>
        <h1>{title} </h1>
        <p className="text-sm"> {description} </p>
        <div className='dialog-buttons'>
          <div className='dialog-button-content'>
          {bottom}
            </div>
            </div>
        </div>
    </div>
  }
    return (
      <>
      {dialog}
      </>
      
    );
}



export default Dialog;
