import { useDispatch, useSelector } from "react-redux";
import Header from './Header';

const Home = () => {
    const countVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const add = () => {
        dispatch({
            type: 'add',
        })
    };
    
    const sub = () => {
        dispatch({
            type: 'sub',
        })
    };

    const storeDetailsFun = () => {
        dispatch({
            "type":"saveDetails",
            "data" : {"name":" Vinoth " , "email":"vino@gmail.com"}
        })
    }

    return (
        <div className="Homepage">
            <Header/>
            <h1>This is the home page</h1>
            <h1> Your Counter value: {countVal}</h1>
            <input type="button" value="add"  onClick={add}/>
            <input type="button" value="sub"  onClick={sub}/>
            <h4> This will display in about page! </h4>
            <button onClick = { storeDetailsFun }> display </button>
        </div>
    );
    
};

export default Home;