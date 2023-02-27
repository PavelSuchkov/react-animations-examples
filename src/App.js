import './App.css';
import {useState} from "react";
import {Transition, CSSTransition} from "react-transition-group";

function App() {

    //  пример работы кастомногоспиннера + react.Transition
    // const [loaderVisible, setLoaderVisible] = useState(false)
    //
    // return (
    //     <div className="app">
    //         <button onClick={() => {setLoaderVisible(!loaderVisible)}}>{loaderVisible ? 'Hide' : 'Show'}</button>
    //         <div className="wrap">
    //             <Transition
    //                 in={loaderVisible}  // триггер активации анимации
    //                 timeout={500}
    //                 mountOnEnter
    //                 unmountOnExit
    //             >
    //                 {state => <div className={`circle ${state}`}/>}
    //             </Transition>
    //         </div>
    //     </div>
    // );

    //пример работы кастомного спиннера + react CssTransition
    const [loaderVisible, setLoaderVisible] = useState(false)

    return (
        <div className="app">
            <button onClick={() => {
                setLoaderVisible(!loaderVisible)
            }}>{loaderVisible ? 'Hide' : 'Show'}</button>
            <div className="wrap">
                <CSSTransition
                    in={loaderVisible}  // триггер активации анимации
                    timeOut={5000}
                    classNames={{
                        enterActive:'circle-show',
                        enterDone:'circle-rotate',
                        exitActive: 'circle-hide'
                    }}
                    mountOnEnter
                    unmountOnExit
                >
                    <div className='circle'></div>
                </CSSTransition>
            </div>
        </div>
    );

}

export default App;
