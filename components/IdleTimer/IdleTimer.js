/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import { useIdleTimer } from 'react-idle-timer'
import CloseIcon from '@components/SVGComponents/CloseIcon'


/*===== Styles =====*/
import componentStyles from './styles.module.scss'


/*===== JS Functions =====*/
//redirect location
let redirectUrl = "/?idle"  //test setting, replace

//set time in minutes
let timeout = 2.5 //total time
//let timeout = 0.75  //shortened for testing
let promptBeforeIdle = 0.5 //time left in prompt

//convert minutes to milliseconds
timeout = timeout * 1000 * 60
promptBeforeIdle = promptBeforeIdle * 1000 * 60

export default function IdleTimer({ 
  //Props
}) {

  const [state, setState] = useState('Active')
  const [remaining, setRemaining] = useState(timeout)
  const [open, setOpen] = useState(false)

  //fires when prompt timer runs out
  const onIdle = () => {
      //alert("onIdle");
      setState('Idle')
      setOpen(false)
      redirect()
    }

    //fires when user interacts
    const onActive = () => {
      //alert("onActive");
      setState('Active')
      setOpen(false)
    }

    //fires on prompt display
    const onPrompt = () => {
      //alert("onPrompt");
      setState('Prompted')
      setOpen(true)
    }

    //resets application
    const redirect = () => {
      if(window.location.href.indexOf("idle") > -1){
        //already on idle redirect, just refresh
        router.reload();
      } else{
        //send user to redirect location
        router.push(redirectUrl);
      }
      
    }

    const { getRemainingTime, activate } = useIdleTimer({
      onIdle,
      onActive,
      onPrompt,
      timeout,
      promptBeforeIdle,
      throttle: 500
    })

    useEffect(() => {
      const interval = setInterval(() => {
        setRemaining(Math.ceil(getRemainingTime() / 1000))
      }, 500)

      return () => {
        clearInterval(interval)
      }
    })

    const handleStillHere = () => {
      activate()
    }

    const timeTillPrompt = Math.max(remaining - promptBeforeIdle / 1000, 0)
    const seconds = timeTillPrompt > 1 ? 'seconds' : 'second'


  return (
    <div 
      id="IdleTimerWrapper"
      className={componentStyles.IdleTimer}
      data-modal-status={
        open ? 'active' : 'inactive'
      }
      //data-modal-status="active"
      data-modal-show=""
      //key={router.asPath}
    >

     {/* <h1>React Idle Timer</h1>
      <h2>Confirm Prompt</h2>
      <br />
      <p>Current State: {state}</p>
      {timeTillPrompt > 0 && (
        <p>
          {timeTillPrompt} {seconds} until prompt
        </p>
      )}*/}

      {/*Backdrop filter, click to close*/}
      <div 
        className={componentStyles.backdrop} 
        onClick={handleStillHere}
      />

      <div
        className={componentStyles.modalInner}
      >

        <div className={componentStyles.InactivityModal}>
          <div 
            className={componentStyles.closeButton}
            onClick={handleStillHere}
          >
            <CloseIcon/>
          </div>

            <div className={componentStyles.titleArea}>
              <img src="/images/icons/iconIdleTimer.svg" alt="" />
              <h2>Are you still here?</h2>              
            </div>
            <div className={componentStyles.copyArea}>
              <p>Resetting in {remaining} seconds</p>
            </div>
            <div className={componentStyles.buttonArea}>
              <button onClick={handleStillHere}>KEEP BROWSING</button>
            </div>
            
            
          </div>
        </div>
        
    </div>
  )
}
