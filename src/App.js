import './App.css';
import {useState} from "react";
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
//resource https://www.youtube.com/watch?v=a-AHRgL-Yl4&list=PL6DxKON1uLOH0vVpdrZhUAVpHerNbUxfF&index=6&ab_channel=UlbiTV


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
    // const [loaderVisible, setLoaderVisible] = useState(false)
    //
    // return (
    //     <div className="app">
    //         <button onClick={() => {
    //             setLoaderVisible(!loaderVisible)
    //         }}>{loaderVisible ? 'Hide' : 'Show'}</button>
    //         <div className="wrap">
    //             <CSSTransition
    //                 in={loaderVisible}  // триггер активации анимации
    //                 timeOut={5000}
    //                 classNames={{
    //                     enterActive:'circle-show',
    //                     enterDone:'circle-rotate',
    //                     exitActive: 'circle-hide'
    //                 }}
    //                 mountOnEnter
    //                 unmountOnExit
    //             >
    //                 <div className='circle'></div>
    //             </CSSTransition>
    //         </div>
    //     </div>
    // );


    //пример работы SwitchTransition

    // const [mode, setMode] = useState('out-in')
    // const [toggle, setToggle] = useState(false)
    //
    // function changeHandler(e) {
    //     setMode(e.target.value)
    // }
    //
    // return (
    //     <div className="app">
    //         <div>
    //             <label htmlFor={'out-in'} className="label">out-in</label>
    //             <input onChange={(e) => changeHandler(e)} id={'out-in'} type="radio" name={'radio'} value={'out-in'}/>
    //             <label htmlFor={'in-out'} className="label">in-out</label>
    //             <input onChange={(e) => changeHandler(e)} id={'in-out'} type="radio" name={'radio'}  value={'in-out'}/>
    //         </div>
    //         <SwitchTransition mode={mode}>
    //             <CSSTransition
    //                 key={toggle}
    //                 timeout={500}
    //                 classNames={'fade'}
    //             >
    //                 <button onClick={() => setToggle(!toggle)}>
    //                     {toggle ? "Hello world" : "good Bye world"}
    //                 </button>
    //             </CSSTransition>
    //         </SwitchTransition>
    //     </div>
    // );

    // пример анимации списков и групп
    const [text, setText] = useState('')
    const [todoList, setTodoList] = useState([{id: 1, text: 'Learn animations'}, {id: 2, text: 'study react deeper'}])

    function addTodo() {
        setTodoList([...todoList, {id: Date.now(), text}])
        setText('')
    }

    return (
        <div className="app">
            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                <button onClick={() => addTodo()}>Add</button>
            </div>
            <TransitionGroup component={'ul'}>
                {todoList.map(({id, text}) =>
                    <CSSTransition
                        key={id}
                        timeout={500}
                        classNames={'todo'}
                    >
                        <li className={'todo'}
                            onClick={() => setTodoList([...todoList.filter((todo) => todo.id !== id)])}
                        >{id} {text}</li>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );

}

export default App;
