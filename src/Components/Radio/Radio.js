import React, { useState } from "react"
import { head, body } from '../Universal.module.css'

import styles from './Radio.module.css'

const Radio = () => {

    const [option, setOption] = useState('option1');

    return (
        <div className={body} >
            <h2 className={head}>    
                Radio
            </h2>
            <form>
                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="option1"
                        checked={option === 'option1'}
                        onChange={handleOptionChange}
                        className="form-check-input"
                    />
                    Option 1
                    </label>
                </div>
                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="option2"
                        checked={option === 'option2'}
                        onChange={handleOptionChange}
                        className="form-check-input"
                    />
                    Option 2
                    </label>
                </div>
                <div className="form-check">
                    <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value="option3"
                        checked={option === 'option3'}
                        onChange={handleOptionChange}
                        className="form-check-input"
                    />
                    Option 3
                    </label>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary mt-2" type="submit">
                    Submit
                    </button>
                </div>

                </form>
        </div>
    )
}

export default Radio;