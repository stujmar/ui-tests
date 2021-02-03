import React from "react"
import { head, body } from '../Universal.module.css'

import styles from './Radio.module.css'

const Radio = () => {

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
                        checked={true}
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
                    className="form-check-input"
                    />
                    Option 3
                </label>
                </div>

                <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                    Save
                </button>
                </div>
            </form>
        </div>
    )
}

export default Radio;