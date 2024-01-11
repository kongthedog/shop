import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Detail(props){

    let { id } = useParams();
    let findItem = props.dino.find((x) => x.id == id);
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(() => { setAlert(false) }, 2000); 
        return () => clearTimeout(timer);
    }, [])

    return(
        <div className="container">
            {
                alert === true 
                ? <div className='alert alert-warning'>
                2초이내 구매시 할인
                </div>
                : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + '/img/dinosaur_'+ findItem.id +'.jpg'} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{ findItem.title }</h4>
                    <p>{ findItem.content }</p>
                    <p>{ findItem.price }</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
  }

  export default Detail;