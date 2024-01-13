import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Detail(props){

    let { id } = useParams();
    let findItem = props.dino.find((x) => x.id == id);
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);
    let [fade2, setFade2] = useState('');

    useEffect(()=>{
        const timer = setTimeout(() => { setAlert(false) }, 2000);
        setTimeout(() => {
            setFade2('end')
        }, 100); 
        return () => clearTimeout(timer);
        return ()=> { setFade2('')}
    }, [])

    return(
        <div className={'container start '+ fade2}>
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

            <Nav variant="tabs" defaultActiveKey="/link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">button 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">button 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">button 2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab}/>
            
        </div> 
    )
}

function TabContent({tab}) {

    let [fade, setFade] = useState('');
    
    useEffect(()=>{
        setTimeout(() => {
            setFade('end')
        }, 100);
        return ()=> {
            setFade('')
        }
    }, [tab])

    return (
        <div className={'start '+ fade}>
            {[<div>contents 0</div>, <div>contents 1</div>, <div>contents 2</div>][tab]}
        </div>
    )
}

export default Detail;