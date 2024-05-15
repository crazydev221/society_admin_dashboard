import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core'
 
class WithoutMsgValidation extends ValidatorComponent {
 
    render() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
        return (
            <React.Fragment>
                <div className={`form-group form-group-default 
                    ${this.props.require ? 'required' : ''} ${this.state.isValid ? '' : 'has-error'}`} 
                    aria-required="true"
                >
                    <label>{this.props.label}</label>
                    <div className="controls">
                        <input
                            {...rest}
                            ref={(r) => { this.input = r; }}
                    />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default WithoutMsgValidation;