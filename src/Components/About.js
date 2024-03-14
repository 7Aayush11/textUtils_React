import React from 'react'


export default function About(props) {
  return (
    <>
    <div className="container text-center">
        <hr/><h2>About App</h2>
        <p>The Navbar button won't work currently as <u>GitHub pages does not support routing for single page apps</u>.
        This problem will be solved soon.
        </p>
        <hr/>
        <div className="row">
            <div className='row mb-3'>
                <div className="col">
                    <div className="card" style={{
                        boxShadow: props.mode==='dark' ? '0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)':'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        width: "18rem" ,backgroundColor: props.mode==='dark' ? '#badcff':'white', 
                        color: props.mode==='dark'?'#000032':'#000032'}}>
                        <div className="card-body">
                            <h5 className="card-title">Convert Uppercase</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">What happen's on clicking?</h6><hr/>
                            <p className="card-text">
                                A simple button that convert's all of the characters to UPPERCASE.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{
                        boxShadow: props.mode==='dark' ? '0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)':'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        width: "18rem" ,backgroundColor: props.mode==='dark' ? '#badcff':'white', 
                color: props.mode==='dark'?'#000032':'#000032'}}>
                        <div className="card-body">
                            <h5 className="card-title">Convert Lowercase</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">What happen's on clicking?</h6><hr/>
                            <p className="card-text">
                                A simple button that convert's all of the characters to lowercase.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{
                        boxShadow: props.mode==='dark' ? '0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)':'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        width: "18rem" ,backgroundColor: props.mode==='dark' ? '#badcff':'white', 
                color: props.mode==='dark'?'#000032':'#000032'}}>
                        <div className="card-body">
                            <h5 className="card-title">Clear Text</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">What happen's on clicking?</h6><hr/>
                            <p className="card-text">
                                Now you don't need to keep removing/backspacing every character or word 
                                just tap the button and get your whole text area cleared.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="card" style={{width: "18rem" ,backgroundColor: props.mode==='dark' ? '#badcff':'white',
                    boxShadow: props.mode==='dark' ? '0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)':'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
                color: props.mode==='dark'?'#000032':'#000032'}}>
                        <div className="card-body">
                            <h5 className="card-title">Remove Extra Space</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">What happen's on clicking?</h6><hr/>
                            <p className="card-text">
                                Handling all the extra spaces is getting difficult don't worry just paste the text in 
                                the text clear tap the button "Remove Extra Space" and get your job done.
                            </p>
                        </div>
                    </div>
                </div>                
                <div className="col">
                    <div className="card" style={{width: "18rem" ,backgroundColor: props.mode==='dark' ? '#badcff':'white',
                    boxShadow: props.mode==='dark' ? '0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)':'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                color: props.mode==='dark'?'#000032':'#000032'}}>
                        <div className="card-body">
                            <h5 className="card-title">Copy Text</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">What happen's on clicking?</h6><hr/>
                            <p className="card-text">
                                Everyone know's the shortcut key but it cannot be used in the mobile phones 
                                so it comes in handy if u have just a simple button to do all the work of selecting and copying.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "18rem" ,backgroundColor: props.mode==='dark' ? '#badcff':'white',
                    boxShadow: props.mode==='dark' ? '0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19)':'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                color: props.mode==='dark'?'#000032':'#000032'}}>
                        <div className="card-body">
                            <h5 className="card-title">Improve Text</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">What happen's on clicking?</h6><hr/>
                            <p className="card-text">
                                It makes a space after every fullstop and make convert's 
                                all the frist character's of the sentence to uppercase.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
