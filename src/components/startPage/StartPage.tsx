import React, {useEffect, useState} from "react";
import ReactTypingEffect from 'react-typing-effect';
import {ParticlesBackground} from "../../common/ParticlesBackground";
import style from "./StartPage.module.scss";
import {NavLink} from "react-router-dom";
import {RoutePath} from "../../utils/route-path";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faForward} from "@fortawesome/free-solid-svg-icons/faForward";


const random = (min: number, max: number) => {
    const rand = min + Math.random() * (max - min + 1)
    return Math.floor(rand)
}

export const StartPage = () => {

    const description = "<Hi, my name is Snezhana Korsak. I'm Front-end Developer. I want to tell " +
        "you about my projects, skills " + "  " +
        "and show you my portfolio/>"
    const question = "<Are you ready?/>"

    const [text, setText] = useState(description)
    const [position, setPosition] = useState({left: "0px", top: "0px"})
    const [show, setShow] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setText(question)
        }, 20000)
        setTimeout(() => {
            setShow(true)
        }, 24000)
    })

    const eraseDelayTime = text === question ? 600000 : 5000
    const highlightNumbersWords = [4, 5, 7, 8]

    const changePosition = () => {
        const left = random(0, 200) + "px"
        const top = random(0, 200) + "px"
        setPosition({left, top})
    }

    const returnPosition = () => {
        setPosition({left: "0px", top: "0px"})
    }

    const forwardHandler = () => {
        setShow(true)
    }

    return (
        <div className={style.startPage}>
            <ParticlesBackground/>

            <div className={style.iconForward}>
                    <FontAwesomeIcon icon={faForward} size="lg" onClick={forwardHandler}/>
            </div>

            { !show ? <div className={style.typingText}>
                <ReactTypingEffect
                    text={text}
                    speed={60}
                    eraseSpeed={20}
                    eraseDelay={eraseDelayTime}
                    displayTextRenderer={(text) => {
                        return (
                            <span>
                                {text.split(' ').map((char, i) => {
                                    return (
                                        <span
                                            key={i}
                                            style={{
                                                marginRight: 10,
                                                color: highlightNumbersWords.includes(i) ? '#009e66' : ''
                                            }}
                                        >{char}</span>
                                    );
                                })}
                            </span>
                        );
                    }}
                >
                    "Hello"
                </ReactTypingEffect>
            </div>
                : <div className={style.typingText}>{question}</div>
            }

            { show && <div className={style.buttons}>
                <NavLink to={RoutePath.navigation}
                         className={`${style.btn} ${style.yes}`}
                         onMouseEnter={returnPosition}
                >
                    yes
                </NavLink>
                <NavLink to={RoutePath.notFound}
                         className={`${style.btn} ${style.no}`}
                         onMouseEnter={changePosition}
                         style={position}
                >
                    no
                </NavLink>
            </div>}

        </div>
    );
};

